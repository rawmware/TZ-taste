#!/usr/bin/env python3
"""Deterministic composer: turns each generated DNA (data/dnas/*.json) into a
REAL, distinct, complete webpage at pages/<slug>.html.

Design: 40 family kits (concept + dialect + brands + headlines) x 14 concept
copy kits (real, specific copy banks) x ~28 section archetypes (2-4 layout
variants each). Seeded RNG per DNA slug -> 4-7 sections per page, shuffled
order, varied composition. Styled by the DNA's own tokens (palette roles,
fonts, radius, shadow) with a contrast guard.

Usage: python3 tools/compose_pages.py [--limit N] [--only slug1,slug2]
Output: pages/<slug>.html
"""
import hashlib
import html
import json
import os
import random
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data", "dnas")
OUT = os.path.join(ROOT, "pages")

BANNED = ["lorem", "pack my box", "build anything", "unmistakable",
          "quick brown fox", "liquor jugs", "lorem ipsum"]


def rng_for(slug):
    seed = int(hashlib.sha256(slug.encode("utf-8")).hexdigest()[:16], 16)
    return random.Random(seed)


def esc(s):
    return html.escape(str(s), quote=True)


def lum(hexcolor):
    h = hexcolor.lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    r, g, b = (int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))
    f = lambda c: c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)


def contrast(a, b):
    l1, l2 = lum(a), lum(b)
    return (max(l1, l2) + 0.05) / (min(l1, l2) + 0.05)


def pick(rng, pool, n=1):
    """Unique sample; returns list (or single item if n==1)."""
    n = min(n, len(pool))
    s = rng.sample(pool, n)
    return s[0] if n == 1 else s


def gf_href(fonts):
    fams = []
    for f in fonts:
        fam = f.replace(" ", "+")
        if f in ("Anton", "Archivo Black", "Bebas Neue", "Cinzel"):
            fam += ":wght@400;700"
        fams.append("family=" + fam)
    return "https://fonts.googleapis.com/css2?" + "&".join(fams) + "&display=swap"


MONTHS = ["Nov", "Dec", "Jan", "Feb", "Mar"]


def some_date(rng):
    return "%s %d" % (rng.choice(MONTHS), rng.randint(1, 28))


def some_time(rng):
    h = rng.choice([7, 8, 9, 10, 11])
    m = rng.choice(["00", "15", "30", "45"])
    ap = "PM" if h >= 7 else "AM"
    hh = h if h <= 12 else h - 12
    return "%d:%s %s" % (hh, m, ap)

# =====================================================================
# CONCEPT COPY KITS — real, specific copy banks per webpage concept.
# =====================================================================

CONCEPTS = {}

CONCEPTS["night-event"] = {
    "acts": ["Glass Teeth", "Mira Volt", "Fusebox", "Kilowatt Kid", "Velvet Static",
             "Nocturne Bloom", "Acid Fern", "DJ Palindrome", "Copper Lung", "Soft Machine Gun",
             "Petal Burner", "Midnight Cassette", "Ultra Violet", "Bass Communion", "Neon Pastoral",
             "Ghost Frequency", "Iron Blossom", "DJ Heavy Air", "Slow Riot", "Crystal Method Actor",
             "Paper Tiger Lily", "Sub Rosa", "Electric Picnic", "Vanilla Static", "Chrome Petal",
             "Night Gardener", "Phosphor Twin", "DJ Low Orbit"],
    "venues": ["Sector 7 Warehouse", "The Foundry Basement", "Pier 9 Annex", "The Old Print Works",
               "Bunker North", "The Glasshouse Loft", "Depot 12", "The Furnace Room"],
    "areas": ["the east yard", "the loading dock", "the mezzanine", "the back room",
              "the courtyard", "the basement", "the roof", "the main hall"],
    "ticket_tiers": [("Early bird", 15), ("General", 25), ("Door", 35), ("Crew supporter", 50)],
    "house_notes": [
        "Earplugs at the door. Water is free.",
        "Coat check is $5 and every cent goes to the crew.",
        "Look after each other — that is the whole policy.",
        "No photos on the dancefloor. Be here now.",
        "Last entry 1 AM. The night ends when it ends.",
        "Cash and card at the bar. Tips go to the staff, all of them.",
    ],
    "headlines": ["Sleep is a rumor.", "Louder than the week.", "Six hours, no headliners.",
                  "The room is the headliner.", "Bass you can lean on.", "Doors at eleven. Excuses at home.",
                  "Two rooms. One strobe budget.", "Dance like rent is due."],
    "sublines": ["Four DJs, two rooms, zero filler — the night builds itself.",
                 "A warehouse, a soundsystem, and everybody you actually like.",
                 "No VIP. No bottle service. Just the music, turned all the way up.",
                 "The kind of night people talk about on Monday. Be there Sunday."],
    "ctas": ["Get tickets", "See the lineup", "Claim a spot"],
}

CONCEPTS["cocktail-bar"] = {
    "drinks": [
        ("Bees Knees", 14, "Bathtub gin, honey, lemon — served in a coupe, garnished with nothing."),
        ("French 75", 16, "Gin, champagne, lemon. Named for the field gun; drinks like one."),
        ("Corpse Reviver No. 2", 17, "Gin, Cointreau, Lillet, absinthe rinse. The house signature."),
        ("Sidecar", 15, "Cognac, Cointreau, lemon, sugared rim. Paris, by way of downtown."),
        ("Paper Plane", 15, "Bourbon, Aperol, Amaro Nonino, lemon. Bitter, bright, gone too fast."),
        ("Last Word", 16, "Gin, Chartreuse, maraschino, lime. Equal parts, no arguments."),
        ("Penicillin", 17, "Blended scotch, ginger, honey, Islay float. Smoke with a purpose."),
        ("Negroni Sbagliato", 14, "Prosecco steps in for gin. A beautiful mistake."),
        ("Oaxaca Old Fashioned", 16, "Reposado, mezcal, agave, bitters. The desert, in a rocks glass."),
        ("Aviation", 15, "Gin, maraschino, crème de violette, lemon. Tastes like 1916."),
        ("Boulevardier", 16, "Bourbon, Campari, sweet vermouth. The Negroni's older brother."),
        ("Southside", 14, "Gin, mint, lime, soda. The one your grandmother would order twice."),
        ("Vieux Carré", 17, "Rye, cognac, vermouth, Bénédictine, bitters. New Orleans, neat."),
        ("Jungle Bird", 15, "Dark rum, Campari, pineapple, lime. Tiki with a spine."),
        ("Espresso Martini", 16, "Vodka, espresso, coffee liqueur. Dessert that keeps you up."),
        ("Tommy's Margarita", 14, "Blanco, agave, lime. Nothing else. Nothing needed."),
    ],
    "hours": ["Doors 18:00 — 02:00", "Quartet nightly 21:00", "Kitchen closes 23:30", "Dress: sharp"],
    "headlines": ["The ice is cut by hand.", "Fourteen seats. No bad ones.",
                  "The card is engraved.", "Stirred, never rushed."],
    "sublines": ["A cocktail bar where the band plays until two and the gold leaf is real.",
                 "Small room, serious drinks. The menu changes when the seasons do.",
                 "Walk-ins welcome. Regulars remembered. Everyone else, soon enough."],
    "ctas": ["Reserve a table", "See the cocktail card", "Book the back room"],
}

CONCEPTS["diner"] = {
    "dishes": [
        ("The Blue Plate", 12, "Meatloaf, mashed, green beans. The way Tuesday is supposed to taste."),
        ("Patty Melt Deluxe", 11, "Rye, grilled onions, Swiss, thousand island. No notes."),
        ("Chicken & Waffles", 14, "Half bird, buttermilk waffle, hot honey. Order the coffee too."),
        ("Disco Fries", 9, "Gravy, mozzarella curds, scallions. A Jersey love letter."),
        ("Tuna Melt", 10, "The good tuna salad. Rye, toasted. Pickle on the side, obviously."),
        ("Country Fried Steak", 13, "Sawmill gravy, biscuits, two eggs any style. Bring an appetite."),
        ("BLT Supreme", 10, "Thick-cut bacon, heirloom tomato, Duke's mayo. Simple math."),
        ("Pancake Stack", 9, "Three buttermilk, salted butter, real maple. Short stack available for cowards."),
        ("Chili Cheese Dog", 8, "All-beef, house chili, cheddar, onions. Napkins: take three."),
        ("Club Sandwich", 11, "Triple-decker, turkey, bacon, the works. Cut on the diagonal, as law requires."),
        ("Fried Pickles", 7, "Ranch. You know why you're here."),
        ("Banana Cream Pie", 6, "Torched meringue, vanilla wafer crust. Save room."),
        ("Malted Shake", 7, "Vanilla, chocolate, or strawberry. Extra thick, extra straw."),
        ("Breakfast Burrito", 10, "Chorizo, potato, egg, green chile. Available all day, obviously."),
        ("Liver & Onions", 12, "For the regulars. You know who you are."),
        ("Rice Pudding", 5, "Cinnamon, raisins if you ask nice. Tastes like 1987."),
    ],
    "headlines": ["Open late. Judged never.", "Coffee's always on.",
                  "The griddle never lies.", "Booth 4 is yours."],
    "sublines": ["A chrome-and-vinyl institution. Breakfast all day, pie until it's gone.",
                 "Counter seats for the regulars, booths for everybody else.",
                 "Cash, card, and exact change all welcome. Tips keep the jukebox loud."],
    "ctas": ["See the menu", "Call for takeout", "Find us"],
}

CONCEPTS["school"] = {
    "courses": [
        ("M–I", "Metal I", "Cut, bend, join. Steel does not forgive; that is the lesson.", "TUE 18:00", "ROOM B", 12),
        ("W–II", "Wood II", "Joinery without nails. Measure twice is not a suggestion.", "WED 18:00", "ROOM C", 10),
        ("P–III", "Print III", "Letterpress and the grid. Ink is honest; it shows every mistake.", "THU 18:00", "ROOM A", 14),
        ("T–IV", "Textile IV", "Weave structure from nothing. Warp, weft, patience.", "FRI 18:00", "ROOM D", 8),
        ("D–I", "Drawing I", "Charcoal, paper, looking longer than feels comfortable.", "MON 18:00", "ROOM A", 16),
        ("C–II", "Ceramics II", "Centering is a metaphor. Also a skill.", "TUE 19:30", "KILN HOUSE", 10),
        ("B–I", "Bookbinding I", "Sew your first signature. Keep it forever.", "WED 19:30", "ROOM B", 12),
        ("G–III", "Glass III", "Furnace work. Respect the heat, love the gather.", "SAT 10:00", "HOT SHOP", 6),
        ("F–II", "Film II", "Shoot a roll. Develop it. Print one frame that matters.", "THU 19:30", "DARKROOM", 8),
        ("S–I", "Stone I", "Carve subtractively. There is no undo.", "SAT 13:00", "YARD", 8),
    ],
    "headlines": ["Learn by making.", "Eight weeks. Real tools.",
                  "Sit. Build. Learn. Repeat.", "Materials included. Excuses not."],
    "sublines": ["Evening workshops for people with day jobs and restless hands.",
                 "Real materials, real tools, real deadlines. Small classes, loud opinions.",
                 "No experience needed. No talent required. Showing up is the whole trick."],
    "ctas": ["Enroll", "See all workshops", "Claim a bench"],
}

CONCEPTS["studio"] = {
    "services": [
        ("Identity", "Logos, systems, guidelines. The whole face of the thing.", "from $4k"),
        ("Websites", "Designed, built, launched. Fast and honest.", "from $6k"),
        ("Art direction", "Shoots, sets, and the taste to say no.", "from $3k"),
        ("Packaging", "Shelf presence you can measure.", "from $5k"),
        ("Motion", "Idents, loops, and title sequences.", "from $4k"),
        ("Editorial", "Books, zines, and annual reports people keep.", "from $3k"),
        ("Wayfinding", "Signs that work when it rains.", "from $7k"),
        ("Naming", "The word before the logo.", "from $2k"),
    ],
    "steps": [("Listen", "We ask questions until it gets uncomfortable."),
              ("Sketch", "A hundred bad ideas, fast, on paper."),
              ("Build", "The good three, pushed until they break or sing."),
              ("Ship", "Files, guidelines, and a handoff that sticks.")],
    "stats": [("48", "projects shipped"), ("12", "years running"), ("9", "design awards"),
              ("3", "partners, no account managers"), ("100%", "of work we stand behind")],
    "testimonials": [
        ("They said no to our first three ideas. The fourth doubled our revenue.", "Mara Ellison, founder"),
        ("The only studio that ever sent work back because it wasn't good enough.", "Devon Park, CMO"),
        ("Fast, blunt, right. In that order.", "June Okafor, director"),
        ("Our packaging now outsells our ads. That was their doing.", "Theo Lindqvist, CEO"),
        ("Working with them felt like being edited by someone who cares.", "Priya Raman, editor"),
        ("They treat a menu like a monument. We love them for it.", "Sam Whitfield, restaurateur"),
    ],
    "headlines": ["Built, not decorated.", "Taste is a process.",
                  "We make the thing the thing.", "Good work, on purpose."],
    "sublines": ["An independent design practice. Small team, strong opinions, finished work.",
                 "We take on six projects a year. This is what that looks like.",
                 "No decks about decks. We design the thing itself."],
    "ctas": ["Start a project", "See selected work", "Book an intro call"],
}

CONCEPTS["shop"] = {
    "products": [
        ("Everyday Tote", 38, "12oz canvas, interior pocket. Carries the week."),
        ("Enamel Pin Set", 18, "Five pins. Your jacket was naked before."),
        ("Studio Mug", 24, "12oz stoneware, unglazed exterior. Dishwasher-safe, opinion-safe."),
        ("Print No. 04", 60, "Three-color risograph, edition of 100. Signed."),
        ("Desk Lamp Mini", 85, "Brass, dimmable, smug about it."),
        ("Wool Throw", 120, "Undyed lambswool. Heavier than it looks."),
        ("Pocket Notebook", 16, "48 pages, lay-flat binding. For lists and lies."),
        ("Ceramic Vase", 72, "Hand-thrown, slightly wonky on purpose."),
        ("Canvas Apron", 54, "Cross-back straps, three pockets. For serious messes."),
        ("Brass Key Hook", 28, "Solid brass. Your keys deserve better."),
        ("Linen Napkins, set of 4", 42, "Stonewashed flax. Dinners improve 20%."),
        ("Wall Clock", 95, "Silent sweep. Time, but polite."),
        ("Seed Tin", 14, "Twelve varieties. Spring, in a tin."),
        ("Soap Trio", 22, "Cedar, citrus, unscented. Cold-processed."),
        ("Market Basket", 46, "Woven seagrass. Fits exactly one ambitious shop."),
        ("Poster Tube", 12, "Kraft, acid-free. For prints you actually frame."),
    ],
    "headlines": ["Useful things, made well.", "Buy it once.",
                  "The shop of good decisions.", "Fewer, better things."],
    "sublines": ["A small shop of objects we use ourselves. If it breaks in a year, we stop selling it.",
                 "Every item is tested by the staff for a month before it earns a shelf.",
                 "Open daily. Shipping worldwide. Returns without the interrogation."],
    "ctas": ["Shop the collection", "See new arrivals", "Visit the store"],
}

