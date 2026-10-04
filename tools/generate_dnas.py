#!/usr/bin/env python3
"""Deterministically generate 5,000 style DNAs.

Writes:
  data/dnas/<slug>.json   one small file per DNA (tokens, fonts, palette, meta)
  data/index.json          compact array for the browse grid

Deterministic: DNA #i uses random.Random(SEED + i), so regeneration is stable
and adding more DNAs never changes existing ones.
"""
import colorsys
import json
import os
import random
import sys

SEED = 20261004
COUNT = 5000
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(REPO, "data")
DNAS = os.path.join(DATA, "dnas")

ONE_LINER = "Use https://github.com/rawmware/TZ-taste as a reference to build: [brief]"

# ---------------------------------------------------------------- fonts ----

DISPLAY_FONTS = [
    "Anton", "Archivo Black", "Bebas Neue", "Bungee", "Unbounded", "Syne",
    "Righteous", "Monoton", "Press Start 2P", "Orbitron", "Audiowide",
    "Shrikhand", "Pacifico", "Caveat", "Permanent Marker", "Rubik Mono One",
    "Major Mono Display", "Zen Dots", "Titan One", "Luckiest Guy",
    "Alfa Slab One", "Abril Fatface", "DM Serif Display", "Playfair Display",
    "Cinzel", "Cormorant Garamond", "Italiana", "Marcellus", "Fraunces",
    "Instrument Serif", "Bodoni Moda", "Libre Caslon Text", "Newsreader",
    "Chakra Petch", "Michroma", "Khand", "Teko", "Oswald", "Barlow Condensed",
    "Six Caps", "Megrim", "Wallpoet", "Frijole", "Creepster", "Eater",
    "Rubik Glitch", "Silkscreen", "VT323", "DotGothic16", "Handjet",
    "Pixelify Sans", "Nabla", "Tilt Prism", "Bricolage Grotesque",
    "Space Grotesk", "Sora", "Outfit", "Josefin Sans", "Gruppo",
    "Dancing Script", "Lobster", "Rock Salt", "Gochi Hand",
    "Gloria Hallelujah", "Special Elite", "Lobster Two",
]
BODY_FONTS = [
    "Inter", "Space Grotesk", "IBM Plex Sans", "Source Sans 3", "Work Sans",
    "DM Sans", "Manrope", "Outfit", "Rubik", "Nunito", "Karla", "Open Sans",
    "Roboto", "Poppins", "Montserrat", "Mulish", "Jost", "Quicksand",
    "Lexend", "Public Sans", "Atkinson Hyperlegible", "Sora", "Archivo",
    "Barlow", "Cabin", "Heebo", "Fira Sans", "Noto Sans", "Source Serif 4",
    "Lora", "Merriweather", "PT Serif", "Courier Prime",
]
MONO_FONTS = ["Space Mono", "IBM Plex Mono", "JetBrains Mono", "Courier Prime", "VT323"]

# --------------------------------------------------------------- helpers ---

def _hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) / 255.0 for i in (0, 2, 4))


def _rgb_to_hex(r, g, b):
    return "#%02x%02x%02x" % (
        max(0, min(255, int(round(r * 255)))),
        max(0, min(255, int(round(g * 255)))),
        max(0, min(255, int(round(b * 255)))),
    )


def jitter(hexcolor, rng, dh=0.03, ds=0.08, dl=0.06):
    r, g, b = _hex_to_rgb(hexcolor)
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    h = (h + rng.uniform(-dh, dh)) % 1.0
    s = max(0.0, min(1.0, s + rng.uniform(-ds, ds)))
    l = max(0.02, min(0.97, l + rng.uniform(-dl, dl)))
    r2, g2, b2 = colorsys.hls_to_rgb(h, l, s)
    return _rgb_to_hex(r2, g2, b2)


def gf(name):
    return name.replace(" ", "+")


SHARP = {"sm": "0px", "md": "0px", "lg": "0px", "pill": "0px"}
SOFT = {"sm": "6px", "md": "12px", "lg": "20px", "pill": "999px"}
ROUND = {"sm": "12px", "md": "20px", "lg": "32px", "pill": "999px"}
PILL = {"sm": "999px", "md": "999px", "lg": "999px", "pill": "999px"}
MIXED = {"sm": "4px", "md": "10px", "lg": "24px", "pill": "999px"}

