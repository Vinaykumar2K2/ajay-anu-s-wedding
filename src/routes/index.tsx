import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import weddingArt from "@/assets/wedding-invitation-art.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ajay Kumar & Anu Priya — Wedding Invitation" },
      {
        name: "description",
        content:
          "With the blessings of their families, Ajay Kumar and Anu Priya invite you to celebrate their wedding and reception in November 2026.",
      },
      { property: "og:title", content: "Ajay Kumar & Anu Priya — Wedding Invitation" },
      {
        property: "og:description",
        content: "Celebrate the wedding of Ajay Kumar and Anu Priya on 15 November 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

export function Index() {
  return (
    <main className="wedding-page">
      <section className="invitation-cover" aria-labelledby="couple-names">
        <div className="invitation-artwork">
          <img
            className="mandap-art"
            src={weddingArt}
            alt="An ornate floral wedding mandap with jasmine garlands and a brass diya"
            width={1200}
            height={1600}
            fetchPriority="high"
          />
          <div className="artwork-caption">
            <span>With the blessings of our families</span>
            <span className="caption-rule" aria-hidden="true" />
            <span>Hyderabad · November 2026</span>
          </div>
        </div>

        <div className="invitation-copy">
          <div className="invitation-mark" aria-hidden="true">
            <span>ॐ</span>
          </div>
          <p className="eyebrow">Together with our families</p>
          <h1 id="couple-names" className="couple-names">
            Ajay Kumar <span className="ampersand">&amp;</span> Anu Priya
          </h1>
          <p className="invitation-intro">
            With joyful hearts, we invite you to share in the beginning of our
            forever.
          </p>

          <div className="family-lines">
            <div className="family-line">
              <span className="family-role">The groom</span>
              <p>Son of Ampati Kumar <span>&amp;</span> Jyothi</p>
            </div>
            <div className="family-line">
              <span className="family-role">The bride</span>
              <p>Daughter of Neeli Pandu <span>&amp;</span> Jayasree</p>
            </div>
          </div>

          <div className="cover-date">
            <span className="date-flourish" aria-hidden="true">✳</span>
            <span>15 November 2026</span>
            <span className="date-flourish" aria-hidden="true">✳</span>
          </div>
          <a className="discover-link" href="#celebrations">
            The celebrations <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="celebrations" id="celebrations" aria-labelledby="celebration-heading">
        <div className="celebrations-heading">
          <p className="eyebrow">Save the dates</p>
          <h2 id="celebration-heading">Two days of celebration</h2>
          <p>We would be delighted to celebrate these special moments with you.</p>
        </div>

        <div className="event-grid">
          <article className="event-item">
            <div className="event-number">01 <span>·</span> The wedding</div>
            <h3>Marriage</h3>
            <p className="event-date">Sunday, 15 November 2026</p>
            <p className="event-time">At 9:58 in the morning</p>
            <div className="venue-rule" />
            <p className="venue-name">Faculty Club</p>
            <p className="venue-address">Tarnaka, Hyderabad</p>
            <a
              className="map-link"
              href="https://maps.app.goo.gl/WKwtivv39EpoeQ9e8"
              target="_blank"
              rel="noreferrer"
              aria-label="Open wedding location in Google Maps"
            >
              <MapPin aria-hidden="true" />
              Wedding location
              <ArrowUpRight aria-hidden="true" />
            </a>
          </article>

          <article className="event-item reception-item">
            <div className="event-number">02 <span>·</span> The reception</div>
            <h3>Reception</h3>
            <p className="event-date">Tuesday, 17 November 2026</p>
            <p className="event-time">7:30 in the evening onwards</p>
            <div className="venue-rule" />
            <p className="venue-name">Prince Palace Function Hall</p>
            <p className="venue-address">Shadnagar Road, Kothur</p>
            <a
              className="map-link"
              href="https://maps.app.goo.gl/SZbCMXnB9UpS4poq7"
              target="_blank"
              rel="noreferrer"
              aria-label="Open reception location in Google Maps"
            >
              <MapPin aria-hidden="true" />
              Reception location
              <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <footer className="invitation-footer">
        <span className="footer-ornament" aria-hidden="true">❧</span>
        <p>Your presence will make our celebration complete.</p>
        <span className="footer-names">Ajay &amp; Anu</span>
      </footer>
    </main>
  );
}