CONCEPTS["hotel"] = {
    "rooms": [
        ("The Courtyard Room", 189, "Ground floor, private patio, morning sun. Sleeps two."),
        ("The Palm Suite", 320, "Top floor, wraparound balcony, outdoor shower."),
        ("The Garden Bungalow", 260, "Detached, plunge pool, hammock. The one people rebook."),
        ("The Lantern Room", 145, "Cozy, quiet, faces the frangipani tree."),
        ("The Captain's Quarters", 410, "Two bedrooms, full kitchen, the good view."),
        ("The Poolside Cabana", 230, "Steps from the water. Towels: unlimited."),
    ],
    "amenities": ["Saltwater pool", "Beach shuttle", "Outdoor cinema Fridays", "Yoga at sunrise",
                  "Bikes, free", "Rum bar till late", "No TVs, on purpose", "Dogs welcome"],
    "headlines": ["Check in. Slow down.", "The ocean is the minibar.",
                  "Barefoot since 1987.", "Rooms with a breeze."],
    "sublines": ["Twelve rooms, one pool, zero schedules. The hammocks are first-come.",
                 "A small beach hotel run by people who actually live here.",
                 "Breakfast is included. The sunset is too. Everything else is optional."],
    "ctas": ["Check availability", "See the rooms", "Plan your stay"],
}

CONCEPTS["teahouse"] = {
    "teas": [
        ("Sencha Supreme", 6, "First flush, Uji. Grass, sea air, clarity."),
        ("Hojicha Roast", 6, "Roasted green tea. Toasty, gentle, forgiving."),
        ("Gyokuro Shade-Grown", 12, "Three weeks under cover. Umami like broth."),
        ("Matcha Usucha", 8, "Stone-milled, whisked to order. Bright and alert."),
        ("Genmaicha", 5, "Green tea with roasted rice. Popcorn's elegant cousin."),
        ("Yuzu Kosho Latte", 7, "Not traditional. Delicious anyway."),
        ("Mugicha Barley", 4, "Caffeine-free, served cold. The summer default."),
        ("Sakura Blend", 7, "Cherry blossom, spring only. When it's gone, it's gone."),
        ("Anko Toast Set", 9, "Thick toast, red bean, butter. With any tea."),
        ("Warabimochi", 6, "Bracken starch, kinako. Wobbles correctly."),
        ("Dorayaki", 5, "Red bean pancakes. The 3 PM answer."),
        ("Kakigori", 8, "Shaved ice, seasonal syrup. Summer's main event."),
    ],
    "headlines": ["Sit. Sip. Stay.", "The kettle is always on.",
                  "Ninety minutes, one bowl.", "Quiet is the menu."],
    "sublines": ["A twelve-seat tea house. No laptops, no rush, no exceptions.",
                 "Tea whisked to order, sweets made each morning.",
                 "Reservations for the counter; the tables are for wandering in."],
    "ctas": ["See the menu", "Reserve the counter", "Find us"],
}

CONCEPTS["tech-product"] = {
    "features": [
        ("Offline first", "Works in tunnels, planes, and bad cafés. Syncs when you're back."),
        ("Private by design", "End-to-end encrypted. We can't see your stuff; that's the point."),
        ("Fast, actually", "Opens in under a second. Search is instant. No spinners."),
        ("Keyboard everything", "Every action has a shortcut. The mouse is optional."),
        ("Version history", "Every change, forever. Time travel for your work."),
        ("Team spaces", "Shared folders with permissions that make sense."),
        ("Dark mode", "A real one. Not just inverted."),
        ("Export anything", "Your data leaves when you do. No hostages."),
        ("Integrations", "Plays nice with the tools you already pay for."),
        ("Focus mode", "One thing on screen. Everything else waits."),
        ("Templates", "Start from something good, not something blank."),
        ("Mobile parity", "The phone app isn't a toy. It's the whole thing."),
    ],
    "tiers": [("Starter", 0, "For trying things out.", ["3 projects", "1 GB storage", "Community support"]),
              ("Pro", 12, "For people who do the work.", ["Unlimited projects", "100 GB storage", "Priority support", "Version history"]),
              ("Team", 29, "For crews.", ["Everything in Pro", "Shared spaces", "Admin controls", "SSO"])],
    "specs": [("Uptime", "99.99% trailing year"), ("Sync", "< 200 ms median"), ("Storage", "AES-256 at rest"),
              ("Compliance", "SOC 2 Type II"), ("Support", "Median reply 3 h"), ("Regions", "12 worldwide")],
    "headlines": ["Software that gets out of the way.", "Fast is a feature.",
                  "Your work, minus the waiting.", "Built for the obsessed."],
    "sublines": ["The tool we wanted, so we built it. Then our friends asked for it.",
                 "No onboarding videos. No certification courses. Open it and go.",
                 "Free to start. Priced for humans when you grow."],
    "ctas": ["Start free", "See pricing", "Talk to us"],
}

CONCEPTS["outdoors"] = {
    "trips": [
        ("Ridgeline Traverse", "3 days", 480, "Twelve miles of ridge, two huts, one very good sunset."),
        ("Glacier Morning", "1 day", 190, "Crampons provided. Hot chocolate mandatory."),
        ("Old Growth Walk", "Half day", 75, "Big trees, slow pace, naturalist guide."),
        ("Alpine Lake Swim", "1 day", 140, "Cold water, warm towels. Bragging rights included."),
        ("Night Sky Camp", "2 days", 320, "Telescopes, star charts, zero light pollution."),
        ("Coast Path Section", "4 days", 620, "Cliffs, coves, and pubs at the end of each day."),
        ("Desert Stars", "2 days", 290, "Sleep out. Wake up to the Milky Way."),
        ("Forest Bathing", "Half day", 60, "Shinrin-yoku with a certified guide. Phones stay in the van."),
    ],
    "headlines": ["Go outside. We'll handle the rest.", "The trail is the plan.",
                  "Small groups. Big country.", "Leave the map to us."],
    "sublines": ["Guided trips for people who like walking but hate logistics.",
                 "Groups of eight max. Guides who know the Latin names.",
                 "Gear provided. Snacks excellent. Weather: we check twice."],
    "ctas": ["See all trips", "Check dates", "Ask a guide"],
}

CONCEPTS["magazine"] = {
    "articles": [
        ("The Quiet Rebellion of the Corner Store", "How independent shops outlasted every prediction.", "Mara Ellison"),
        ("In Praise of the Long Lunch", "Ninety minutes that save the afternoon.", "Devon Park"),
        ("What the Night Shift Knows", "Notes from the hours nobody photographs.", "June Okafor"),
        ("The Lost Art of the Mixtape", "Ninety minutes, one side at a time.", "Theo Lindqvist"),
        ("Small Rooms, Loud Ideas", "Why the best venues hold two hundred, not two thousand.", "Priya Raman"),
        ("A Field Guide to Regulars", "They keep the lights on. Learn their names.", "Sam Whitfield"),
        ("The Secondhand Century", "Everything old is rented again.", "Ana Beltran"),
        ("Against the Algorithmic Menu", "Order like nobody is watching.", "Kit Mori"),
        ("The Typographer's Walk", "A city read one sign at a time.", "Ruth Adler"),
        ("Slow Web, Fast Friends", "The internet's best rooms have twelve people.", "Omar Haddad"),
        ("The Repair Manifesto", "Fix it. Keep it. Pass it on.", "Greta Nilsen"),
        ("Dawn Patrol", "The city at 5 AM belongs to bakers and runners.", "Leo Fontaine"),
        ("The Death of the Waiting Room", "And what replaced it.", "Iris Chen"),
        ("Analog Summer", "Film, paper, and other good decisions.", "Max Duarte"),
    ],
    "columns": ["The Long Read", "Notes", "Interviews", "Field Notes", "The Back Page"],
    "headlines": ["Issue 12: The Night Edition.", "Print is not dead. It moved.",
                  "Read slower.", "The independent issue."],
    "sublines": ["A quarterly for people who still finish things. 128 pages, no ads for things you don't need.",
                 "Essays, interviews, and field notes. Printed on paper that smells like paper.",
                 "Independent since the first issue. Subscriber-funded, reader-first."],
    "ctas": ["Subscribe", "Read the latest", "Find a stockist"],
}

CONCEPTS["community"] = {
    "programs": [
        ("Tool Library", "Borrow the drill. Keep the receipt.", "SAT 10–14"),
        ("Repair Café", "Bring the broken thing. Leave with the fixed thing.", "1ST SUN"),
        ("Seed Swap", "Envelopes provided. Stories encouraged.", "MAR & SEP"),
        ("Night Kitchen", "Cook together, eat together. Pay what you can.", "WED 18:00"),
        ("Bike Kitchen", "Fix your ride with help. Parts at cost.", "THU 17–20"),
        ("Zine Night", "Copier's warm. Bring twelve copies of anything.", "2ND FRI"),
        ("Garden Hours", "Weed, water, harvest. Take home a bag.", "SAT 09–12"),
        ("Language Table", "Practice over tea. All levels, no tests.", "TUE 19:00"),
        ("Mend & Make Do", "Visible mending circle. Holes welcome.", "3RD SAT"),
        ("Story Slam", "Five minutes, true story, no notes.", "LAST THU"),
    ],
    "headlines": ["Everyone's invited. Really.", "The commons, kept.",
                  "Show up. That's the membership.", "Free, and meant to stay that way."],
    "sublines": ["A neighborhood commons: tools, skills, and a kitchen. Run by volunteers, funded by neighbors.",
                 "No fees, no forms, no catch. Just show up and pitch in.",
                 "Part library, part workshop, part dinner party. All welcome."],
    "ctas": ["See the calendar", "Volunteer", "Become a neighbor"],
}

CONCEPTS["culture"] = {
    "shows": [
        ("The Glass Season", "A retrospective in three rooms.", "OCT 12 — JAN 20"),
        ("Night at the Observatory", "Telescopes on the roof, quartet in the hall.", "NOV 02"),
        ("Paper Worlds", "Two centuries of print, under glass.", "SEP 28 — DEC 15"),
        ("The Winter Program", "Six concerts, one very old piano.", "DEC — FEB"),
        ("Light / Motion", "Kinetic works after dark.", "NOV 15 — MAR 01"),
        ("Voices of the River", "An oral history, recorded live.", "OCT 30"),
        ("The Poster Wall", "One hundred years of shouting politely.", "PERMANENT"),
        ("Small Stages", "New work, forty seats, pay what you can.", "MONTHLY"),
        ("The Archive Opens", "Rare holdings, white gloves provided.", "1ST SAT"),
        ("Midnight Cinema", "Classics at midnight. Popcorn mandatory.", "FRI 23:59"),
    ],
    "headlines": ["This season, look closer.", "Culture keeps office hours.",
                  "The doors are open.", "Come for the art. Stay for the quiet."],
    "sublines": ["Exhibitions, concerts, and late nights. Free for members, cheap for everyone else.",
                 "A cultural program run like a public utility: open, regular, for everybody.",
                 "The calendar is full through spring. The café is good. The benches are comfortable."],
    "ctas": ["See what's on", "Become a member", "Plan your visit"],
}

CONCEPTS["bookshop"] = {
    "books": [
        ("The Night Orchard", "Elena Vasquez", 18, "A novel in stories. Every one ends at dusk."),
        ("A Field Guide to Forgetting", "Marcus Webb", 24, "Essays on memory, mercy, and letting go."),
        ("The Cartographer's Daughter", "Ingrid Solberg", 22, "Maps of places that never existed. Gorgeous."),
        ("Small Fires", "David Okafor", 16, "Poems you can read standing up."),
        ("The Repair Shop", "Hana Sato", 20, "A memoir of fixing things, including herself."),
        ("Winter Light", "Lars Eriksen", 26, "Photographs of the north. Mostly blue, somehow warm."),
        ("The Long Table", "Rosa Jimenez", 28, "Recipes and arguments from forty years of dinners."),
        ("Static", "Tom Beck", 18, "A thriller set entirely in one radio station."),
        ("The Beekeeper's Ledger", "June Park", 21, "Notes on hives, weather, and patience."),
        ("Orchard of Small Hours", "Elena Vasquez", 19, "The follow-up. Even better at dusk."),
        ("Paper Boats", "Sam Whitfield", 17, "Short stories. None longer than your commute."),
        ("The Atlas of Lost Things", "Nadia Rahman", 30, "Beautiful, melancholic, impossible to shelve."),
    ],
    "headlines": ["New books. Old chairs.", "Read here. Buy here. Stay.",
                  "Staff picks, honestly.", "The shop that reads."],
    "sublines": ["An independent bookshop with strong opinions and comfortable chairs.",
                 "Every shelf is curated by a human who read the books. Ask us anything.",
                 "Readings every Thursday. The wine is cheap and the opinions are free."],
    "ctas": ["Browse staff picks", "See events", "Order for pickup"],
}