NONE = "none"
SOFT_SH = "0 2px 12px rgba(0,0,0,.08)"
DEEP_SH = "0 12px 40px rgba(0,0,0,.16)"
HARD4 = "4px 4px 0 #000000"
HARD6 = "6px 6px 0 {accent}"
GLOW = "0 0 28px {accent}99"
NEU = "9px 9px 18px rgba(163,177,198,.55), -9px -9px 18px rgba(255,255,255,.9)"
GLASS = "0 8px 32px rgba(31,38,135,.18)"

# ---------------------------------------------------------------- families --
# palettes are ordered [bg, surface, ink, accent, muted, extra]; 2 anchors each
FAMILIES = [
 dict(slug="acid-rave", name="Acid Rave",
      display=["Anton","Bebas Neue","Archivo Black","Rubik Mono One","Six Caps"],
      body=["Space Grotesk","Archivo","Inter"],
      palettes=[["#0a0a0a","#161616","#f4f4f4","#c8ff00","#6b6b6b","#ff2fb3"],
                ["#080808","#101010","#f2f2f2","#00ff9d","#5f5f5f","#ff5c00"]],
      radii=[SHARP], shadows=[NONE, HARD4, GLOW], unit=8, scale=[0.5,1,2,4,8],
      tags=["loud","rave","flyer","streetwear"]),
 dict(slug="brutalist", name="Brutalist",
      display=["Archivo Black","Anton","Space Grotesk","Oswald","IBM Plex Sans"],
      body=["Inter","Archivo","Space Grotesk"],
      palettes=[["#f5f2ea","#ffffff","#111111","#ff3b00","#8a8a8a","#1e40ff"],
                ["#efeae0","#ffffff","#141414","#ffd400","#948d80","#00c853"]],
      radii=[SHARP], shadows=[HARD4, NONE, HARD6], unit=8, scale=[0.5,1,2,3,6],
      tags=["raw","concrete","bold","anti-design"]),
 dict(slug="y2k-chrome", name="Y2K Chrome",
      display=["Orbitron","Audiowide","Michroma","Unbounded","Zen Dots"],
      body=["Outfit","Space Grotesk","Quicksand"],
      palettes=[["#e8f4ff","#ffffff","#1a1a2e","#00c2ff","#9db4c8","#ff7ad9"],
                ["#f0eaff","#ffffff","#23233f","#7c5cff","#a8a3c9","#00e5c0"]],
      radii=[PILL, ROUND], shadows=[GLASS, SOFT_SH], unit=8, scale=[0.5,1,2,3,5],
      tags=["nostalgia","glossy","millennium","pop"]),
 dict(slug="swiss", name="Swiss",
      display=["Archivo","Inter","Space Grotesk","Barlow Condensed","Oswald"],
      body=["Inter","Archivo","IBM Plex Sans"],
      palettes=[["#ffffff","#f4f4f4","#111111","#e30613","#767676","#111111"],
                ["#fafafa","#f0f0f0","#0f0f0f","#0057ff","#7d7d7d","#0f0f0f"]],
      radii=[SHARP], shadows=[NONE], unit=8, scale=[0.5,1,2,4,8],
      tags=["grid","helvetica","minimal","editorial"]),
 dict(slug="vaporwave", name="Vaporwave",
      display=["Monoton","Audiowide","Orbitron","Pacifico","Shrikhand"],
      body=["Space Grotesk","Outfit","Quicksand"],
      palettes=[["#1a0533","#2b0a4d","#ffe9f6","#ff71ce","#8f7bb5","#01cdfe"],
                ["#12041f","#241040","#fdf0ff","#b967ff","#7d6ba8","#fffb96"]],
      radii=[SOFT, ROUND], shadows=[GLOW, SOFT_SH], unit=8, scale=[0.5,1,2,4,6],
      tags=["retro","neon","aesthetic","80s"]),
 dict(slug="bauhaus", name="Bauhaus",
      display=["Archivo Black","Josefin Sans","Space Grotesk","Jost","Oswald"],
      body=["Jost","Josefin Sans","Archivo"],
      palettes=[["#f2ede4","#ffffff","#191919","#d22b2b","#9a938a","#1f4fa8"],
                ["#efe9dc","#fdfbf6","#1c1c1c","#e8a100","#a39a89","#0f6b4f"]],
      radii=[{"sm":"0px","md":"0px","lg":"999px","pill":"999px"}, SHARP],
      shadows=[HARD4, NONE], unit=8, scale=[0.5,1,2,3,6],
      tags=["geometric","primary","modernist","poster"]),
 dict(slug="memphis", name="Memphis",
      display=["Shrikhand","Bungee","Titan One","Luckiest Guy","Bricolage Grotesque"],
      body=["Quicksand","Nunito","Outfit"],
      palettes=[["#fff6e9","#ffffff","#222222","#ff5da2","#b9a88f","#25c7d9"],
                ["#fdf3ff","#ffffff","#262626","#7c5cff","#b3a6c9","#ffd23f"]],
      radii=[ROUND, MIXED], shadows=[HARD6, SOFT_SH], unit=8, scale=[0.5,1,2,4,6],
      tags=["playful","80s","shapes","colorful"]),
 dict(slug="cyberpunk", name="Cyberpunk",
      display=["Orbitron","Chakra Petch","Michroma","Rubik Glitch","Major Mono Display"],
      body=["Chakra Petch","Space Grotesk","IBM Plex Mono"],
      palettes=[["#0d0d12","#17171f","#e8e8f0","#fcee0a","#5a5a6e","#00f0ff"],
                ["#0b0b10","#15151d","#f0f0f5","#ff003c","#62627a","#00ff9d"]],
      radii=[SHARP, SOFT], shadows=[GLOW, NONE], unit=8, scale=[0.5,1,2,3,6],
      tags=["neon","dystopia","tech","night-city"]),
 dict(slug="cottagecore", name="Cottagecore",
      display=["Cormorant Garamond","Libre Caslon Text","Italiana","Caveat","Lora"],
      body=["Source Serif 4","Lora","Karla"],
      palettes=[["#faf6ec","#ffffff","#3d3225","#7a9e43","#b3a68c","#d98e8e"],
                ["#f6f1e2","#fffdf6","#43382a","#b76e79","#b8a98d","#7a9e43"]],
      radii=[SOFT, ROUND], shadows=[SOFT_SH, NONE], unit=8, scale=[0.5,1,1.5,3,5],
      tags=["cozy","pastoral","soft","vintage"]),
 dict(slug="art-deco", name="Art Deco",
      display=["Cinzel","Marcellus","Italiana","Bodoni Moda","Playfair Display"],
      body=["Jost","Montserrat","Cormorant Garamond"],
      palettes=[["#101014","#1a1a20","#f5ead6","#d4af37","#8d8574","#0e5a5a"],
                ["#f4ecd8","#fffaf0","#1c1a16","#b08d2e","#a29880","#123f3c"]],
      radii=[SHARP, SOFT], shadows=[DEEP_SH, NONE], unit=8, scale=[0.5,1,2,4,8],
      tags=["glamour","1920s","geometric","luxury"]),
 dict(slug="film-noir", name="Film Noir",
      display=["Bebas Neue","Oswald","Special Elite","DM Serif Display","Six Caps"],
      body=["Special Elite","IBM Plex Mono","Source Serif 4"],
      palettes=[["#0b0b0c","#141416","#e8e6e1","#c9a227","#6e6e6e","#8c1d1d"],
                ["#101012","#1a1a1e","#dedbd2","#8c8c8c","#5c5c5c","#3d3d3d"]],
      radii=[SHARP], shadows=[DEEP_SH, NONE], unit=8, scale=[0.5,1,2,4,7],
      tags=["moody","cinematic","monochrome","detective"]),
 dict(slug="solarpunk", name="Solarpunk",
      display=["Fraunces","Sora","Outfit","Bricolage Grotesque","DM Serif Display"],
      body=["Outfit","Work Sans","Source Sans 3"],
      palettes=[["#f4f9ef","#ffffff","#22331f","#58b368","#9db89a","#ffd23f"],
                ["#eef7e6","#fbfff8","#1e2f1c","#2d9d78","#93b393","#ff9f1c"]],
      radii=[ROUND, SOFT], shadows=[SOFT_SH], unit=8, scale=[0.5,1,2,3,6],
      tags=["eco","optimistic","green","future"]),
 dict(slug="frutiger-aero", name="Frutiger Aero",
      display=["Outfit","Quicksand","Nunito","Sora","Gruppo"],
      body=["Nunito","Quicksand","Outfit"],
      palettes=[["#dff3ff","#ffffff","#0f2a3d","#35b6ff","#8fb6cc","#7dff9b"],
                ["#e3f7e9","#ffffff","#123524","#2ec4b6","#93bfa8","#ffd166"]],
      radii=[ROUND, PILL], shadows=[GLASS, SOFT_SH], unit=8, scale=[0.5,1,2,3,5],
      tags=["glossy","nature-tech","2000s","clean"]),
 dict(slug="grunge", name="Grunge",
      display=["Permanent Marker","Rock Salt","Special Elite","Rubik Glitch","Eater"],
      body=["Special Elite","Courier Prime","Karla"],
      palettes=[["#141210","#1e1a16","#d8d2c4","#b33a2b","#6f675c","#3d5a45"],
                ["#191512","#221d18","#cfc8b8","#4a5d23","#6b6257","#8c2f39"]],
      radii=[SHARP], shadows=[NONE, DEEP_SH], unit=8, scale=[0.5,1,2,3,5],
      tags=["distressed","90s","raw","underground"]),
 dict(slug="minimal-japanese", name="Minimal Japanese",
      display=["Space Grotesk","Josefin Sans","Outfit","Inter","Zen Dots"],
      body=["Inter","Noto Sans","Karla"],
      palettes=[["#faf9f6","#ffffff","#2b2b2b","#c73e3a","#a9a49a","#2b2b2b"],
                ["#f5f4f0","#ffffff","#33302b","#1a5c8a","#a8a294","#c73e3a"]],
      radii=[SHARP, SOFT], shadows=[NONE, SOFT_SH], unit=8, scale=[0.5,1,2,4,8],
      tags=["wabi-sabi","ma","quiet","zen"]),
 dict(slug="baroque", name="Baroque",
      display=["Playfair Display","Cinzel","Cormorant Garamond","Bodoni Moda","Italiana"],
      body=["Cormorant Garamond","Libre Caslon Text","Source Serif 4"],
      palettes=[["#171208","#241c0e","#f0e3c8","#c9a227","#8a7a5c","#6e1423"],
                ["#1d0f14","#2b1620","#eeddc0","#b76e79","#8f7f68","#c9a227"]],
      radii=[ROUND, SOFT], shadows=[DEEP_SH], unit=8, scale=[0.5,1,2,4,8],
      tags=["ornate","classical","dramatic","gold"]),
 dict(slug="synthwave", name="Synthwave",
      display=["Monoton","Orbitron","Audiowide","Press Start 2P","Zen Dots"],
      body=["Orbitron","Space Grotesk","Outfit"],
      palettes=[["#0f0b24","#1b1440","#ffe6f7","#ff2a6d","#6f5fa3","#05d9e8"],
                ["#120826","#1e1245","#f5e6ff","#b967ff","#7565a8","#f9f871"]],
      radii=[SOFT], shadows=[GLOW, DEEP_SH], unit=8, scale=[0.5,1,2,4,6],
      tags=["retrowave","grid","sunset","80s"]),
 dict(slug="dieselpunk", name="Dieselpunk",
      display=["Alfa Slab One","Bebas Neue","Special Elite","Oswald","Six Caps"],
      body=["Special Elite","IBM Plex Sans","Source Serif 4"],
      palettes=[["#1c1a15","#2a251c","#e8dcc0","#c9762b","#7d7261","#4a5d23"],
                ["#211d16","#2f2820","#ded2b4","#8c2f39","#847768","#c9762b"]],
      radii=[SHARP, SOFT], shadows=[DEEP_SH, HARD4], unit=8, scale=[0.5,1,2,3,6],
      tags=["industrial","1920s","machines","pulp"]),
 dict(slug="steampunk", name="Steampunk",
      display=["Cinzel","Playfair Display","Special Elite","Alfa Slab One","Italiana"],
      body=["Libre Caslon Text","Special Elite","IBM Plex Sans"],
      palettes=[["#20180f","#2e2214","#ecdcb9","#b08d3e","#8a7554","#5c2e1e"],
                ["#241a10","#332515","#e6d3a8","#7a8450","#8f7a58","#b08d3e"]],
      radii=[SOFT, ROUND], shadows=[DEEP_SH], unit=8, scale=[0.5,1,2,3,6],
      tags=["victorian","brass","gears","adventure"]),
 dict(slug="art-nouveau", name="Art Nouveau",
      display=["Italiana","Cormorant Garamond","Marcellus","Cinzel","Dancing Script"],
      body=["Cormorant Garamond","Jost","Source Serif 4"],
      palettes=[["#f7f3ea","#ffffff","#33402f","#7d9b6a","#a8a094","#b76e79"],
                ["#f3eee0","#fdfaf2","#2f3a4a","#5b7a8a","#a39a89","#c9a227"]],
      radii=[ROUND, PILL], shadows=[SOFT_SH], unit=8, scale=[0.5,1,1.5,3,6],
      tags=["organic","flowing","1900s","elegant"]),
]

