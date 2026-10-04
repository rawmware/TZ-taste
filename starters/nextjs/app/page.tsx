//tz-meta {"id":"nextjs-page","title":"Crumb & Craft landing page","category":"Starter","file":"starters/nextjs/app/page.tsx","tags":["nextjs","landing"],"description":"Fictional sourdough bakery landing page with offset hero, story, today's-bake ticket, order CTA, and full footer.","dnas":["editorial-serif"]}

const bakes = [
  { loaf: "Country Loaf", detail: "The everyday loaf. Open crumb, deep crust.", price: "$9", out: "out 9:40 AM", soldOut: false },
  { loaf: "Seeded Rye", detail: "Caraway, sunflower, flax. Dense in the good way.", price: "$11", out: "out 10:15 AM", soldOut: false },
  { loaf: "Baguette", detail: "Crackling thin crust. Gone by eleven, always.", price: "$5", out: "out 11:00 AM", soldOut: true },
  { loaf: "Olive & Herb", detail: "Kalamata, rosemary, a slick of olive oil.", price: "$12", out: "out 12:20 PM", soldOut: false },
  { loaf: "Morning Bun", detail: "Cinnamon, brown butter. Saturday only.", price: "$4.50", out: "out 8:30 AM", soldOut: true },
];

export default function Home() {
  return (
    <>
      <header className="site-head">
        <div className="wrap">
          <a className="wordmark" href="#top">
            Crumb <em>&amp;</em> Craft
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#story">Story</a>
            <a href="#bake">Today&apos;s bake</a>
            <a className="btn btn--nav" href="#order">
              Order for pickup
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---- offset hero ---- */}
        <section className="hero" aria-label="Introduction">
          <div className="wrap">
            <div className="hero-copy">
              <p className="kicker rise">Kittery, Maine — Est. 2019</p>
              <h1 className="rise rise-1">
                Sourdough worth crossing the river for.
              </h1>
              <p className="lede rise rise-2">
                Long-fermented loaves baked six mornings a week in a brick oven
                on Government Street. Crisp crust, open crumb, nothing rushed —
                and everything gone by afternoon.
              </p>
              <p className="rise rise-3">
                <a className="btn" href="#bake">
                  See today&apos;s bake
                </a>
              </p>
            </div>
            <aside className="rise rise-4" aria-label="Fresh from the oven">
              <div className="oven-card">
                <p className="stamp">Out of the oven</p>
                <p className="time">9:40 AM</p>
                <p>
                  Loaf No. 04 — the country loaf. Still warm at the counter,
                  $9 a loaf, while it lasts.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <hr className="rule" />

        {/* ---- story / proof ---- */}
        <section className="story" id="story" aria-label="Our story">
          <div className="wrap">
            <div className="story-copy">
              <p className="kicker">The story</p>
              <h2>We bake like the neighborhood is watching.</h2>
              <p style={{ marginTop: "1.75rem" }}>
                Crumb &amp; Craft started in 2019 as one home oven, one starter
                named Dolores, and a farmers&apos; market folding table. Seven
                years on, the oven is brick and the starter is old enough for
                second grade — but the recipe hasn&apos;t changed.
              </p>
              <p>
                Every loaf ferments for 48 hours, bakes in a wood-fired brick
                oven, and cools on the same racks we&apos;ve had since the
                market days. Flour comes stone-milled from Maine growers. What
                doesn&apos;t sell by close goes to the local food pantry. It
                rarely gets that far.
              </p>
              <ul className="facts">
                <li>
                  <span className="num">01</span>
                  <span>48-hour cold ferment on every loaf, no shortcuts</span>
                </li>
                <li>
                  <span className="num">02</span>
                  <span>Wood-fired brick oven, lit at 4 AM</span>
                </li>
                <li>
                  <span className="num">03</span>
                  <span>Stone-milled Maine flour in everything we bake</span>
                </li>
                <li>
                  <span className="num">04</span>
                  <span>Day-old bread donated daily — never thrown out</span>
                </li>
              </ul>
            </div>
            <blockquote className="pull">
              The crust shatters. The crumb is custard. I&apos;ve stopped
              buying bread anywhere else.
              <cite>— Maren K., regular since the market-table days</cite>
            </blockquote>
          </div>
        </section>

        <hr className="rule" />

        {/* ---- today's bake ticket ---- */}
        <section className="bake" id="bake" aria-label="Today's bake">
          <div className="wrap">
            <p className="kicker">Saturday&apos;s sheet</p>
            <h2 style={{ marginBottom: "2.5rem" }}>Today&apos;s bake</h2>
            <div className="ticket">
              <div className="ticket-head">
                <p className="date">Sat, Oct 3</p>
                <p className="date">No. 04 — Week 40</p>
              </div>
              <hr className="perf" aria-hidden="true" />
              <ul className="bake-list">
                {bakes.map((b) => (
                  <li key={b.loaf}>
                    <div>
                      <span className="loaf">
                        {b.loaf}
                        {b.soldOut && <span className="sold">Sold out</span>}
                      </span>
                      <p className="detail">{b.detail}</p>
                    </div>
                    <div className="price">
                      {b.price}
                      <span className="out">{b.out}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="ticket-foot">
                Tear off and bring to the counter. Saturdays sell out by noon —
                the rye goes first.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* ---- order CTA ---- */}
        <section className="order" id="order" aria-label="Order ahead">
          <div className="wrap">
            <p className="kicker">Pickup orders</p>
            <h2>Order ahead, skip the line.</h2>
            <p>
              Orders close at 2 PM for next-day pickup. Tell us which loaves
              and how many — we&apos;ll have them bagged and waiting at the
              counter with your name on the ticket.
            </p>
            <p>
              Pay at pickup. We take cards, cash, and exact-change regulars.
            </p>
            <a
              className="btn"
              href="mailto:hello@crumbandcraft.com?subject=Pickup%20order"
            >
              Start a pickup order
            </a>
            <p className="fine">
              Whole-loaf minimums apply on weekends. Large orders for events —
              weddings, office breakfasts, the whole clam bake — need 72 hours
              notice.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-foot">
        <div className="wrap">
          <div className="foot-col">
            <h3>Visit</h3>
            <address>
              14 Government Street
              <br />
              Kittery, ME 03904
            </address>
          </div>
          <div className="foot-col">
            <h3>Hours</h3>
            <p>
              Tue – Fri · 8 AM – 2 PM
              <br />
              Sat – Sun · 7 AM – 1 PM
              <br />
              Monday · oven rests
            </p>
          </div>
          <div className="foot-col">
            <h3>Contact</h3>
            <p>
              <a href="mailto:hello@crumbandcraft.com">
                hello@crumbandcraft.com
              </a>
              <br />
              <a href="tel:+12075550147">(207) 555-0147</a>
            </p>
          </div>
          <div className="foot-col">
            <h3>Follow</h3>
            <p>
              Daily oven times and sold-out alerts
              <br />
              <a href="#top">@crumbandcraft</a>
            </p>
          </div>
        </div>
        <div className="wrap">
          <p className="colophon">
            © 2026 Crumb &amp; Craft. A fictional bakery, baked fresh for the
            TZ-taste starter kit.
          </p>
        </div>
      </footer>
    </>
  );
}