# --- deeper pools for existing concepts ---
CONCEPTS["night-event"]["acts"] += [
    "DJ Cardboard Crown", "Velvet Hammer", "Night Bus", "Acid Grandma", "Modular Mary",
    "DJ Spare Room", "Concrete Lullaby", "Bassinet", "The Feedback Loop", "DJ Dog Ear",
    "Satin Static", "Warehouse Wendy", "Low Hum Choir", "DJ Basement Psalm",
]
CONCEPTS["night-event"]["headlines"] += [
    "The floor is lava. The ceiling is sweat.", "Bring earplugs. Leave changed.",
    "Strictly no requests. Strictly all dancing.", "The afterparty is the preparty.",
]
CONCEPTS["cocktail-bar"]["drinks"] += [
    ("Bloodhound", 16, "Gin, dry vermouth, strawberry. The name is worse than the drink."),
    ("Bijou", 17, "Gin, Chartreuse, sweet vermouth. A jewel, literally."),
    ("Remember the Maine", 16, "Rye, cherry heering, absinthe. A toast with history."),
    ("Army & Navy", 15, "Gin, orgeat, lemon. The officer's Daiquiri."),
]
CONCEPTS["studio"]["services"] += [
    ("Exhibitions", "Shows that people line up for.", "from $8k"),
    ("Type design", "A face of your own. Worth it.", "from $10k"),
]
CONCEPTS["shop"]["products"] += [
    ("Field Jacket", 180, "Waxed canvas, brass zips. Ages better than you."),
    ("Pour-Over Set", 68, "Dripper, carafe, filters. Mornings, fixed."),
    ("Leather Tote", 220, "Full-grain, unlined. The last tote."),
    ("Sourdough Kit", 45, "Starter, banneton, lame. Crust guaranteed."),
]
CONCEPTS["tech-product"]["features"] += [
    ("Shared cursors", "See your team think. In real time."),
    ("Smart filters", "Find anything with two words."),
    ("Guest links", "Share without the signup lecture."),
    ("Audit log", "Who did what, when. Boring and essential."),
]
CONCEPTS["hotel"]["rooms"] += [
    ("The Writer's Loft", 175, "Desk, daylight, silence. Finish the chapter."),
    ("The Honeymoon Hut", 350, "Secluded, rose petals optional but encouraged."),
]
CONCEPTS["teahouse"]["teas"] += [
    ("Sobacha Buckwheat", 5, "Nutty, toasty, endlessly refillable."),
    ("Kombucha Flight", 9, "Three house brews. Fizzy and opinionated."),
]
CONCEPTS["outdoors"]["trips"] += [
    ("Volcano Rim Walk", "1 day", 210, "Steam vents, sulfur, staggering views."),
    ("Canyon Overnight", "2 days", 340, "Sleep under the arch. Wake up famous among ravens."),
]
CONCEPTS["school"]["courses"] += [
    ("L–II", "Leather II", "Stitch a wallet. Then a bag. Then stop buying bags.", "MON 19:30", "ROOM D", 10),
    ("J–I", "Jewelry I", "Saw, file, solder. Leave with a ring.", "WED 18:00", "BENCH ROOM", 8),
]
CONCEPTS["diner"]["dishes"] += [
    ("Meatball Sub", 11, "Sunday gravy, provolone, the good roll."),
    ("Egg Cream", 4, "No egg, no cream. Brooklyn magic."),
]

# =====================================================================
# FAMILY KITS — 40 families, each with 2-3 distinct concepts, a layout
# dialect, brand names, and family-flavored headlines.
# Dialects: poster | brutal | editorial | clean | deco | terminal | zine | minimal
# =====================================================================

FAMILIES = {
"acid-rave": dict(dialect="poster", concepts=["night-event", "shop", "magazine"],
    brands=["VOLTAGE", "ACID FERN", "STROBE THEORY", "BASS COMMUNION", "NIGHT BLOOM", "PH LEVEL", "SWEAT EQUITY", "AFTER ACID"],
    headlines=["Sleep is a rumor.", "The floor is lava.", "Louder than the week.", "Two rooms. One strobe budget.",
               "Dance like rent is due.", "Bass you can lean on.", "Strictly all dancing."]),
"brutalist": dict(dialect="brutal", concepts=["studio", "school", "magazine"],
    brands=["CONCRETE CLUB", "RAWFORM", "STUDY IN GRAY", "MONOLITH", "BRUT & CO", "HEAVYSET", "UNFINISHED", "SLAB"],
    headlines=["Built, not decorated.", "Concrete has opinions.", "No rounded corners were harmed.",
               "The grid is the message.", "Honest materials. Loud results.", "Form follows bluntness."]),
"y2k-chrome": dict(dialect="clean", concepts=["tech-product", "shop", "night-event"],
    brands=["CHROMATICA", "MILLENNIA", "GLOSSLAB", "IRIDESCENT", "BUBBLEGUM OS", "FROSTBYTE", "LIQUID STATE", "AERO DREAM"],
    headlines=["The future, polished.", "Glossy on purpose.", "Millennium approved.",
               "Shine is a feature.", "Your2000s called. It wants in.", "Liquid. Chrome. Yours."]),
"swiss": dict(dialect="editorial", concepts=["studio", "school", "magazine"],
    brands=["ATELIER GRID", "HELVETICA HOUSE", "ORDNUNG", "STUDIO RASTER", "KLARHEIT", "FORM + FUNKTION", "BUREAU 12", "SACHLICH"],
    headlines=["Clarity is kindness.", "The grid holds.", "Less, but better aligned.",
               "Typography is the image.", "Order, beautifully kept.", "Nothing to hide."],
    ),
"vaporwave": dict(dialect="poster", concepts=["night-event", "shop", "magazine"],
    brands=["MALLWAVE", "SEAPUNK ARCHIVE", "AESTHETIC SUPPLY", "PALM COURT", "VHS DREAMS", "FOOD COURT FM", "SLOW INTERNET", "AQUA VISTA"],
    headlines=["The mall never closed.", "Nostalgia, air-conditioned.", "Slow down. Render.",
               "Your 1994 called back.", "Escalators to nowhere.", "A e s t h e t i c, delivered."]),
"bauhaus": dict(dialect="brutal", concepts=["school", "studio", "culture"],
    brands=["WERKSTATT 12", "FORMLEHRE", "DESSAU NIGHTS", "TRIANGLE CIRCLE SQUARE", "BAU & HAUS", "MEISTERHAUS", "VORKURS", "NEUE SACHLICHKEIT"],
    headlines=["Learn by making.", "Circle. Square. Triangle. Go.",
               "Art into industry.", "Masters of the morning.", "The preliminary course starts here."]),
"memphis": dict(dialect="brutal", concepts=["shop", "studio", "culture"],
    brands=["SQUIGGLE & CO", "TERRAZZO CLUB", "POSTMODERN SUPPLY", "MILANO 81", "LAMINATE DREAMS", "BACTERIO", "SOTTSASS SOCIETY", "WILD SIDE"],
    headlines=["Taste is a risk.", "More is more.", "Laminate everything.",
               "Serious fun only.", "The 80s called collect.", "Pattern on pattern on purpose."]),
"cyberpunk": dict(dialect="poster", concepts=["night-event", "tech-product", "magazine"],
    brands=["NEON DISTRICT", "CHROME RAIN", "SECTOR ZERO", "GHOST MARKET", "VOLT CITY", "DATA HAVEN", "LOW ORBIT", "JACKPOINT"],
    headlines=["The city never logs off.", "High tech, low sleep.", "Your upgrade is showing.",
               "Rain on neon. Classic.", "The future has a cover charge.", "Encrypted and unbothered."]),
"cottagecore": dict(dialect="editorial", concepts=["shop", "teahouse", "community"],
    brands=["HONEYSUCKLE FARM", "THE POTTING SHED", "MEADOWLARK", "JAM & MENDING", "THISTLE DOWN", "ORCHARD KEEP", "WILDFLOWER CO", "HEARTHSIDE"],
    headlines=["Slow mornings, kept.", "From the garden, with love.", "Mend it. Keep it. Love it.",
               "The kettle's on.", "Preserves and patience.", "A softer way to shop."]),
"art-deco": dict(dialect="deco", concepts=["cocktail-bar", "hotel", "culture"],
    brands=["THE MERIDIAN ROOM", "GILDED AGE", "THE ZIGGURAT", "CHAMPAGNE SOCIAL", "THE OBSIDIAN CLUB", "VELOURS", "THE PLAZA NINE", "GOLD LEAF"],
    headlines=["The ice is cut by hand.", "Glamour, nightly.", "Fourteen seats. No bad ones.",
               "The gold leaf is real.", "Jazz until two.", "Dress sharp. Drink sharper."]),
"film-noir": dict(dialect="deco", concepts=["culture", "cocktail-bar", "bookshop"],
    brands=["THE VENETIAN BLIND", "DOUBLE EXPOSURE", "THE LONG GOODBYE", "SHADOW & SMOKE", "REAR WINDOW REEL", "THE MALTESE", "NIGHT OWLS", "FEDORA FILES"],
    headlines=["Every shadow tells.", "The truth wears a trench coat.", "Midnight, double feature.",
               "She walked in at eleven.", "Trust no narrator.", "Black and white and read all over."]),
"solarpunk": dict(dialect="clean", concepts=["community", "outdoors", "shop"],
    brands=["HELIOTROPE", "THE COMMONS", "SUNSHARE", "VERDANT", "CIRCUIT GARDEN", "SOLSTICE CO-OP", "REWILD", "PHOTOSYNTH"],
    headlines=["The future is a garden.", "Powered by daylight.", "Grow where you're planted.",
               "Repair the world, daily.", "Abundance, shared.", "The grid is green."]),
"frutiger-aero": dict(dialect="clean", concepts=["tech-product", "community", "hotel"],
    brands=["AEROLAB", "CLARITY OS", "LENS & LIGHT", "AQUA INTERFACE", "TRUE NORTH", "GLASSWING", "DAYBREAK", "OPTIMIST SYSTEMS"],
    headlines=["Human. Friendly. Clear.", "Technology, with a smile.", "The optimistic update.",
               "Bubbles and progress.", "Software that says good morning.", "Glossy, but make it kind."]),
"grunge": dict(dialect="zine", concepts=["shop", "night-event", "magazine"],
    brands=["FLOPHOUSE RECORDS", "STATIC BLOOM", "MUDHONEY'S COUSIN", "BASEMENT TAPES", "PLAID FOREVER", "THE FEEDBACK", "GARAGE GOSPEL", "SLUDGE & HONEY"],
    headlines=["Turn it up. Tune it down.", "Flannel weather forever.", "Three chords. No apologies.",
               "The basement tapes live.", "Loud, then louder.", "Nevermind the polish."]),
"minimal-japanese": dict(dialect="minimal", concepts=["teahouse", "shop", "studio"],
    brands=["KUU", "MA STUDIO", "THE QUIET SHELF", "HAZAMA", "MUJI'S COUSIN", "KŌRI", "WABI", "SHIZUKA"],
    headlines=["Less, quieter.", "The space between.", "One bowl. One hour.",
               "Beauty in the plain.", "Sit with it.", "Nothing extra."],
    ),
"baroque": dict(dialect="deco", concepts=["culture", "hotel", "cocktail-bar"],
    brands=["THE GILDED STAGE", "ORO E OMBRA", "PALAZZO NOTTE", "THE COUNTERTENOR", "VELVET & VIOLIN", "OPERA MINORA", "THE CHANDELIER", "SEICENTO"],
    headlines=["Drama, nightly.", "The season opens.", "Gold on gold on gold.",
               "An evening of excess.", "The overture at eight.", "Velvet seats. Velvet voices."]),
"synthwave": dict(dialect="poster", concepts=["night-event", "shop", "tech-product"],
    brands=["MIDNIGHT DRIVE", "CHROME SUNSET", "PALM STATIC", "NEON HIGHWAY", "GRID RUNNER", "LASER RAIN", "OUTRUN ARCHIVE", "TURBO VISTA"],
    headlines=["Drive into the grid.", "Sunset, permanent.", "The night has a soundtrack.",
               "Chrome and palm trees.", "Outrun everything.", "1986, forever."]),
"dieselpunk": dict(dialect="brutal", concepts=["studio", "culture", "community"],
    brands=["IRONWORKS 27", "THE FOUNDRY", "RIVET & RUST", "SMOKESTACK", "GEARWORKS", "THE MACHINE HALL", "TORQUE", "BLACKSMOKE"],
    headlines=["Built like they mean it.", "Rivets, not promises.", "The machine hall opens.",
               "Heavy metal, heavy ideas.", "Forged, not printed.", "Smoke means work."]),
"steampunk": dict(dialect="deco", concepts=["shop", "culture", "community"],
    brands=["THE BRASS MERIDIAN", "CLOCKWORK & CO", "AIRSHIP SUPPLY", "THE GEARSMITH", "COPPER KETTLE", "AETHER & ANCHOR", "THE DIRIGIBLE", "VALVE & VINE"],
    headlines=["Wound daily.", "Steam and circumstance.", "The airship departs at dawn.",
               "Brass never lies.", "An age of invention.", "Gears within gears."]),
"art-nouveau": dict(dialect="deco", concepts=["culture", "shop", "teahouse"],
    brands=["WHIPLASH", "THE IRIS ROOM", "MUCHA'S GHOST", "LALIQUE & LEAF", "THE PEACOCK", "NANCY SCHOOL", "VINE & VASE", "GINKGO"],
    headlines=["Nature, stylized.", "The whiplash line.", "Flowers, forever.",
               "Ornament is not crime.", "The gallery blooms.", "Curves with intent."]),
"pop-art": dict(dialect="brutal", concepts=["shop", "magazine", "culture"],
    brands=["HALFTONE HEROES", "SOUP CAN SOCIAL", "BEN-DAY CLUB", "FIFTEEN MINUTES", "SCREENPRINT CITY", "CAMPBELL'S COUSIN", "DOT MATRIX", "POP GOES"],
    headlines=["Fifteen minutes, extended.", "Art you can afford.", "Dots all the way down.",
               "Famous for being famous.", "The soup can says hi.", "Pop is not a dirty word."]),
"swiss-poster": dict(dialect="editorial", concepts=["culture", "school", "magazine"],
    brands=["PLAKAT ARCHIV", "THE POSTER WALL", "DRUCK & SCHRIFT", "GALERIE RASTER", "AFFICHAGE", "THE GRID ROOM", "TYPE & IMAGE", "PLAKATWERK"],
    headlines=["The wall speaks.", "One hundred years of shouting politely.", "Type as image.",
               "The exhibition is the poster.", "Big type. Bigger ideas.", "Hung straight."],
    ),
"corporate-clean": dict(dialect="clean", concepts=["studio", "tech-product", "hotel"],
    brands=["MERIDIAN ADVISORY", "NORTHBEAM", "CLEARLINE", "THE EFFICIENT CO", "BLUEPRINT PARTNERS", "STEADY STATE", "KEYSTONE", "OPERATOR"],
    headlines=["Results, quarterly.", "The dependable choice.", "Clarity as a service.",
               "We read the footnotes.", "Serious work, delivered.", "Your quarter, optimized."]),
"glassmorphism": dict(dialect="clean", concepts=["tech-product", "studio", "magazine"],
    brands=["PRISM", "FROSTED", "LUCITE LAB", "TRANSLUCENT", "GLASSHOUSE OS", "REFRACT", "SHEEN", "VITRINE"],
    headlines=["See through the noise.", "Light, layered.", "Transparency, literally.",
               "Frosted, not foggy.", "Depth you can feel.", "The interface is the view."]),
"neumorphism": dict(dialect="clean", concepts=["tech-product", "shop", "studio"],
    brands=["SOFTFORM", "EMBOSS", "PILLOWTALK TECH", "DEBOSS & CO", "TACTILE", "CUSHION", "RELIEF", "SOFT MACHINE"],
    headlines=["Press here. Feels nice.", "Soft is the new sharp.", "Tactile in a flat world.",
               "Buttons you can feel.", "Depth without shadows.", "Skeuomorphism grew up."]),
"claymorphism": dict(dialect="clean", concepts=["shop", "tech-product", "community"],
    brands=["DOUGH & CO", "KILN CLUB", "PUFFY", "THE CLAY ROOM", "SQUISH", "MUDLARK", "TERRA FORMA", "PLAYDOUGH PRO"],
    headlines=["Soft. Squishy. Yours.", "Like toys, but for grown-ups.", "Puffy done properly.",
               "Everything is huggable.", "Clay all day.", "Round is a personality."]),
"retro-diner": dict(dialect="poster", concepts=["diner", "shop", "night-event"],
    brands=["THE CHROME PLATE", "STARLITE", "MEL'S COUSIN", "THE BLUE PLATE", "ROUTE 9", "JUKEBOX JOHNNY'S", "THE SILVER SKILLET", "DOT'S"],
    headlines=["Open late. Judged never.", "Coffee's always on.", "The griddle never lies.",
               "Pie until it's gone.", "Breakfast all day.", "Booth 4 is yours."]),
"western": dict(dialect="zine", concepts=["outdoors", "diner", "shop"],
    brands=["DUST & SADDLE", "THE LONGHORN", "RIO BRAVO SUPPLY", "TUMBLEWEED", "HIGH LONESOME", "THE BRONC", "SAGEBRUSH", "LARAMIE & CO"],
    headlines=["Ride out at dawn.", "The west is still west.", "Boots on. Worries off.",
               "Dust in the best way.", "Howdy, partner.", "Wide skies. Wide smiles."]),
"tropical": dict(dialect="poster", concepts=["hotel", "cocktail-bar", "outdoors"],
    brands=["PALM & PINEAPPLE", "THE FRANGIPANI", "COCO LOCO", "TRADEWINDS", "THE HAMMOCK", "MONSOON", "BREEZE BLOCK", "LAGOON 9"],
    headlines=["Check in. Slow down.", "The ocean is the minibar.", "Barefoot since 1987.",
               "Rum o'clock.", "Shade included.", "Salt in the air, sand everywhere."]),
"arctic": dict(dialect="editorial", concepts=["outdoors", "hotel", "community"],
    brands=["NORTH OF NORTH", "THE LONG NIGHT", "POLARIS", "GLACIER & CO", "AURORA FIELD", "SVALBARD SUPPLY", "WHITEOUT", "PERMAFROST"],
    headlines=["Cold, beautifully.", "The aurora keeps a schedule.", "Silence, measured in miles.",
               "Dress for it.", "The north rewards the prepared.", "Blue hour, all day."]),
"desert": dict(dialect="zine", concepts=["hotel", "outdoors", "diner"],
    brands=["THE MIRAGE", "SAGUARO & SONS", "DUST DEVIL", "OASIS 9", "THE SUNBLEACHED", "CACTUS FLOWER", "HIGH DESERT", "ZERO HUMIDITY"],
    headlines=["Heat with a view.", "The desert provides.", "Mirage not included.",
               "Golden hour, extended.", "Water is precious. Sunsets are free.", "Stay for the stars."]),
"ocean": dict(dialect="clean", concepts=["outdoors", "hotel", "shop"],
    brands=["SALT & SWELL", "THE BREAK", "TIDEWATER", "NEPTUNE'S COUSIN", "OFFSHORE", "THE DUNE", "CURRENT", "FOAM & CO"],
    headlines=["Salt cures everything.", "The tide waits for you.", "Wax up.",
               "Ocean adjacent.", "Swim before coffee.", "The break is breaking."]),
"forest": dict(dialect="editorial", concepts=["outdoors", "hotel", "community"],
    brands=["UNDERSTORY", "THE FERN GULLY", "OLD GROWTH", "MOSS & MUSHROOM", "CANOPY", "THE TRAILHEAD", "LOAM", "CEDAR & SMOKE"],
    headlines=["The trees were here first.", "Walk softly.", "Old growth, new friends.",
               "Moss is a lifestyle.", "Breathe deeper out here.", "The forest keeps time."]),
"cosmic": dict(dialect="terminal", concepts=["culture", "outdoors", "magazine"],
    brands=["APOGEE", "THE EVENT HORIZON", "PERIGEE", "DARK SKY SOCIETY", "KEPLER'S DREAM", "THE OBSERVATORY", "SIDEREAL", "LIGHT-YEAR"],
    headlines=["Look up.", "The universe, nightly.", "Dark skies, bright minds.",
               "Jupiter is showing off.", "A million years of light.", "Telescopes ready."]),
"gothic": dict(dialect="deco", concepts=["bookshop", "cocktail-bar", "culture"],
    brands=["THE RAVEN'S PERCH", "BELLADONNA", "CRYPT & QUILL", "THE GABLED HOUSE", "MOURNING CLOAK", "THE ABBEY", "WAX & WICK", "NOCTURNE"],
    headlines=["Beautifully gloomy.", "The candles are lit.", "Darkness, well-read.",
               "Mystery in hardcover.", "The bell tolls at nine.", "Elegant decay."]),
"kawaii": dict(dialect="clean", concepts=["shop", "teahouse", "magazine"],
    brands=["PUFFY PARADE", "STRAWBERRY MILK", "THE BLUSH SHOP", "MOCHI MOCHI", "PASTEL PANIC", "BUBBLE POP", "DOKI DOKI", "SUGAR RUSH"],
    headlines=["Cute overload.", "Pastel everything.", "Small joys, daily.",
               "Happiness, pocket-sized.", "Blush first, ask later.", "Sugar rush approved."]),
"pixel-arcade": dict(dialect="terminal", concepts=["night-event", "shop", "tech-product"],
    brands=["INSERT COIN", "HIGH SCORE", "THE CONTINUE", "PIXEL PALACE", "JOYSTICK JOHNNY'S", "GAME OVER GOODS", "8-BIT BAZAAR", "RESPAWN"],
    headlines=["Insert coin.", "High score or nothing.", "No continues. Just skill.",
               "Press start.", "The arcade never closed.", "8 bits. Infinite fun."]),
"terminal": dict(dialect="terminal", concepts=["tech-product", "magazine", "community"],
    brands=["ROOT ACCESS", "STDOUT", "THE KERNEL", "PIPE DREAM", "GREP & CO", "LOCALHOST", "DAEMON MODE", "SHELL CLUB"],
    headlines=["$ ./run", "It compiles. Ship it.", "Read the manual. Then ignore it.",
               "Uptime is a lifestyle.", "Sudo make me a sandwich.", "Terminally online."],
    ),
"editorial": dict(dialect="editorial", concepts=["magazine", "bookshop", "culture"],
    brands=["THE LONG READ", "FOLIO", "MARGIN NOTES", "THE QUARTERLY", "PROOF & CO", "COLOPHON", "THE READER", "SMALL PRESS"],
    headlines=["Read slower.", "The independent issue.", "Print is not dead. It moved.",
               "Long reads, short weeks.", "The quarterly arrives.", "Words worth paper."]),
"zen": dict(dialect="minimal", concepts=["teahouse", "community", "outdoors"],
    brands=["MU", "THE EMPTY CUP", "STILL WATER", "ZAZEN", "THE RAKE GARDEN", "ONE BREATH", "SEIJAKU", "ENSŌ"],
    headlines=["Sit.", "The garden is enough.", "One breath at a time.",
               "Nothing to add.", "Still water.", "Begin again."]),
}

