<!--tz-meta {"id":"service-marketplace","title":"Service marketplace page","file":"prompts/service-marketplace.md","description":"Marketplace for booking services: search, provider cards, reviews, booking flow."} -->
# Prompt: Service marketplace page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a service marketplace page for [MARKETPLACE NAME] ([service category:
e.g. "home cleaning", "dog walking", "freelance video editors"]).

- **The transaction:** [one sentence — what the customer books and pays for]
- **Audience:** [who books — e.g. "busy parents booking recurring cleans"]
- **Feeling:** [3 adjectives — e.g. "trustworthy, fast, human"]
- **Provider data:** [what's shown per provider — rating, jobs done, price, badges]
- **Sections:** search hero (service + location + date) → trust strip (how
  providers are vetted — real process) → provider results (photo, rating,
  jobs completed, price, next availability, badges) → provider profile
  (reviews with dates, services, policies) → booking flow (slot → details →
  confirm) → how vetting works → guarantee/cancellation policy → footer
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum;
  renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.

Do NOT build: provider cards with stock-photo headshots and no real data;
ratings without review counts ("5.0" from 2 reviews is not 5.0); hidden fees
revealed at checkout; three equal "how it works" cards; a purple/blue
gradient; Inter as the body font. Trust is the product — vetting, real
reviews with dates, and all-in pricing are mandatory, not nice-to-haves.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
