/* <!--tz-meta {"id":"react-newsletter-form","title":"Newsletter form (React)","category":"React","file":"react/NewsletterForm.tsx","tags":["react","newsletter"],"description":"Cottage-warm signup card with a stamp-like border and a React-state success note. No page reload, no false promises.","dnas":["cottage-warm"]} --> */
// Usage: <NewsletterForm title="The Sunday Letter" blurb="..." placeholder="you@example.com" buttonLabel="Join the list" successTitle="You are on the list." successBody="First letter arrives Friday morning." />
import { useState } from "react";

interface NewsletterFormProps {
  title: string;
  blurb: string;
  placeholder: string;
  buttonLabel: string;
  successTitle: string;
  successBody: string;
}

export default function NewsletterForm(props: NewsletterFormProps) {
  const { title, blurb, placeholder, buttonLabel, successTitle, successBody } = props;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("That address does not look right — mind checking it?");
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <section className="tz-news" aria-label="Newsletter">
      <style>{`
        .tz-news{background:#fbf5ea;color:#3d3229;font-family:'Karla',Arial,sans-serif;
          padding:clamp(72px,9vw,140px) clamp(20px,5vw,80px)}
        .tz-news-card{max-width:640px;margin:0 auto;background:#fbf5ea;
          border:2px solid #e7dcc6;outline:1px dashed #b5533c;outline-offset:8px;
          padding:clamp(32px,5vw,56px);text-align:center}
        .tz-news-stamp{display:inline-block;font-family:'Space Mono',monospace;font-size:10px;
          letter-spacing:.3em;text-transform:uppercase;color:#b5533c;
          border:1px solid #b5533c;padding:8px 16px;margin:0 0 24px;transform:rotate(-3deg)}
        .tz-news h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;
          font-size:clamp(30px,4.5vw,48px);margin:0 0 16px}
        .tz-news-blurb{font-size:16px;line-height:1.7;color:#8d7f6e;margin:0 auto 30px;max-width:44ch}
        .tz-news-form{display:flex;gap:10px;max-width:440px;margin:0 auto}
        .tz-news-input{flex:1;font:inherit;font-size:15px;padding:15px 18px;color:#3d3229;
          background:#fff;border:1px solid #e7dcc6;border-radius:2px}
        .tz-news-input:focus{outline:2px solid #b5533c;outline-offset:1px}
        .tz-news-btn{font:inherit;font-size:15px;font-weight:700;color:#fbf5ea;background:#b5533c;
          border:0;border-radius:2px;padding:15px 26px;cursor:pointer;white-space:nowrap;
          transition:transform .2s cubic-bezier(.22,1,.36,1),opacity .2s ease}
        .tz-news-btn:hover{transform:translateY(-2px);opacity:.94}
        @media (prefers-reduced-motion:reduce){
          .tz-news-btn{transition:none}
          .tz-news-stamp{transform:none}
        }
        .tz-news-err{color:#b5533c;font-size:14px;margin:14px 0 0;min-height:20px}
        .tz-news-done h2{margin-bottom:12px}
        .tz-news-done p{color:#8d7f6e;font-size:16px;line-height:1.7;margin:0}
        .tz-news-done .tz-news-stamp{transform:rotate(2deg)}
        @media (max-width:520px){.tz-news-form{flex-direction:column}}
      `}</style>
      <div className="tz-news-card">
        {done ? (
          <div className="tz-news-done">
            <p className="tz-news-stamp">Posted</p>
            <h2>{successTitle}</h2>
            <p>{successBody}</p>
          </div>
        ) : (
          <>
            <p className="tz-news-stamp">First class</p>
            <h2>{title}</h2>
            <p className="tz-news-blurb">{blurb}</p>
            <form className="tz-news-form" onSubmit={submit} noValidate>
              <input
                className="tz-news-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                aria-label="Email address"
              />
              <button className="tz-news-btn" type="submit">{buttonLabel}</button>
            </form>
            <p className="tz-news-err" role="status">{error}</p>
          </>
        )}
      </div>
    </section>
  );
}