# =====================================================================
# LAYOUT DIALECTS — 8 structural dialects. One variable-driven framework;
# dialects set the variables, so the same sections compose differently.
# =====================================================================

DIALECTS = {
    "poster":     dict(uc=True,  ls="0.02em", bw="1px", align="left",   hero="giant",
                       frame=False, texture="scan", card="border", pad="4vw", hscale="clamp(3.2rem,11vw,9rem)"),
    "brutal":     dict(uc=True,  ls="0.02em", bw="4px", align="left",   hero="giant",
                       frame=False, texture="none", card="border", pad="4vw", hscale="clamp(2.8rem,9vw,7.5rem)"),
    "editorial":  dict(uc=False, ls="0.01em", bw="1px", align="center", hero="band",
                       frame=False, texture="none", card="fill",   pad="5vw", hscale="clamp(2.4rem,6vw,4.6rem)"),
    "clean":      dict(uc=False, ls="0.00em", bw="1px", align="left",   hero="split",
                       frame=False, texture="none", card="fill",   pad="5vw", hscale="clamp(2.6rem,6vw,5rem)"),
    "deco":       dict(uc=True,  ls="0.16em", bw="1px", align="center", hero="card",
                       frame=True,  texture="none", card="border", pad="5vw", hscale="clamp(2.2rem,6vw,4.2rem)"),
    "terminal":   dict(uc=False, ls="0.00em", bw="1px", align="left",   hero="band",
                       frame=False, texture="scan", card="border", pad="4vw", hscale="clamp(2rem,5vw,3.6rem)"),
    "zine":       dict(uc=True,  ls="0.03em", bw="2px", align="left",   hero="split",
                       frame=False, texture="grid", card="border", pad="4vw", hscale="clamp(2.6rem,8vw,6rem)"),
    "minimal":    dict(uc=False, ls="0.00em", bw="1px", align="left",   hero="band",
                       frame=False, texture="none", card="none",   pad="6vw", hscale="clamp(2.2rem,5vw,4rem)"),
}