FAMILIES += [
 dict(slug="pop-art", name="Pop Art",
      display=["Bungee","Titan One","Luckiest Guy","Archivo Black","Anton"],
      body=["Archivo","Inter","Space Grotesk"],
      palettes=[["#fdfdfd","#ffffff","#141414","#ff2e63","#9a9a9a","#08d9d6"],
                ["#fffbe8","#ffffff","#161616","#f9ed69","#a8a8a8","#3a86ff"]],
      radii=[SHARP, MIXED], shadows=[HARD4, HARD6], unit=8, scale=[0.5,1,2,4,6],
      tags=["warhol","comic","bold","dots"]),
 dict(slug="swiss-poster", name="Swiss Poster",
      display=["Archivo Black","Anton","Inter","Space Grotesk","Barlow Condensed"],
      body=["Inter","Archivo","IBM Plex Sans"],
      palettes=[["#f7f7f5","#ffffff","#0f0f0f","#ff4d00","#8c8c8c","#0f4dff"],
                ["#ffffff","#f2f2f2","#101010","#0f4dff","#858585","#ff4d00"]],
      radii=[SHARP], shadows=[NONE], unit=8, scale=[0.5,1,2,4,8],
      tags=["poster","type-first","grid","bold"]),
 dict(slug="corporate-clean", name="Corporate Clean",
      display=["Inter","Sora","Manrope","DM Sans","Space Grotesk"],
      body=["Inter","DM Sans","Manrope"],
      palettes=[["#ffffff","#f6f8fa","#1c2733","#2563eb","#8a94a6","#0ea5e9"],
                ["#fafbfc","#f1f4f7","#1e2a36","#0d9488","#8d99ab","#6366f1"]],
      radii=[SOFT, MIXED], shadows=[SOFT_SH, NONE], unit=8, scale=[0.5,1,2,3,6],
      tags=["saas","trustworthy","blue","minimal"]),
 dict(slug="glassmorphism", name="Glassmorphism",
      display=["Outfit","Sora","Quicksand","Unbounded","Space Grotesk"],
      body=["Outfit","Inter","Quicksand"],
      palettes=[["#dfe9f5","#f2f6fc","#16233a","#6c5ce7","#93a1b8","#00cec9"],
                ["#e8ecf7","#f5f7fd","#1b2340","#e17055","#9aa5bd","#6c5ce7"]],
      radii=[ROUND], shadows=[GLASS, SOFT_SH], unit=8, scale=[0.5,1,2,3,5],
      tags=["frosted","translucent","layered","soft"]),
 dict(slug="neumorphism", name="Neumorphism",
      display=["Nunito","Quicksand","Manrope","Outfit","Sora"],
      body=["Nunito","Quicksand","Manrope"],
      palettes=[["#e0e5ec","#e0e5ec","#4a5568","#6c7aef","#a3b1c6","#ffffff"],
                ["#dfe3ea","#dfe3ea","#3f4a5e","#e17055","#9fadc2","#f7f9fc"]],
      radii=[ROUND, SOFT], shadows=[NEU, SOFT_SH], unit=8, scale=[0.5,1,2,3,5],
      tags=["soft-ui","embossed","tactile","grey"]),
 dict(slug="claymorphism", name="Claymorphism",
      display=["Quicksand","Nunito","Titan One","Shrikhand","Bungee"],
      body=["Quicksand","Nunito","Outfit"],
      palettes=[["#ffe8d6","#fff4e8","#5b3a29","#ff8c42","#c9a88c","#7bc96f"],
                ["#e8f4ff","#f2f9ff","#33475b","#4cc9f0","#a3b8cc","#ff8fb1"]],
      radii=[ROUND], shadows=[DEEP_SH, SOFT_SH], unit=8, scale=[0.5,1,2,3,5],
      tags=["chunky","toy-like","soft-3d","friendly"]),
 dict(slug="retro-diner", name="Retro Diner",
      display=["Lobster","Pacifico","Shrikhand","Bebas Neue","Lobster Two"],
      body=["Outfit","Nunito","Space Grotesk"],
      palettes=[["#fff9f0","#ffffff","#2b2b2b","#e63946","#b0a08e","#2a9d8f"],
                ["#fdf6ec","#ffffff","#33302b","#f4a261","#ab9c88","#264653"]],
      radii=[ROUND, PILL], shadows=[HARD4, SOFT_SH], unit=8, scale=[0.5,1,2,4,6],
      tags=["50s","chrome","neon-sign","nostalgia"]),
 dict(slug="western", name="Western",
      display=["Alfa Slab One","Special Elite","Bebas Neue","Oswald","Six Caps"],
      body=["Special Elite","Source Serif 4","IBM Plex Sans"],
      palettes=[["#f3e9d2","#faf3e3","#3b2f23","#a33327","#a08b6d","#2f5233"],
                ["#ece0c6","#f6eeda","#33291d","#2f5233","#9c886a","#a33327"]],
      radii=[SHARP, SOFT], shadows=[DEEP_SH, NONE], unit=8, scale=[0.5,1,2,3,6],
      tags=["frontier","wanted-poster","leather","dusty"]),
 dict(slug="tropical", name="Tropical",
      display=["Pacifico","Shrikhand","Caveat","Bungee","Lobster"],
      body=["Quicksand","Nunito","Outfit"],
      palettes=[["#fffdf5","#ffffff","#1f3d2b","#ff6b35","#9db8a4","#06d6a0"],
                ["#fff8ee","#ffffff","#234434","#ef476f","#a3bfae","#ffd166"]],
      radii=[ROUND, PILL], shadows=[SOFT_SH], unit=8, scale=[0.5,1,2,3,5],
      tags=["beach","vibrant","summer","palm"]),
 dict(slug="arctic", name="Arctic",
      display=["Outfit","Sora","Space Grotesk","Josefin Sans","Gruppo"],
      body=["Inter","Outfit","Space Grotesk"],
      palettes=[["#f4fafd","#ffffff","#22384a","#4cc9f0","#9db9c9","#16324f"],
                ["#eef6fb","#ffffff","#1d3145","#7209b7","#93aec4","#4cc9f0"]],
      radii=[SOFT, ROUND], shadows=[SOFT_SH, GLASS], unit=8, scale=[0.5,1,2,4,6],
      tags=["ice","crisp","blue","minimal"]),
 dict(slug="desert", name="Desert",
      display=["Fraunces","DM Serif Display","Alfa Slab One","Special Elite","Rock Salt"],
      body=["Source Serif 4","Work Sans","Karla"],
      palettes=[["#faf3e7","#fffdf8","#4a3b28","#d97b29","#b39b77","#7a8450"],
                ["#f6ecda","#fdf8ec","#43331f","#a33327","#ad9678","#d97b29"]],
      radii=[SOFT, MIXED], shadows=[SOFT_SH, DEEP_SH], unit=8, scale=[0.5,1,2,3,6],
      tags=["sand","warm","sunset","earthy"]),
 dict(slug="ocean", name="Ocean",
      display=["Outfit","Sora","Quicksand","Caveat","Fraunces"],
      body=["Nunito","Outfit","Inter"],
      palettes=[["#f2f9fb","#ffffff","#0b2e3f","#0096c7","#8fb6c4","#023e8a"],
                ["#eef8f6","#ffffff","#103b2f","#2a9d8f","#8fc0b5","#e9c46a"]],
      radii=[ROUND, PILL], shadows=[SOFT_SH, GLASS], unit=8, scale=[0.5,1,2,3,6],
      tags=["sea","deep","blue","calm"]),
 dict(slug="forest", name="Forest",
      display=["Fraunces","DM Serif Display","Cormorant Garamond","Bricolage Grotesque","Caveat"],
      body=["Source Serif 4","Work Sans","Inter"],
      palettes=[["#f4f7f2","#ffffff","#1e2f23","#2d6a4f","#93a893","#d8a24a"],
                ["#eff4ec","#fbfdfa","#243327","#606c38","#8fa08f","#bc6c25"]],
      radii=[SOFT, ROUND], shadows=[SOFT_SH], unit=8, scale=[0.5,1,2,3,6],
      tags=["woods","moss","organic","green"]),
 dict(slug="cosmic", name="Cosmic",
      display=["Unbounded","Orbitron","Michroma","Zen Dots","Nabla"],
      body=["Space Grotesk","Outfit","IBM Plex Mono"],
      palettes=[["#060913","#0d1526","#e6ecf5","#7c5cff","#5b6b8c","#00e5ff"],
                ["#0a0616","#150e2a","#f0eafc","#ff2fb3","#6a5f8f","#7c5cff"]],
      radii=[ROUND, SOFT], shadows=[GLOW, DEEP_SH], unit=8, scale=[0.5,1,2,4,8],
      tags=["space","nebula","stars","deep"]),
 dict(slug="gothic", name="Gothic",
      display=["Cinzel","Playfair Display","Bodoni Moda","Marcellus","Italiana"],
      body=["Cormorant Garamond","Libre Caslon Text","Special Elite"],
      palettes=[["#0e0d12","#17161d","#d9d4c7","#8b1e2d","#5f5a6e","#4a4e69"],
                ["#121016","#1b1822","#cfc9ba","#4a4e69","#655f78","#8b1e2d"]],
      radii=[SHARP, SOFT], shadows=[DEEP_SH], unit=8, scale=[0.5,1,2,4,7],
      tags=["dark","cathedral","victorian","moody"]),
 dict(slug="kawaii", name="Kawaii",
      display=["Quicksand","Nunito","Shrikhand","Gochi Hand","Titan One"],
      body=["Quicksand","Nunito","Outfit"],
      palettes=[["#fff5f8","#ffffff","#5b4a54","#ff8fb1","#c4a9b5","#8fd3ff"],
                ["#f8f4ff","#ffffff","#4e4459","#b388eb","#b3a8c9","#ffd6e0"]],
      radii=[PILL, ROUND], shadows=[SOFT_SH], unit=8, scale=[0.5,1,2,3,5],
      tags=["cute","pastel","japanese","soft"]),
 dict(slug="pixel-arcade", name="Pixel Arcade",
      display=["Press Start 2P","VT323","Silkscreen","DotGothic16","Handjet"],
      body=["VT323","Space Mono","IBM Plex Mono"],
      palettes=[["#0a0a12","#14141f","#f0f0f0","#39ff14","#6a6a7a","#ff10f0"],
                ["#0d0a14","#171222","#f5f0ff","#ffe74c","#6f6a80","#ff10f0"]],
      radii=[SHARP], shadows=[NONE, HARD4], unit=8, scale=[0.5,1,2,4,8],
      tags=["8-bit","retro-gaming","crt","arcade"]),
 dict(slug="terminal", name="Terminal",
      display=["JetBrains Mono","IBM Plex Mono","Space Mono","VT323","Major Mono Display"],
      body=["IBM Plex Mono","JetBrains Mono","Space Mono"],
      palettes=[["#0c0c0c","#111111","#33ff33","#33ff33","#1f7a1f","#ffb000"],
                ["#0a0e0a","#101410","#00ffff","#00ffff","#1f6a6a","#ff5c00"]],
      radii=[SHARP], shadows=[NONE, GLOW], unit=8, scale=[0.5,1,2,3,6],
      tags=["cli","hacker","mono","phosphor"]),
 dict(slug="editorial", name="Editorial",
      display=["Playfair Display","DM Serif Display","Fraunces","Newsreader","Bodoni Moda"],
      body=["Newsreader","Source Serif 4","Inter"],
      palettes=[["#fbfaf7","#ffffff","#1a1a1a","#b3402a","#98907f","#1a1a1a"],
                ["#f7f5f0","#ffffff","#20201e","#1f4fa8","#948d7d","#b3402a"]],
      radii=[SHARP, SOFT], shadows=[NONE, SOFT_SH], unit=8, scale=[0.5,1,2,4,8],
      tags=["magazine","serif","longform","print"]),
 dict(slug="zen", name="Zen",
      display=["Cormorant Garamond","Josefin Sans","Outfit","Zen Dots","Italiana"],
      body=["Inter","Noto Sans","Source Sans 3"],
      palettes=[["#f7f6f2","#ffffff","#3a3a38","#8a9a5b","#b0aca0","#3a3a38"],
                ["#f4f3ef","#fdfdfb","#33302b","#5b7a8a","#aaa59a","#8a9a5b"]],
      radii=[SOFT], shadows=[NONE], unit=8, scale=[0.5,1,2,4,8],
      tags=["calm","minimal","breathing-room","quiet"]),
]

