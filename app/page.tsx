import Link from "next/link";

export const metadata = {
  title: "Toolbox Suite Support & Privacy",
  description: "Official support and privacy information for Toolbox Suite by BIM Specialist Software.",
};

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <Link className="brand" href="/" aria-label="BIM Specialist Software home">
          <span className="brandMark">B</span>
          <span><strong>BIM</strong><small>Specialist</small></span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/privacy">Privacy</Link>
          <Link href="/support">Support</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="eyebrow">OFFICIAL PRODUCT INFORMATION</div>
        <h1>Toolbox Suite<br /><span>Support &amp; Privacy</span></h1>
        <p className="lead">Official resources for Toolbox Suite, a Windows productivity application published by BIM Specialist Software.</p>
        <div className="actions">
          <Link className="primaryButton" href="/support">Get support</Link>
          <Link className="secondaryButton" href="/privacy">Read privacy policy</Link>
        </div>
      </section>

      <section className="cards" aria-label="Official resources">
        <Link className="resourceCard" href="/privacy">
          <span className="cardNumber">01</span>
          <div><h2>Privacy Policy</h2><p>Learn how Toolbox Suite processes files, settings, and Microsoft Store licensing information.</p></div>
          <span className="arrow" aria-hidden="true">→</span>
        </Link>
        <Link className="resourceCard" href="/support">
          <span className="cardNumber">02</span>
          <div><h2>Product Support</h2><p>Find installation, subscription, restoration, and troubleshooting guidance.</p></div>
          <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="arabicNote" dir="rtl" lang="ar">
        <span>العربية</span>
        <p>هذه الصفحات هي المصدر الرسمي لسياسة الخصوصية ودعم برنامج Toolbox Suite.</p>
      </section>

      <Footer />
    </main>
  );
}

export function Footer() {
  return (
    <footer>
      <p>© 2026 BIM Specialist Software</p>
      <p>Toolbox Suite · Microsoft Store ID 9N8MJLGKWWFG</p>
    </footer>
  );
}