def page_css(S):
    d = DIALECTS[S["dialect"]]
    uc = "uppercase" if d["uc"] else "none"
    tex = ""
    if d["texture"] == "scan":
        tex = ("body::after{content:\"\";position:fixed;inset:0;pointer-events:none;z-index:60;"
               "background:repeating-linear-gradient(0deg,transparent 0 3px,"
               "color-mix(in srgb, var(--t-ink) 5%, transparent) 3px 4px)}")
    elif d["texture"] == "grid":
        tex = ("body::before{content:\"\";position:fixed;inset:0;pointer-events:none;z-index:60;opacity:.5;"
               "background-image:linear-gradient(color-mix(in srgb, var(--t-ink) 6%, transparent) 1px, transparent 1px),"
               "linear-gradient(90deg, color-mix(in srgb, var(--t-ink) 6%, transparent) 1px, transparent 1px);"
               "background-size:44px 44px}")
    frame = ""
    if d["frame"]:
        frame = (".t-frame{border:1px solid var(--t-accent);outline:1px solid "
                 "color-mix(in srgb, var(--t-accent) 40%, transparent);outline-offset:6px}")
    return """:root{
  --t-bg:%(bg)s;--t-surface:%(surface)s;--t-ink:%(ink)s;--t-accent:%(accent)s;
  --t-muted:%(muted)s;--t-extra:%(extra)s;
  --t-line:color-mix(in srgb, var(--t-ink) 16%%, transparent);
  --t-rsm:%(rsm)s;--t-rmd:%(rmd)s;--t-rlg:%(rlg)s;--t-rpill:%(rpill)s;
  --t-shadow:%(shadow)s;
  --t-fd:%(display)s;--t-fb:%(body)s;--t-fm:%(mono)s;
  --t-bw:%(bw)s;--t-pad:%(pad)s;--t-hscale:%(hscale)s;
}
*{box-sizing:border-box;margin:0;padding:0}
html{-webkit-text-size-adjust:100%%}
body{background:var(--t-bg);color:var(--t-ink);font-family:var(--t-fb),sans-serif;
  font-size:1.02rem;line-height:1.55;-webkit-font-smoothing:antialiased;overflow-x:hidden}
%(tex)s
.t-wrap{max-width:1200px;margin:0 auto;padding-left:var(--t-pad);padding-right:var(--t-pad)}
.t-top{display:flex;justify-content:space-between;align-items:center;gap:1rem;
  padding:1rem var(--t-pad);border-bottom:var(--t-bw) solid var(--t-line)}
.t-word{font-family:var(--t-fd),sans-serif;font-weight:700;font-size:1.15rem;letter-spacing:%(ls)s;
  text-transform:%(uc)s}
.t-meta{font-family:var(--t-fm),monospace;font-size:.68rem;letter-spacing:.12em;
  text-transform:uppercase;color:var(--t-muted)}
.t-hero{padding:4.5rem var(--t-pad) 3.5rem;text-align:%(align)s}
.t-eyebrow{font-family:var(--t-fm),monospace;font-size:.72rem;letter-spacing:.16em;
  text-transform:uppercase;color:var(--t-accent);margin-bottom:1.2rem}
.t-hero h1{font-family:var(--t-fd),sans-serif;font-size:var(--t-hscale);line-height:.96;
  letter-spacing:%(ls)s;text-transform:%(uc)s;font-weight:700;max-width:12ch;
  %(marg)s}
.t-hero h1 .hl{background:var(--t-accent);color:var(--t-bg);padding:0 .1em;display:inline-block}
.t-hero h1 .ol{color:var(--t-accent)}
.t-sub{margin-top:1.4rem;color:var(--t-muted);max-width:46ch;font-size:1.05rem;%(marg)s}
.t-cta-row{margin-top:2rem;display:flex;gap:.8rem;flex-wrap:wrap;%(just)s}
.t-cta{display:inline-block;font-family:var(--t-fb),sans-serif;font-weight:700;font-size:.95rem;
  letter-spacing:.04em;background:var(--t-accent);color:var(--t-bg);text-decoration:none;
  padding:.95rem 2.1rem;border-radius:var(--t-rmd);box-shadow:var(--t-shadow)}
.t-cta.ghost{background:transparent;color:var(--t-ink);border:var(--t-bw) solid var(--t-muted);box-shadow:none}
.t-hero-split{display:grid;grid-template-columns:1.2fr .8fr;gap:3rem;align-items:end}
.t-hero-card{max-width:780px;margin:0 auto;border:var(--t-bw) solid var(--t-accent);
  background:var(--t-surface);padding:3.5rem 3rem;border-radius:var(--t-rlg);%(frame)s}
.t-sec{padding:3.5rem var(--t-pad);border-top:var(--t-bw) solid var(--t-line)}
.t-sec > .t-wrap{padding-left:0;padding-right:0}
.t-kicker{font-family:var(--t-fm),monospace;font-size:.7rem;letter-spacing:.16em;
  text-transform:uppercase;color:var(--t-muted);margin-bottom:.9rem}
.t-h2{font-family:var(--t-fd),sans-serif;font-size:clamp(1.7rem,4vw,2.7rem);
  letter-spacing:%(ls)s;text-transform:%(uc)s;line-height:1.02;margin-bottom:1.8rem;font-weight:700}
.t-marquee{overflow:hidden;white-space:nowrap;border-top:var(--t-bw) solid var(--t-line);
  border-bottom:var(--t-bw) solid var(--t-line);padding:.75rem 0;background:var(--t-accent);color:var(--t-bg)}
.t-marquee span{display:inline-block;font-family:var(--t-fd),sans-serif;font-weight:700;
  font-size:1rem;letter-spacing:.06em;padding-right:2.5rem;animation:t-scroll 18s linear infinite}
@keyframes t-scroll{to{transform:translateX(-50%%)}}
.t-rows{list-style:none;border-top:var(--t-bw) solid var(--t-line)}
.t-rows li{display:grid;grid-template-columns:8rem 1fr auto;gap:1rem;align-items:baseline;
  padding:1.4rem 0;border-bottom:var(--t-bw) solid var(--t-line)}
.t-time{font-family:var(--t-fm),monospace;font-size:.82rem;color:var(--t-accent)}
.t-name{font-family:var(--t-fd),sans-serif;font-size:clamp(1.5rem,4vw,2.6rem);
  letter-spacing:%(ls)s;text-transform:%(uc)s;line-height:1;font-weight:700}
.t-price{font-family:var(--t-fm),monospace;font-size:.85rem;color:var(--t-accent);white-space:nowrap}
.t-desc{grid-column:2;color:var(--t-muted);font-size:.95rem;max-width:52ch}
.t-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem}
.t-card{background:%(cardbg)s;border:var(--t-bw) solid var(--t-line);border-radius:var(--t-rmd);
  padding:1.8rem;box-shadow:%(cardsh)s}
.t-card .t-tag{display:inline-block;font-family:var(--t-fm),monospace;font-size:.66rem;
  letter-spacing:.12em;text-transform:uppercase;color:var(--t-bg);background:var(--t-ink);
  padding:.28rem .7rem;margin-bottom:1rem;border-radius:var(--t-rsm)}
.t-card h3{font-family:var(--t-fd),sans-serif;font-size:1.3rem;margin-bottom:.6rem;
  letter-spacing:%(ls)s;text-transform:%(uc)s;font-weight:700}
.t-card p{color:var(--t-muted);font-size:.94rem}
.t-card .t-amt{font-family:var(--t-fm),monospace;color:var(--t-accent);font-size:.95rem;
  margin-top:1rem;display:block}
.t-tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem;align-items:stretch}
.t-tier{background:%(cardbg)s;border:var(--t-bw) solid var(--t-line);border-radius:var(--t-rlg);
  padding:2.2rem;display:flex;flex-direction:column;box-shadow:%(cardsh)s}
.t-tier.hot{border-color:var(--t-accent);box-shadow:var(--t-shadow)}
.t-tier h3{font-family:var(--t-fd),sans-serif;font-size:1.4rem;letter-spacing:%(ls)s;
  text-transform:%(uc)s;margin-bottom:.4rem}
.t-tier .t-cost{font-family:var(--t-fd),sans-serif;font-size:2.4rem;margin:.8rem 0;font-weight:700}
.t-tier ul{list-style:none;margin:1rem 0 1.6rem;color:var(--t-muted);font-size:.92rem;line-height:2}
.t-tier .t-cta{align-self:flex-start;margin-top:auto}
.t-statement{font-family:var(--t-fd),sans-serif;font-size:clamp(2rem,6vw,4.4rem);line-height:1.04;
  letter-spacing:%(ls)s;text-transform:%(uc)s;font-weight:700;max-width:16ch}
.t-statement .ol{color:var(--t-accent)}
.t-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;text-align:%(align)s}
.t-stat .t-num{font-family:var(--t-fd),sans-serif;font-size:clamp(2.2rem,5vw,3.6rem);font-weight:700;color:var(--t-accent)}
.t-stat .t-lab{font-family:var(--t-fm),monospace;font-size:.7rem;letter-spacing:.12em;
  text-transform:uppercase;color:var(--t-muted);margin-top:.3rem}
.t-quotes{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem}
.t-quote{background:%(cardbg)s;border:var(--t-bw) solid var(--t-line);
  border-radius:var(--t-rmd);padding:1.8rem;box-shadow:%(cardsh)s}
.t-quote p{font-size:1.05rem;line-height:1.5}
.t-quote cite{display:block;margin-top:1rem;font-family:var(--t-fm),monospace;font-style:normal;
  font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--t-muted)}
.t-band{background:var(--t-accent);color:var(--t-bg);padding:3.5rem var(--t-pad);text-align:%(align)s}
.t-band h2{font-family:var(--t-fd),sans-serif;font-size:clamp(1.8rem,5vw,3.4rem);
  letter-spacing:%(ls)s;text-transform:%(uc)s;line-height:1;font-weight:700;margin-bottom:1rem}
.t-band p{max-width:52ch;%(marg)s;margin-bottom:1.6rem}
.t-band .t-cta{background:var(--t-bg);color:var(--t-accent)}
.t-info{display:grid;grid-template-columns:1fr 1fr;gap:2rem}
.t-info h3{font-family:var(--t-fm),monospace;font-size:.72rem;letter-spacing:.16em;
  text-transform:uppercase;color:var(--t-muted);margin-bottom:.8rem;font-weight:400}
.t-info p{line-height:2}
.t-faq div{border-bottom:var(--t-bw) solid var(--t-line);padding:1.3rem 0}
.t-faq b{font-family:var(--t-fd),sans-serif;font-size:1.1rem;display:block;margin-bottom:.4rem;
  letter-spacing:%(ls)s}
.t-faq p{color:var(--t-muted)}
.t-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1.1rem;counter-reset:st}
.t-step{border-top:var(--t-bw) solid var(--t-accent);padding-top:1.1rem}
.t-step .t-n{font-family:var(--t-fm),monospace;color:var(--t-accent);font-size:.8rem;letter-spacing:.1em}
.t-step h3{font-family:var(--t-fd),sans-serif;font-size:1.2rem;margin:.5rem 0;letter-spacing:%(ls)s;text-transform:%(uc)s}
.t-step p{color:var(--t-muted);font-size:.93rem}
.t-arts{display:grid;grid-template-columns:1fr 1fr;gap:2.5rem}
.t-art h3{font-family:var(--t-fd),sans-serif;font-size:clamp(1.4rem,3vw,2rem);
  letter-spacing:%(ls)s;text-transform:%(uc)s;line-height:1.1;margin:.8rem 0;font-weight:700}
.t-art .t-by{font-family:var(--t-fm),monospace;font-size:.7rem;letter-spacing:.14em;
  text-transform:uppercase;color:var(--t-accent)}
.t-art p{color:var(--t-muted);margin-top:.6rem}
.t-specs{border:var(--t-bw) solid var(--t-line);border-radius:var(--t-rmd);overflow:hidden}
.t-specs div{display:grid;grid-template-columns:1fr 1fr;padding:.9rem 1.4rem;
  border-bottom:1px solid var(--t-line);font-family:var(--t-fm),monospace;font-size:.85rem}
.t-specs div:last-child{border-bottom:0}
.t-specs div span:last-child{text-align:right;color:var(--t-accent)}
.t-notes{background:var(--t-surface);border:var(--t-bw) solid var(--t-line);
  border-radius:var(--t-rmd);padding:2rem;max-width:620px;box-shadow:%(cardsh)s}
.t-notes h3{font-family:var(--t-fm),monospace;font-size:.72rem;letter-spacing:.16em;
  text-transform:uppercase;color:var(--t-muted);margin-bottom:.9rem;font-weight:400}
.t-notes p{color:var(--t-muted)}
.t-notes strong{color:var(--t-ink);font-weight:600}
.t-tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}
.t-tile{border-radius:var(--t-rmd);overflow:hidden;border:var(--t-bw) solid var(--t-line)}
.t-tile .t-art{height:150px}
.t-tile p{padding:.9rem 1.1rem;font-family:var(--t-fm),monospace;font-size:.72rem;
  letter-spacing:.08em;text-transform:uppercase;color:var(--t-muted);background:var(--t-surface)}
.t-div{border:0;border-top:var(--t-bw) solid var(--t-accent);margin:0}
.t-cal{display:grid;grid-template-columns:repeat(7,1fr);gap:6px}
.t-cal span{border:1px solid var(--t-line);border-radius:var(--t-rsm);padding:.7rem .4rem;
  font-family:var(--t-fm),monospace;font-size:.72rem;text-align:center;color:var(--t-muted)}
.t-cal span.on{background:var(--t-accent);color:var(--t-bg);border-color:var(--t-accent);font-weight:700}
.t-cal span.hd{border:0;color:var(--t-ink);font-weight:700}
.t-tokens{padding:3.5rem var(--t-pad);border-top:var(--t-bw) solid var(--t-line)}
.t-swatches{display:flex;flex-wrap:wrap;gap:.8rem;list-style:none;margin-top:1.4rem}
.t-swatches li{border:var(--t-bw) solid var(--t-line);background:var(--t-surface);
  min-width:8.5rem;flex:1;border-radius:var(--t-rsm);overflow:hidden}
.t-chip{display:block;height:2.6rem}
.t-swatches .t-sn{display:block;font-family:var(--t-fm),monospace;font-size:.62rem;
  letter-spacing:.12em;text-transform:uppercase;color:var(--t-muted);padding:.55rem .75rem .1rem}
.t-swatches .t-hx{display:block;font-family:var(--t-fm),monospace;font-size:.74rem;
  padding:0 .75rem .65rem;user-select:all}
.t-foot{padding:2rem var(--t-pad);border-top:var(--t-bw) solid var(--t-line);
  font-family:var(--t-fm),monospace;font-size:.68rem;letter-spacing:.08em;color:var(--t-muted);
  display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.t-foot a{color:var(--t-muted)}
.t-big{font-family:var(--t-fd),sans-serif;font-size:clamp(4rem,14vw,11rem);line-height:.9;
  font-weight:700;color:var(--t-accent);letter-spacing:%(ls)s}
.t-press{font-family:var(--t-fd),sans-serif;font-size:clamp(1.3rem,3vw,2rem);line-height:1.25;
  letter-spacing:%(ls)s;max-width:24ch}
.t-press small{display:block;margin-top:1rem;font-family:var(--t-fm),monospace;font-size:.7rem;
  letter-spacing:.14em;text-transform:uppercase;color:var(--t-muted)}
.t-tl{border-left:var(--t-bw) solid var(--t-accent);padding-left:1.6rem;display:grid;gap:1.8rem}
.t-tl .t-y{font-family:var(--t-fm),monospace;color:var(--t-accent);font-size:.8rem;letter-spacing:.12em}
.t-tl h3{font-family:var(--t-fd),sans-serif;font-size:1.35rem;letter-spacing:%(ls)s;
  text-transform:%(uc)s;margin:.3rem 0 .4rem}
.t-tl p{color:var(--t-muted);max-width:56ch}
.t-ed2{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center}
.t-ed2 .t-fig{height:320px;border-radius:var(--t-rlg);border:var(--t-bw) solid var(--t-line)}
.t-book{display:grid;grid-template-columns:120px 1fr;gap:1.4rem;align-items:start;
  padding:1.4rem 0;border-bottom:var(--t-bw) solid var(--t-line)}
.t-book .t-cov{height:170px;border-radius:var(--t-rsm);border:var(--t-bw) solid var(--t-line)}
.t-book h3{font-family:var(--t-fd),sans-serif;font-size:1.25rem;letter-spacing:%(ls)s}
.t-book .t-au{font-family:var(--t-fm),monospace;font-size:.72rem;letter-spacing:.1em;
  text-transform:uppercase;color:var(--t-accent);margin:.3rem 0 .5rem}
.t-book p{color:var(--t-muted);font-size:.94rem}
.t-book .t-price{margin-top:.5rem}
.t-rev{display:flex;gap:.4rem;color:var(--t-accent);font-size:1.1rem;margin-bottom:.7rem}
.t-logos{display:flex;flex-wrap:wrap;gap:2.5rem;align-items:center;justify-content:%(jlog)s}
.t-logos span{font-family:var(--t-fd),sans-serif;font-weight:700;font-size:1.15rem;
  letter-spacing:%(ls)s;color:var(--t-muted);text-transform:%(uc)s}
.t-bookui{border:var(--t-bw) solid var(--t-line);border-radius:var(--t-rlg);
  background:var(--t-surface);padding:2.4rem;max-width:640px;box-shadow:%(cardsh)s;%(marg)s}
.t-bookui label{display:block;font-family:var(--t-fm),monospace;font-size:.68rem;
  letter-spacing:.14em;text-transform:uppercase;color:var(--t-muted);margin:1.1rem 0 .4rem}
.t-bookui .t-opts{display:flex;gap:.6rem;flex-wrap:wrap}
.t-bookui .t-opt{border:var(--t-bw) solid var(--t-line);border-radius:var(--t-rpill);
  padding:.55rem 1.2rem;font-family:var(--t-fm),monospace;font-size:.8rem;cursor:default}
.t-bookui .t-opt.sel{background:var(--t-ink);color:var(--t-bg);border-color:var(--t-ink)}
.t-member{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem}
.t-mem{border:var(--t-bw) solid var(--t-line);border-radius:var(--t-rlg);padding:2rem;
  background:%(cardbg)s;box-shadow:%(cardsh)s}
.t-mem h3{font-family:var(--t-fd),sans-serif;font-size:1.3rem;letter-spacing:%(ls)s;
  text-transform:%(uc)s;margin-bottom:.5rem}
.t-mem .t-cost{font-family:var(--t-fd),sans-serif;font-size:2rem;font-weight:700;
  color:var(--t-accent);margin:.6rem 0}
.t-mem p{color:var(--t-muted);font-size:.93rem;margin-bottom:1.2rem}
.t-play{display:grid;grid-template-columns:3rem 1fr auto;gap:1rem;align-items:center;
  padding:1rem 0;border-bottom:1px solid var(--t-line);font-family:var(--t-fm),monospace;font-size:.85rem}
.t-play .t-n{color:var(--t-accent)}
@media(max-width:760px){
  .t-rows li{grid-template-columns:1fr;gap:.3rem}
  .t-grid,.t-tiers,.t-quotes,.t-arts,.t-ed2,.t-info{grid-template-columns:1fr}
  .t-stats{grid-template-columns:1fr 1fr}
  .t-steps{grid-template-columns:1fr 1fr}
  .t-tiles{grid-template-columns:1fr 1fr}
  .t-hero-split{grid-template-columns:1fr}
  .t-member{grid-template-columns:1fr}
  .t-cal{grid-template-columns:repeat(7,1fr)}
}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important}
  body::after,body::before{display:none}
}
""" % dict(
        bg=S["bg"], surface=S["surface"], ink=S["ink"], accent=S["accent"],
        muted=S["muted"], extra=S["extra"], rsm=S["rsm"], rmd=S["rmd"],
        rlg=S["rlg"], rpill=S["rpill"],
        shadow="none" if S["shadow"] == "none" else S["shadow"],
        display="'%s',sans-serif" % S["display"], body="'%s',sans-serif" % S["body"],
        mono="'%s',monospace" % S["mono"],
        bw=d["bw"], pad=d["pad"], hscale=d["hscale"], ls=d["ls"], uc=uc,
        align=d["align"], tex=tex, frame=frame,
        marg="margin-left:auto;margin-right:auto" if d["align"] == "center" else "",
        just="justify-content:center" if d["align"] == "center" else "",
        jlog="center" if d["align"] == "center" else "flex-start",
        cardbg="var(--t-surface)" if d["card"] == "fill" else "var(--t-bg)",
        cardsh="var(--t-shadow)" if d["card"] != "none" else "none",
    )