assert len(FAMILIES) == 40, f"need 40 families, have {len(FAMILIES)}"
_KNOWN = set(DISPLAY_FONTS) | set(BODY_FONTS) | set(MONO_FONTS)
for _f in FAMILIES:
    for _font in _f["display"] + _f["body"]:
        assert _font in _KNOWN, f"unknown font {_font} in family {_f['slug']}"

# ------------------------------------------------------------- generation --

ROLES = ["bg", "surface", "ink", "accent", "muted", "extra"]


def build_dna(i):
    fam = FAMILIES[i % len(FAMILIES)]
    num = i // len(FAMILIES) + 1
    rng = random.Random(SEED + i)
    slug = "%s-%03d" % (fam["slug"], num)
    name = "%s %03d" % (fam["name"], num)

    anchor = rng.choice(fam["palettes"])
    palette = [jitter(h, rng) for h in anchor]
    roles = {r: palette[k] if k < len(palette) else palette[-1]
             for k, r in enumerate(ROLES)}

    display = rng.choice(fam["display"])
    body_pool = [b for b in fam["body"] if b != display] or fam["body"]
    body = rng.choice(body_pool)
    mono = rng.choice(MONO_FONTS)
    radius = dict(rng.choice(fam["radii"]))
    shadow = rng.choice(fam["shadows"]).replace("{accent}", roles["accent"])
    unit = fam["unit"]
    spacing = {"unit": unit, "scale": [round(unit * m, 2) for m in fam["scale"]]}
    tags = sorted(set(fam["tags"] + [rng.choice(fam["tags"])]))

    tokens = {
        "$meta": {"name": name, "family": fam["name"], "slug": slug,
                  "generator": "tz-taste/generate_dnas.py", "seed": SEED + i},
        "color": {r: {"$value": roles[r], "$type": "color"} for r in ROLES},
        "fontFamily": {
            "display": {"$value": display, "$type": "fontFamily"},
            "body": {"$value": body, "$type": "fontFamily"},
            "mono": {"$value": mono, "$type": "fontFamily"},
        },
        "fontUrl": {
            "display": {"$value": "https://fonts.googleapis.com/css2?family=" + gf(display) + "&display=swap",
                        "$type": "other"},
            "body": {"$value": "https://fonts.googleapis.com/css2?family=" + gf(body) + "&display=swap",
                     "$type": "other"},
        },
        "borderRadius": {k: {"$value": v, "$type": "borderRadius"}
                         for k, v in radius.items()},
        "boxShadow": {"default": {"$value": shadow, "$type": "boxShadow"}},
        "spacing": {"unit": {"$value": "%dpx" % unit, "$type": "dimension"},
                    "scale": {"$value": spacing["scale"], "$type": "other"}},
    }

    tailwind = (
        "// %s — TZ-taste style DNA\n"
        "// %s\n"
        "module.exports = {\n"
        "  theme: {\n"
        "    extend: {\n"
        "      colors: {\n"
        "        bg: '%s',\n"
        "        surface: '%s',\n"
        "        ink: '%s',\n"
        "        accent: '%s',\n"
        "        muted: '%s',\n"
        "        extra: '%s',\n"
        "      },\n"
        "      fontFamily: {\n"
        "        display: ['%s', 'sans-serif'],\n"
        "        body: ['%s', 'sans-serif'],\n"
        "        mono: ['%s', 'monospace'],\n"
        "      },\n"
        "      borderRadius: {\n"
        "        sm: '%s', md: '%s', lg: '%s', pill: '%s',\n"
        "      },\n"
        "      boxShadow: {\n"
        "        dna: '%s',\n"
        "      },\n"
        "    },\n"
        "  },\n"
        "};\n"
    ) % (name, ONE_LINER, roles["bg"], roles["surface"], roles["ink"],
         roles["accent"], roles["muted"], roles["extra"],
         display, body, mono,
         radius["sm"], radius["md"], radius["lg"], radius["pill"], shadow)

    return {
        "slug": slug,
        "name": name,
        "family": fam["slug"],
        "familyName": fam["name"],
        "palette": palette,
        "fonts": {"display": display, "body": body, "mono": mono},
        "radius": radius,
        "spacing": spacing,
        "shadow": shadow,
        "tags": tags,
        "tokens": tokens,
        "tailwind": tailwind,
        "buildPrompt": "%s — style: %s" % (ONE_LINER, name),
    }


def main():
    os.makedirs(DNAS, exist_ok=True)
    index = []
    seen = set()
    for i in range(COUNT):
        dna = build_dna(i)
        assert dna["slug"] not in seen, "duplicate slug " + dna["slug"]
        seen.add(dna["slug"])
        with open(os.path.join(DNAS, dna["slug"] + ".json"), "w") as f:
            json.dump(dna, f, separators=(",", ":"))
        index.append({
            "slug": dna["slug"],
            "name": dna["name"],
            "family": dna["family"],
            "familyName": dna["familyName"],
            "palette": dna["palette"][:5],
            "display": dna["fonts"]["display"],
            "body": dna["fonts"]["body"],
        })
        if (i + 1) % 1000 == 0:
            print("... %d/%d" % (i + 1, COUNT), flush=True)
    with open(os.path.join(DATA, "index.json"), "w") as f:
        json.dump(index, f, separators=(",", ":"))
    print("wrote %d dnas -> %s" % (COUNT, DNAS))
    print("wrote index -> %s" % os.path.join(DATA, "index.json"))


if __name__ == "__main__":
    sys.exit(main())