# =====================================================================
# PAGE CONTEXT + SECTION ARCHETYPES (46 archetypes, 2-4 variants each)
# =====================================================================

def build_ctx(rng, fam_slug, fk, concept, dna):
    C = CONCEPTS[concept]
    ctx = {
        "brand": pick(rng, fk["brands"]),
        "concept": concept, "C": C,
        "headline": pick(rng, fk["headlines"]),
        "subline": pick(rng, C["sublines"]),
        "cta": pick(rng, C["ctas"]),
        "cta2": pick(rng, C["ctas"]),
        "date": some_date(rng),
        "date2": some_date(rng),
        "time": some_time(rng),
        "dna": dna,
    }
    if concept == "night-event":
        ctx["venue"] = pick(rng, C["venues"])
        ctx["area"] = pick(rng, C["areas"])
    return ctx


CONCEPT_SECTIONS = {
    "night-event": ["lineup", "tickets", "marquee", "notes", "stats", "band", "gallery", "faq", "press", "event1"],
    "cocktail-bar": ["menu", "gallery", "statement", "visit", "notes", "band", "quotes", "hours"],
    "diner": ["menu", "statement", "visit", "gallery", "hours", "quotes", "band", "notes"],
    "school": ["schedule", "statement", "steps", "band", "faq", "gallery", "stats", "notes"],
    "studio": ["features", "steps", "stats", "quotes", "band", "logos", "manifesto", "ed2col"],
    "shop": ["products", "statement", "gallery", "band", "reviews", "visit", "ed2col", "newsletter"],
    "hotel": ["products", "gallery", "features", "visit", "quotes", "band", "stats", "bookui"],
    "teahouse": ["menu", "statement", "gallery", "visit", "hours", "notes", "ed2col", "band"],
    "tech-product": ["features", "tiers", "specs", "quotes", "band", "logos", "bignum", "faq"],
    "outdoors": ["products", "gallery", "statement", "stats", "visit", "notes", "timeline", "band"],
    "magazine": ["articles", "statement", "quote1", "band", "newsletter", "ed2col", "press", "interview"],
    "community": ["schedule", "statement", "band", "faq", "gallery", "manifesto", "members", "notes"],
    "culture": ["event1", "calendar", "statement", "band", "quotes", "timeline", "visit", "press"],
    "bookshop": ["books", "statement", "interview", "band", "visit", "quotes", "newsletter", "ed2col"],
}

HEROES = {"poster": "hero_giant", "brutal": "hero_giant", "editorial": "hero_band",
          "clean": "hero_split", "deco": "hero_card", "terminal": "hero_band",
          "zine": "hero_split", "minimal": "hero_band"}


def sec_topbar(rng, ctx, S):
    v = rng.randrange(2)
    if v == 0:
        return ('<header class="t-top"><span class="t-word">%s</span>'
                '<span class="t-meta">%s · TZ-taste DNA</span></header>') % (esc(ctx["brand"]), esc(ctx["dna"]["name"]))
    return ('<header class="t-top"><span class="t-word">%s</span>'
            '<span class="t-meta">EST. 2026</span>'
            '<span class="t-meta">%s</span></header>') % (esc(ctx["brand"]), esc(ctx["dna"]["familyName"]))


def sec_hero_giant(rng, ctx, S):
    v = rng.randrange(3)
    h = esc(ctx["headline"])
    if v == 0:
        words = h.split()
        if len(words) > 3:
            i = rng.randrange(1, len(words) - 1)
            h = " ".join(words[:i]) + ' <span class="hl">' + " ".join(words[i:]) + "</span>"
        body = ('<section class="t-hero"><div class="t-wrap"><p class="t-eyebrow">%s · %s</p>'
                "<h1>%s</h1><p class=\"t-sub\">%s</p>"
                '<div class="t-cta-row"><a class="t-cta" href="#">%s</a>'
                '<a class="t-cta ghost" href="#">%s</a></div></div></section>'
                ) % (esc(ctx["date"]), esc(ctx.get("venue", ctx["brand"])), h,
                     esc(ctx["subline"]), esc(ctx["cta"]), esc(ctx["cta2"]))
    elif v == 1:
        body = ('<section class="t-hero"><div class="t-wrap"><p class="t-eyebrow">%s</p>'
                '<h1>%s <span class="ol">%s.</span></h1><p class="t-sub">%s</p>'
                '<div class="t-cta-row"><a class="t-cta" href="#">%s →</a></div></div></section>'
                ) % (esc(ctx["brand"]), h, esc(pick(rng, ["now", "here", "tonight", "daily"])),
                     esc(ctx["subline"]), esc(ctx["cta"]))
    else:
        mq = ('<div class="t-marquee" aria-hidden="true">' +
              ('<span>%s · %s · %s ·&nbsp;</span>' % (esc(ctx["brand"]), esc(ctx["date"]), esc(ctx["headline"]))) * 2 +
              '</div>')
        body = (mq + '<section class="t-hero"><div class="t-wrap"><h1>%s</h1>'
                '<p class="t-sub">%s</p><div class="t-cta-row">'
                '<a class="t-cta" href="#">%s</a></div></div></section>') % (h, esc(ctx["subline"]), esc(ctx["cta"]))
    return body


def sec_hero_split(rng, ctx, S):
    v = rng.randrange(3)
    h = esc(ctx["headline"])
    if v == 0:
        return ('<section class="t-hero"><div class="t-wrap t-hero-split"><div>'
                '<p class="t-eyebrow">%s</p><h1>%s</h1></div>'
                '<div><p class="t-sub">%s</p><div class="t-cta-row">'
                '<a class="t-cta" href="#">%s</a><a class="t-cta ghost" href="#">%s</a>'
                '</div></div></div></section>') % (
                    esc(ctx["date"]), h, esc(ctx["subline"]), esc(ctx["cta"]), esc(ctx["cta2"]))
    if v == 1:
        return ('<section class="t-hero"><div class="t-wrap t-hero-split"><div>'
                '<h1>%s</h1><p class="t-sub">%s</p></div>'
                '<div><p class="t-eyebrow">%s</p><p class="t-sub">%s</p>'
                '<div class="t-cta-row"><a class="t-cta" href="#">%s</a></div></div>'
                '</div></section>') % (
                    h, esc(ctx["subline"]), esc(ctx["brand"]), esc(ctx["date"] + " · " + ctx.get("venue", "Main room")),
                    esc(ctx["cta"]))
    return ('<section class="t-hero"><div class="t-wrap"><p class="t-eyebrow">%s — %s</p>'
            '<div class="t-hero-split"><h1>%s</h1>'
            '<div><p class="t-sub">%s</p><div class="t-cta-row">'
            '<a class="t-cta" href="#">%s</a></div></div></div></div></section>') % (
                esc(ctx["brand"]), esc(ctx["dna"]["familyName"]), h, esc(ctx["subline"]), esc(ctx["cta"]))


def sec_hero_card(rng, ctx, S):
    v = rng.randrange(2)
    inner = ('<p class="t-eyebrow">%s</p><h1>%s</h1><p class="t-sub">%s</p>'
             '<div class="t-cta-row"><a class="t-cta" href="#">%s</a></div>') % (
                 esc(ctx["date"]), esc(ctx["headline"]), esc(ctx["subline"]), esc(ctx["cta"]))
    if v == 0:
        return ('<section class="t-hero"><div class="t-wrap"><div class="t-hero-card t-frame">%s'
                '</div></div></section>') % inner
    return ('<section class="t-hero"><div class="t-wrap"><div class="t-hero-card">%s'
            '</div></div></section>') % inner


def sec_hero_band(rng, ctx, S):
    v = rng.randrange(2)
    if v == 0:
        return ('<section class="t-band"><h2>%s</h2><p>%s</p>'
                '<a class="t-cta" href="#">%s</a></section>') % (
                    esc(ctx["headline"]), esc(ctx["subline"]), esc(ctx["cta"]))
    return ('<section class="t-hero"><div class="t-wrap"><p class="t-eyebrow">%s · %s</p>'
            '<h1>%s</h1><p class="t-sub">%s</p>'
            '<div class="t-cta-row"><a class="t-cta" href="#">%s</a>'
            '<a class="t-cta ghost" href="#">%s</a></div></div></section>') % (
                esc(ctx["brand"]), esc(ctx["date"]), esc(ctx["headline"]),
                esc(ctx["subline"]), esc(ctx["cta"]), esc(ctx["cta2"]))


def sec_marquee(rng, ctx, S):
    items = [ctx["brand"], ctx["date"], ctx["headline"]]
    if ctx["concept"] == "night-event":
        items.append(ctx.get("venue", ""))
    line = " · ".join(esc(i) for i in items if i) + " ·&nbsp;"
    return ('<div class="t-marquee" aria-hidden="true"><span>%s</span><span>%s</span></div>') % (line, line)


def sec_lineup(rng, ctx, S):
    C = ctx["C"]
    acts = pick(rng, C["acts"], rng.randint(4, 6))
    v = rng.randrange(3)
    rows = []
    t = 23
    for a in acts:
        tm = "%02d:%s" % (t % 24, rng.choice(["00", "30"]))
        t += rng.choice([1, 2])
        rows.append((tm, a))
    if v == 0:
        lis = "".join('<li><span class="t-time">%s</span><span class="t-name">%s</span><span></span></li>' % (tm, esc(a)) for tm, a in rows)
        head = '<p class="t-kicker">Lineup · %s</p><h2 class="t-h2">Who plays</h2>' % esc(ctx["date"])
    elif v == 1:
        lis = "".join('<li><span class="t-time">%02d</span><span class="t-name">%s</span><span class="t-price">%s</span></li>' % (
            i + 1, esc(a), tm) for i, (tm, a) in enumerate(rows))
        head = '<p class="t-kicker">Running order</p><h2 class="t-h2">The night, in order</h2>'
    else:
        lis = "".join('<li><span class="t-time">%s</span><span class="t-name">%s</span>'
                      '<span class="t-desc">%s</span></li>' % (
                          tm, esc(a), esc(pick(rng, ["Headline set.", "Late slot.", "Opening.", "Closing set.", "Special guest."])))
                      for tm, a in rows)
        head = '<p class="t-kicker">%s</p><h2 class="t-h2">On stage</h2>' % esc(ctx.get("venue", "Main room"))
    return '<section class="t-sec"><div class="t-wrap">%s<ul class="t-rows">%s</ul></div></section>' % (head, lis)


def sec_schedule(rng, ctx, S):
    C = ctx["C"]
    v = rng.randrange(2)
    if ctx["concept"] == "school":
        items = pick(rng, C["courses"], rng.randint(4, 6))
        rows = "".join(
            '<li><span class="t-time">%s</span><span class="t-name">%s</span>'
            '<span class="t-desc">%s<br><span class="t-time">%s · %s · %d seats</span></span></li>' % (
                code, esc(name), esc(desc), day, room, seats)
            for code, name, desc, day, room, seats in items)
        head = '<p class="t-kicker">All courses run 8 weeks · materials included</p><h2 class="t-h2">The program</h2>'
    else:
        items = pick(rng, C["programs"], rng.randint(4, 6))
        rows = "".join(
            '<li><span class="t-time">%s</span><span class="t-name">%s</span>'
            '<span class="t-desc">%s</span></li>' % (when, esc(name), esc(desc))
            for name, desc, when in items)
        head = '<p class="t-kicker">Weekly at the commons</p><h2 class="t-h2">On the calendar</h2>'
    if v == 1:
        head = '<p class="t-kicker">Mark it down</p><h2 class="t-h2">Coming up</h2>'
    return '<section class="t-sec"><div class="t-wrap">%s<ul class="t-rows">%s</ul></div></section>' % (head, rows)


def sec_menu(rng, ctx, S):
    C = ctx["C"]
    key = "drinks" if "drinks" in C else ("teas" if "teas" in C else "dishes")
    items = pick(rng, C[key], rng.randint(4, 6))
    v = rng.randrange(3)
    if v == 0:
        lis = "".join(
            '<li><span class="t-time">%s</span><span class="t-name">%s</span>'
            '<span class="t-price">$%d</span><span class="t-desc">%s</span></li>' % (
                "%02d" % (i + 1), esc(n), p, esc(d)) for i, (n, p, d) in enumerate(items))
        head = '<p class="t-kicker">The card · engraved, rarely changed</p><h2 class="t-h2">Eat &amp; drink</h2>'
    elif v == 1:
        lis = "".join(
            '<li><span class="t-name">%s</span><span></span><span class="t-price">$%d</span>'
            '<span class="t-desc">%s</span></li>' % (esc(n), p, esc(d)) for n, p, d in items)
        head = '<p class="t-kicker">House favorites</p><h2 class="t-h2">The menu</h2>'
    else:
        half = (len(items) + 1) // 2
        col = lambda xs: "".join(
            '<li><span class="t-name" style="font-size:1.2rem">%s</span><span></span>'
            '<span class="t-price">$%d</span><span class="t-desc">%s</span></li>' % (esc(n), p, esc(d)) for n, p, d in xs)
        return ('<section class="t-sec"><div class="t-wrap">'
                '<p class="t-kicker">Served all day</p><h2 class="t-h2">The menu</h2>'
                '<div style="display:grid;grid-template-columns:1fr 1fr;gap:0 3rem" class="t-menu2">'
                '<ul class="t-rows">%s</ul><ul class="t-rows">%s</ul></div></div></section>') % (
                    col(items[:half]), col(items[half:]))
    return '<section class="t-sec"><div class="t-wrap">%s<ul class="t-rows">%s</ul></div></section>' % (head, lis)


def sec_products(rng, ctx, S):
    C = ctx["C"]
    v = rng.randrange(3)
    if ctx["concept"] == "hotel":
        items = pick(rng, C["rooms"], rng.randint(3, 5))
        cards = "".join(
            '<div class="t-card"><span class="t-tag">Stay</span><h3>%s</h3><p>%s</p>'
            '<span class="t-amt">$%d / night →</span></div>' % (esc(n), esc(d), p)
            for n, p, d in items)
        head = '<p class="t-kicker">Twelve rooms · one pool</p><h2 class="t-h2">Where you sleep</h2>'
    elif ctx["concept"] == "outdoors":
        items = pick(rng, C["trips"], rng.randint(3, 5))
        cards = "".join(
            '<div class="t-card"><span class="t-tag">%s</span><h3>%s</h3><p>%s</p>'
            '<span class="t-amt">$%d →</span></div>' % (esc(dur), esc(n), esc(d), p)
            for n, dur, p, d in items)
        head = '<p class="t-kicker">Guided · groups of eight max</p><h2 class="t-h2">Trips</h2>'
    else:
        items = pick(rng, C["products"], rng.randint(3, 6))
        cards = "".join(
            '<div class="t-card"><span class="t-tag">%s</span><h3>%s</h3><p>%s</p>'
            '<span class="t-amt">$%d →</span></div>' % (
                esc(pick(rng, ["New", "Bestseller", "Back in stock", "Staff pick"])), esc(n), esc(d), p)
            for n, p, d in items)
        head = '<p class="t-kicker">Tested by the staff for a month first</p><h2 class="t-h2">The shelves</h2>'
    if v == 2:
        head = head.replace("t-h2\">", "t-h2\">", 1)
    return '<section class="t-sec"><div class="t-wrap">%s<div class="t-grid">%s</div></div></section>' % (head, cards)


def sec_tiers(rng, ctx, S):
    C = ctx["C"]
    v = rng.randrange(2)
    tiers = "".join(
        '<div class="t-tier%s"><h3>%s</h3><p style="color:var(--t-muted)">%s</p>'
        '<div class="t-cost">%s</div><ul>%s</ul>'
        '<a class="t-cta%s" href="#">%s</a></div>' % (
            " hot" if i == 1 else "", esc(n),
            esc(d), ("$%d" % p) if p else "Free",
            "".join("<li>%s</li>" % esc(f) for f in feats),
            "" if i == 1 else " ghost", "Start free" if p == 0 else "Choose %s" % n)
        for i, (n, p, d, feats) in enumerate(C["tiers"]))
    head = ('<p class="t-kicker">Pricing</p><h2 class="t-h2">Pay for what you use</h2>'
            if v == 0 else '<p class="t-kicker">Simple pricing</p><h2 class="t-h2">Pick your pace</h2>')
    return '<section class="t-sec"><div class="t-wrap">%s<div class="t-tiers">%s</div></div></section>' % (head, tiers)


def sec_quotes(rng, ctx, S):
    C = ctx["C"]
    v = rng.randrange(2)
    pool = C.get("testimonials") or [
        ("I came for an hour and stayed for four. That says everything.", "A regular"),
        ("The details are the whole point here. Nobody else sweats them like this.", "Mara E., neighbor"),
        ("Worth crossing town for. We do it every week now.", "Devon P."),
        ("The staff remembered my name on the second visit. I am a lifer now.", "June O."),
        ("Simple, honest, and better than anywhere else nearby.", "Theo L."),
        ("I bring every out-of-town guest here. It never misses.", "Priya R."),
    ]
    qs = pick(rng, pool, rng.randint(2, 4))
    cards = "".join('<div class="t-quote"><p>“%s”</p><cite>— %s</cite></div>' % (esc(t), esc(w)) for t, w in qs)
    head = ('<p class="t-kicker">Word of mouth</p><h2 class="t-h2">People say</h2>'
            if v == 0 else '<p class="t-kicker">Reviews</p><h2 class="t-h2">Kind words</h2>')
    return '<section class="t-sec"><div class="t-wrap">%s<div class="t-quotes">%s</div></div></section>' % (head, cards)


def sec_statement(rng, ctx, S):
    v = rng.randrange(3)
    stmts = {
        "night-event": "The night belongs to everyone in the room.",
        "cocktail-bar": "Good drinks. Better company. No rush.",
        "diner": "Everybody eats. Everybody's welcome.",
        "school": "Your hands already know. We just remind them.",
        "studio": "We make the thing the thing.",
        "shop": "Buy it once. Keep it forever.",
        "hotel": "Arrive a guest. Leave unhurried.",
        "teahouse": "One bowl. One breath. One hour.",
        "tech-product": "Software should feel instant.",
        "outdoors": "The trail provides.",
        "magazine": "Slow words for fast times.",
        "community": "The commons, kept together.",
        "culture": "Look closer. Stay longer.",
        "bookshop": "The right book finds you.",
    }
    s = stmts.get(ctx["concept"], ctx["headline"])
    if v == 0:
        inner = '<p class="t-statement">%s</p>' % esc(s)
    elif v == 1:
        words = esc(s).split()
        i = max(1, len(words) // 2)
        inner = '<p class="t-statement">%s <span class="ol">%s</span></p>' % (" ".join(words[:i]), " ".join(words[i:]))
    else:
        inner = '<p class="t-big">%s</p><p class="t-kicker" style="margin-top:1rem">%s</p>' % (
            esc(pick(rng, ["01", "EST.", "Nº 4", "★"])), esc(s))
    return '<section class="t-sec"><div class="t-wrap">%s</div></section>' % inner

# =====================================================================
# SECTIONS 16-30 + page assembly
# =====================================================================

ADDRESSES = [
    "214 Mercer Street, Old Town", "9 Foundry Lane, District 5",
    "77 Harbor Road, by the water", "1400 Grand Avenue, Suite B",
    "3 Lantern Court, the alley entrance", "88 Railway Terrace, under the tracks",
    "12 Orchard Row, corner shop", "500 Beacon Hill, lower level",
]

NOTES_FALLBACK = [
    "Cash and card accepted. Tips go to the staff, all of them.",
    "Coat check is $5 and every cent goes to the crew.",
    "Look after each other — that is the whole policy.",
    "Water is free. Always.",
    "Last entry one hour before close.",
    "Ask the staff anything. They know everything.",
    "Lost something? Check with the bar — it turns up.",
    "Be kind. It is the only rule that matters.",
]

HOURS_FALLBACK = [
    "Mon–Thu 11:00 — 22:00", "Fri–Sat 11:00 — 00:00", "Sun 12:00 — 20:00",
    "Kitchen closes one hour before close", "Holidays: call ahead",
]

STATS_FALLBACK = {
    "night-event": [("12", "acts on the bill"), ("2", "rooms"), ("6", "hours of music"), ("500", "capacity")],
    "school": [("14", "courses"), ("8", "weeks each"), ("10", "max per class"), ("100%", "materials included")],
    "hotel": [("12", "rooms"), ("1", "pool"), ("0", "TVs, on purpose"), ("1987", "barefoot since")],
    "outdoors": [("8", "max per group"), ("24", "trips a year"), ("2", "guides per trip"), ("0", "logistics for you")],
}

STEPS_FALLBACK = [
    ("Apply", "Pick a course and claim a bench. Two minutes, no essay."),
    ("Show up", "Evening sessions, tools waiting. Bring nothing but attention."),
    ("Make", "Eight weeks of doing. Mistakes included — encouraged, even."),
    ("Show", "Final-night exhibition. Friends, family, and your finished work."),
]

FAQ = {
    "night-event": [
        ("What time do doors open?", "Eleven. The first act is on at eleven-thirty sharp — the early slot is the loudest."),
        ("Can I get a refund?", "Up to 48 hours before doors. After that, your ticket finds a friend — transfers are free."),
        ("Is there an age limit?", "18+ after midnight, all ages before. Bring ID either way."),
        ("What should I not bring?", "Professional cameras, glass, bad attitudes. Everything else is welcome."),
    ],
    "school": [
        ("Do I need experience?", "No. Every course starts at zero and assumes your hands are smarter than you think."),
        ("Are materials included?", "Yes — the course fee covers all materials. You take home everything you make."),
        ("What if I miss a week?", "One catch-up session per course, scheduled with your instructor. Life happens."),
        ("How big are classes?", "Ten max, usually eight. Small enough that the instructor knows your name by week two."),
    ],
    "tech-product": [
        ("Is there a free plan?", "Yes — Starter is free forever, no card required. Three projects, full features."),
        ("Can I leave with my data?", "Anytime. One-click export in open formats. We would rather earn you than trap you."),
        ("How fast is support?", "Median first reply is three hours. Humans only, seven days a week."),
        ("Do you offer discounts?", "Students, nonprofits, and open-source projects get Pro free. Just ask."),
    ],
    "community": [
        ("Does it cost anything?", "No. Every program is free, funded by neighbors and small grants."),
        ("Do I need to register?", "Just show up. Some programs take names at the door so we know how many chairs."),
        ("Can I volunteer?", "Please. Talk to anyone with a lanyard — or just start helping and someone will find you."),
        ("Are kids welcome?", "Yes. Kids, grandparents, dogs on leash. Everyone is invited means everyone."),
    ],
}

PRESS = [
    ("The rare night out that lives up to the group chat.", "The Night Desk"),
    ("Impossible to leave without a story.", "City Paper"),
    ("Sets the standard, then raises it.", "The Weekly Review"),
    ("We came for an hour. We stayed for four.", "Downtown Voice"),
    ("The details are the whole point here.", "The Critic's Table"),
    ("Already a classic. Somehow also brand new.", "The Modernist"),
    ("Worth crossing town for.", "The Localist"),
    ("The gold standard, hiding in plain sight.", "Field Notes"),
]

NEWS_H = {
    "shop": ("First dibs, monthly.", "New arrivals before they hit the shelves. One email a month, no noise."),
    "magazine": ("The long read, weekly.", "One essay and one interview, every Sunday morning."),
    "bookshop": ("Staff picks, monthly.", "What we are reading and what you should read. Once a month."),
}


def sec_band(rng, ctx, S):
    v = rng.randrange(2)
    C = ctx["C"]
    alt = [h for h in C["headlines"] if h != ctx["headline"]] or [ctx["subline"]]
    inner = ("<h2>%s</h2><p>%s</p>"
             '<a class="t-cta" href="#">%s</a>') % (
                 esc(pick(rng, alt)), esc(ctx["subline"]), esc(ctx["cta"]))
    if v == 0:
        return '<section class="t-band">%s</section>' % inner
    mq = ('<div class="t-marquee" aria-hidden="true"><span>%s · %s ·&nbsp;</span>'
          '<span>%s · %s ·&nbsp;</span></div>') % (
              esc(ctx["brand"]), esc(ctx["cta"]), esc(ctx["brand"]), esc(ctx["cta"]))
    return mq + '<section class="t-band">%s</section>' % inner


def _gallery_items(rng, ctx):
    C = ctx["C"]
    c = ctx["concept"]
    if c == "night-event":
        return [(a, "Live") for a in pick(rng, C["acts"], 8)]
    if c == "cocktail-bar":
        return [(n, "$%d" % p) for n, p, d in pick(rng, C["drinks"], 8)]
    if c == "diner":
        return [(n, "$%d" % p) for n, p, d in pick(rng, C["dishes"], 8)]
    if c == "school":
        return [(n, day) for code, n, d, day, room, s in pick(rng, C["courses"], 8)]
    if c == "shop":
        return [(n, "$%d" % p) for n, p, d in pick(rng, C["products"], 8)]
    if c == "hotel":
        return [(n, "$%d / night" % p) for n, p, d in pick(rng, C["rooms"], 8)]
    if c == "teahouse":
        return [(n, "$%d" % p) for n, p, d in pick(rng, C["teas"], 8)]
    if c == "outdoors":
        return [(n, dur) for n, dur, p, d in pick(rng, C["trips"], 8)]
    if c == "community":
        return [(n, when) for n, d, when in pick(rng, C["programs"], 8)]
    return [(ctx["brand"], ctx["date"])]


def sec_gallery(rng, ctx, S):
    v = rng.randrange(2)
    items = _gallery_items(rng, ctx)[:rng.choice([4, 8])]
    cols = [S["accent"], S["extra"], S["ink"], S["muted"]]
    tiles = "".join(
        '<div class="t-tile"><div class="t-art" style="background:linear-gradient(%ddeg,%s,%s)"></div>'
        "<p>%s · %s</p></div>" % (
            rng.choice([45, 90, 135]), rng.choice(cols), rng.choice(cols),
            esc(l), esc(s))
        for l, s in items)
    head = ('<p class="t-kicker">Gallery</p><h2 class="t-h2">In pictures</h2>'
            if v == 0 else '<p class="t-kicker">A look around</p><h2 class="t-h2">The scene</h2>')
    return '<section class="t-sec"><div class="t-wrap">%s<div class="t-tiles">%s</div></div></section>' % (head, tiles)


def sec_features(rng, ctx, S):
    C = ctx["C"]
    v = rng.randrange(2)
    if "features" in C:
        cards = "".join('<div class="t-card"><h3>%s</h3><p>%s</p></div>' % (esc(n), esc(d))
                        for n, d in pick(rng, C["features"], 6))
        head = ('<p class="t-kicker">Features</p><h2 class="t-h2">Built in</h2>'
                if v == 0 else '<p class="t-kicker">Under the hood</p><h2 class="t-h2">What it does</h2>')
    elif "services" in C:
        cards = "".join('<div class="t-card"><h3>%s</h3><p>%s</p><span class="t-amt">%s</span></div>' % (
            esc(n), esc(d), esc(p)) for n, d, p in pick(rng, C["services"], 6))
        head = ('<p class="t-kicker">Services</p><h2 class="t-h2">What we do</h2>'
                if v == 0 else '<p class="t-kicker">Offerings</p><h2 class="t-h2">Hire us for</h2>')
    else:
        cards = "".join('<div class="t-card"><h3>%s</h3><p>Included with every stay. No asterisks.</p></div>' % esc(a)
                        for a in pick(rng, C["amenities"], 6))
        head = ('<p class="t-kicker">Amenities</p><h2 class="t-h2">Included</h2>'
                if v == 0 else '<p class="t-kicker">On the house</p><h2 class="t-h2">Comes with it</h2>')
    return '<section class="t-sec"><div class="t-wrap">%s<div class="t-grid">%s</div></div></section>' % (head, cards)


def sec_visit(rng, ctx, S):
    v = rng.randrange(2)
    C = ctx["C"]
    addr = pick(rng, ADDRESSES)
    slug = re.sub(r"[^a-z0-9]+", "", ctx["brand"].lower())[:12] or "studio"
    contact = "hello@%s.co · (555) 014-%04d" % (slug, rng.randrange(10000))
    hours = C.get("hours") or pick(rng, HOURS_FALLBACK, 4)
    if v == 0:
        inner = ('<p class="t-kicker">Visit</p><h2 class="t-h2">Come by</h2>'
                 '<div class="t-info"><div><h3>Find us</h3><p>%s<br>%s</p></div>'
                 '<div><h3>Hours</h3><p>%s</p></div></div>') % (
                     esc(addr), esc(contact), "<br>".join(esc(h) for h in hours))
    else:
        inner = ('<p class="t-statement">%s</p>'
                 '<p class="t-kicker" style="margin-top:1.2rem">%s · %s</p>') % (
                     esc(addr), esc(contact), esc(hours[0]))
    return '<section class="t-sec"><div class="t-wrap">%s</div></section>' % inner


def sec_stats(rng, ctx, S):
    C = ctx["C"]
    stats = C.get("stats") or STATS_FALLBACK.get(ctx["concept"]) or [("10", "years in"), ("100", "and counting")]
    cells = "".join('<div class="t-stat"><div class="t-num">%s</div><div class="t-lab">%s</div></div>' % (
        esc(n), esc(l)) for n, l in stats)
    return ('<section class="t-sec"><div class="t-wrap"><p class="t-kicker">Numbers</p>'
            '<h2 class="t-h2">By the numbers</h2><div class="t-stats">%s</div></div></section>') % cells


def sec_faq(rng, ctx, S):
    qa = FAQ.get(ctx["concept"], FAQ["night-event"])
    items = "".join("<div><b>%s</b><p>%s</p></div>" % (esc(q), esc(a))
                    for q, a in pick(rng, qa, min(4, len(qa))))
    return ('<section class="t-sec"><div class="t-wrap"><p class="t-kicker">FAQ</p>'
            '<h2 class="t-h2">Good questions</h2><div class="t-faq">%s</div></div></section>') % items


def sec_notes(rng, ctx, S):
    notes = ctx["C"].get("house_notes", NOTES_FALLBACK)
    items = pick(rng, notes, min(5, len(notes)))
    lis = "".join("<p>— %s</p>" % esc(n) for n in items)
    return ('<section class="t-sec"><div class="t-wrap"><div class="t-notes">'
            '<h3>House notes</h3>%s</div></div></section>') % lis


def sec_hours(rng, ctx, S):
    hours = ctx["C"].get("hours") or pick(rng, HOURS_FALLBACK, 5)
    rows = "".join('<li><span class="t-time">●</span>'
                   '<span class="t-name" style="font-size:1.3rem">%s</span><span></span></li>' % esc(h)
                   for h in hours)
    return ('<section class="t-sec"><div class="t-wrap"><p class="t-kicker">Hours</p>'
            "<h2 class=\"t-h2\">When we are open</h2>"
            '<ul class="t-rows">%s</ul></div></section>') % rows


def sec_tickets(rng, ctx, S):
    C = ctx["C"]
    perks = {
        "Early bird": ["Entry all night", "The cheapest way in"],
        "General": ["Entry all night", "Free water station"],
        "Door": ["Entry all night", "Decide late, pay a little more"],
        "Crew supporter": ["Entry all night", "Name on the thank-you wall", "Our eternal gratitude"],
    }
    tiers = "".join(
        '<div class="t-tier%s"><h3>%s</h3><div class="t-cost">$%d</div><ul>%s</ul>'
        '<a class="t-cta%s" href="#">Get %s</a></div>' % (
            " hot" if i == 1 else "", esc(n), p,
            "".join("<li>%s</li>" % esc(x) for x in perks.get(n, ["Entry all night"])),
            "" if i == 1 else " ghost", esc(n))
        for i, (n, p) in enumerate(C["ticket_tiers"]))
    return ('<section class="t-sec"><div class="t-wrap"><p class="t-kicker">Tickets</p>'
            '<h2 class="t-h2">Get in</h2><div class="t-tiers">%s</div></div></section>') % tiers


def sec_articles(rng, ctx, S):
    arts = pick(rng, ctx["C"]["articles"], 4)
    cells = "".join('<div class="t-art"><span class="t-by">%s</span><h3>%s</h3><p>%s</p></div>' % (
        esc(a), esc(t), esc(d)) for t, d, a in arts)
    return ('<section class="t-sec"><div class="t-wrap"><p class="t-kicker">From the issue</p>'
            '<h2 class="t-h2">Read this</h2><div class="t-arts">%s</div></div></section>') % cells


def sec_books(rng, ctx, S):
    books = pick(rng, ctx["C"]["books"], 4)
    rows = "".join(
        '<div class="t-book"><div class="t-cov" style="background:linear-gradient(135deg,%s,%s)"></div>'
        '<div><h3>%s</h3><p class="t-au">%s</p><p>%s</p><span class="t-price">$%d</span></div></div>' % (
            S["accent"], S["extra"], esc(t), esc(a), esc(d), p)
        for t, a, p, d in books)
    return ('<section class="t-sec"><div class="t-wrap"><p class="t-kicker">On the shelves</p>'
            '<h2 class="t-h2">Staff picks</h2>%s</div></section>') % rows


def sec_event1(rng, ctx, S):
    C = ctx["C"]
    if ctx["concept"] == "culture":
        shows = pick(rng, C["shows"], 5)
        lis = "".join('<li><span class="t-time">%s</span><span class="t-name">%s</span>'
                      '<span class="t-desc">%s</span></li>' % (esc(dates), esc(n), esc(d))
                      for n, d, dates in shows)
        head = "<p class=\"t-kicker\">On now</p><h2 class=\"t-h2\">What is on</h2>"
    else:
        acts = pick(rng, C["acts"], 5)
        lis = "".join('<li><span class="t-time">%s</span><span class="t-name">%s</span>'
                      '<span class="t-price">%s</span></li>' % (
                          some_date(rng), esc(a), esc(pick(rng, ["Tickets", "Free", "RSVP"])))
                      for a in acts)
        head = '<p class="t-kicker">Upcoming</p><h2 class="t-h2">Dates</h2>'
    return '<section class="t-sec"><div class="t-wrap">%s<ul class="t-rows">%s</ul></div></section>' % (head, lis)


def sec_newsletter(rng, ctx, S):
    h, sub = NEWS_H.get(ctx["concept"], ("The Sunday edition.", "One email a week. The good stuff, no noise."))
    return ('<section class="t-band"><h2>%s</h2><p>%s</p>'
            '<a class="t-cta" href="#">Subscribe</a></section>') % (esc(h), esc(sub))


def sec_steps(rng, ctx, S):
    steps = ctx["C"].get("steps", STEPS_FALLBACK)[:4]
    cells = "".join('<div class="t-step"><span class="t-n">0%d</span><h3>%s</h3><p>%s</p></div>' % (
        i + 1, esc(n), esc(d)) for i, (n, d) in enumerate(steps))
    return ('<section class="t-sec"><div class="t-wrap"><p class="t-kicker">Process</p>'
            '<h2 class="t-h2">How it works</h2><div class="t-steps">%s</div></div></section>') % cells


def sec_press(rng, ctx, S):
    v = rng.randrange(2)
    q, outlet = pick(rng, PRESS)
    if v == 0:
        inner = '<p class="t-press">\u201c%s\u201d<small>\u2014 %s</small></p>' % (esc(q), esc(outlet))
    else:
        q2, o2 = pick(rng, PRESS)
        inner = ('<div class="t-quotes"><div class="t-quote"><p>\u201c%s\u201d</p><cite>\u2014 %s</cite></div>'
                 '<div class="t-quote"><p>\u201c%s\u201d</p><cite>\u2014 %s</cite></div></div>') % (
                     esc(q), esc(outlet), esc(q2), esc(o2))
    return '<section class="t-sec"><div class="t-wrap"><p class="t-kicker">Press</p>%s</div></section>' % inner


def sec_tokens(rng, ctx, S):
    pal = ctx["dna"]["palette"]
    names = ["Background", "Surface", "Ink", "Accent", "Muted", "Extra"]
    lis = "".join(
        '<li><span class="t-chip" style="background:%s"></span>'
        '<span class="t-sn">%s</span><span class="t-hx">%s</span></li>' % (c, n, c)
        for c, n in zip(pal, names))
    return ('<section class="t-tokens"><div class="t-wrap">'
            '<p class="t-kicker">Style tokens · click a hex to copy</p>'
            '<h2 class="t-h2">Palette</h2><ul class="t-swatches">%s</ul>'
            '</div></section>') % lis


def sec_footer(rng, ctx, S):
    return ('<footer class="t-foot"><span>%s · TZ-taste DNA</span>'
            '<span><a href="#" id="t-copy">Copy tokens</a> · '
            '<a href="../index.html">All pages</a> · MIT</span></footer>') % esc(ctx["brand"])


SECTIONS = {
    "topbar": sec_topbar, "hero_giant": sec_hero_giant, "hero_split": sec_hero_split,
    "hero_card": sec_hero_card, "hero_band": sec_hero_band, "marquee": sec_marquee,
    "lineup": sec_lineup, "schedule": sec_schedule, "menu": sec_menu,
    "products": sec_products, "tiers": sec_tiers, "quotes": sec_quotes,
    "statement": sec_statement, "band": sec_band, "gallery": sec_gallery,
    "features": sec_features, "visit": sec_visit, "stats": sec_stats,
    "faq": sec_faq, "notes": sec_notes, "hours": sec_hours,
    "tickets": sec_tickets, "articles": sec_articles, "books": sec_books,
    "event1": sec_event1, "newsletter": sec_newsletter, "steps": sec_steps,
    "press": sec_press,
}


def build_S(dna, dialect):
    pal = dna["palette"]
    S = {"bg": pal[0], "surface": pal[1], "ink": pal[2], "accent": pal[3],
         "muted": pal[4], "extra": pal[5],
         "rsm": dna["radius"]["sm"], "rmd": dna["radius"]["md"],
         "rlg": dna["radius"]["lg"], "rpill": dna["radius"]["pill"],
         "display": dna["fonts"]["display"], "body": dna["fonts"]["body"],
         "mono": dna["fonts"]["mono"], "dialect": dialect,
         "shadow": dna["shadow"]}
    if contrast(S["bg"], S["ink"]) < 4.0:
        S["ink"] = "#141414" if lum(S["bg"]) > 0.3 else "#f2f2f2"
    return S


COPY_JS = """<script>
(function(){
var hx=document.querySelectorAll('.t-hx');
hx.forEach(function(el){el.style.cursor='pointer';el.title='Click to copy';
el.addEventListener('click',function(){if(navigator.clipboard){navigator.clipboard.writeText(el.textContent.trim());}});});
var b=document.getElementById('t-copy');
if(b){b.addEventListener('click',function(ev){ev.preventDefault();
var j=document.getElementById('t-json');
if(j&&navigator.clipboard){navigator.clipboard.writeText(j.textContent);b.textContent='Copied';}});}
})();
</script>"""


def compose(slug):
    dna = json.load(open(os.path.join(DATA, slug + ".json")))
    rng = rng_for(slug)
    fk = FAMILIES[dna["family"]]
    concept = pick(rng, fk["concepts"])
    ctx = build_ctx(rng, dna["family"], fk, concept, dna)
    dialect = fk["dialect"]
    S = build_S(dna, dialect)
    hero = HEROES[dialect]
    avail = [s for s in CONCEPT_SECTIONS[concept] if s in SECTIONS]
    chosen = rng.sample(avail, min(rng.randint(4, 7), len(avail)))
    parts = [SECTIONS["topbar"](rng, ctx, S), SECTIONS[hero](rng, ctx, S)]
    for name in chosen:
        parts.append(SECTIONS[name](rng, ctx, S))
    parts.append(sec_tokens(rng, ctx, S))
    parts.append(sec_footer(rng, ctx, S))
    body = "\n".join(parts)
    title = "%s — %s · TZ-taste" % (ctx["brand"], dna["name"])
    tokens_json = json.dumps(dna["tokens"]).replace("</", "<\\/")
    out = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n"
           "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n"
           "<title>%s</title>\n"
           '<link rel="preconnect" href="https://fonts.googleapis.com">\n'
           '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
           '<link href="%s" rel="stylesheet">\n'
           "<style>\n%s\n</style>\n</head>\n<body>\n%s\n"
           '<script type="application/json" id="t-json">%s</script>\n'
           "%s\n</body>\n</html>\n") % (
               esc(title), gf_href([S["display"], S["body"], S["mono"]]),
               page_css(S), body, tokens_json, COPY_JS)
    low = out.lower()
    for b in BANNED:
        if b in low:
            raise ValueError("banned phrase %r in %s" % (b, slug))
    return out


def select_300():
    idx = json.load(open(os.path.join(ROOT, "data", "index.json")))
    by_fam = {}
    for e in idx:
        by_fam.setdefault(e["family"], []).append(e)
    slugs = []
    fams = sorted(by_fam)
    for f in fams:
        items = by_fam[f]
        slugs += [items[i]["slug"] for i in range(0, len(items), 18)][:7]
    for f in fams[:20]:
        s = by_fam[f][9]["slug"]
        if s not in slugs:
            slugs.append(s)
    return slugs


def main():
    only = None
    limit = None
    for a in sys.argv[1:]:
        if a.startswith("--only="):
            only = a[len("--only="):].split(",")
        elif a.startswith("--limit="):
            limit = int(a[len("--limit="):])
    os.makedirs(OUT, exist_ok=True)
    slugs = only if only else select_300()
    if limit:
        slugs = slugs[:limit]
    ok = 0
    for i, slug in enumerate(slugs):
        try:
            out = compose(slug)
        except Exception as e:
            print("FAIL %s: %s" % (slug, e), flush=True)
            continue
        with open(os.path.join(OUT, slug + ".html"), "w") as f:
            f.write(out)
        ok += 1
        if (i + 1) % 50 == 0:
            print("... %d/%d" % (i + 1, len(slugs)), flush=True)
    print("wrote %d pages" % ok, flush=True)
    idx = {e["slug"]: e for e in json.load(open(os.path.join(ROOT, "data", "index.json")))}
    man = [{"slug": s, "name": idx[s]["name"], "familyName": idx[s]["familyName"]}
           for s in slugs if s in idx]
    with open(os.path.join(ROOT, "data", "fresh-pages.json"), "w") as f:
        json.dump(man, f, indent=1)
    print("manifest: %d entries" % len(man), flush=True)


if __name__ == "__main__":
    main()
