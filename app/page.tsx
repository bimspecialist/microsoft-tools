import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

export const metadata = {
  title: "Toolbox Suite | Windows Productivity Suite",
  description: "Toolbox Suite by BIM Specialist Software — practical Windows tools for PDF, image, file, and document workflows.",
};

const features = [
  ["PDF & document workflows", "سير عمل PDF والمستندات", "Practical utilities for common document tasks in one focused Windows app.", "أدوات عملية لمهام المستندات الشائعة ضمن تطبيق Windows واحد."],
  ["File productivity", "إنتاجية الملفات", "Reduce repetitive file operations and keep everyday workflows organized.", "قلّل عمليات الملفات المتكررة ونظّم سير العمل اليومي."],
  ["Local-first processing", "معالجة محلية", "Core working-file operations are designed to run locally on your Windows device.", "صُممت عمليات ملفات العمل الأساسية لتعمل محليًا على جهاز Windows."],
  ["Microsoft Store licensing", "ترخيص Microsoft Store", "Distribution, purchases, restoration, and licensing are handled through Microsoft Store services.", "تتم إدارة التوزيع والشراء واستعادة الاشتراك والترخيص عبر خدمات Microsoft Store."],
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <Link className="brand" href="/" aria-label="BIM Specialist Software home">
          <span className="brandMark">B</span>
          <span><strong>BIM</strong><small>Specialist</small></span>
        </Link>
        <nav aria-label="Main navigation">
          <a href="#features"><span data-lang="en">Features</span><span data-lang="ar">المزايا</span></a>
          <Link href="/support"><span data-lang="en">Support</span><span data-lang="ar">الدعم</span></Link>
          <Link href="/privacy"><span data-lang="en">Privacy</span><span data-lang="ar">الخصوصية</span></Link>
          <LanguageSwitcher />
        </nav>
      </header>

      <section className="hero productHero">
        <div className="eyebrow"><span data-lang="en">WINDOWS PRODUCTIVITY SUITE</span><span data-lang="ar">حزمة إنتاجية لنظام WINDOWS</span></div>
        <h1><span data-lang="en">Everyday file workflows, <span>organized in one toolbox.</span></span><span data-lang="ar">مهام الملفات اليومية، <span>منظمة في صندوق أدوات واحد.</span></span></h1>
        <p className="lead"><span data-lang="en">Toolbox Suite brings practical PDF, image, file, and document utilities into a clean Windows experience by BIM Specialist Software.</span><span data-lang="ar">يجمع Toolbox Suite أدوات عملية لملفات PDF والصور والملفات والمستندات ضمن تجربة Windows واضحة من BIM Specialist Software.</span></p>
        <div className="actions">
          <a className="primaryButton" href="#features"><span data-lang="en">Explore features</span><span data-lang="ar">استكشف المزايا</span></a>
          <Link className="secondaryButton" href="/support"><span data-lang="en">Product support</span><span data-lang="ar">دعم المنتج</span></Link>
        </div>
        <div className="productFacts" aria-label="Product facts">
          <div><strong>Windows</strong><small><span data-lang="en">desktop application</span><span data-lang="ar">تطبيق سطح مكتب</span></small></div>
          <div><strong>Microsoft Store</strong><small><span data-lang="en">distribution & licensing</span><span data-lang="ar">التوزيع والترخيص</span></small></div>
          <div><strong>Local-first</strong><small><span data-lang="en">working-file processing</span><span data-lang="ar">معالجة ملفات العمل</span></small></div>
        </div>
      </section>

      <section id="features" className="featureSection">
        <div className="sectionIntro"><div><span className="eyebrow"><span data-lang="en">PRODUCT CAPABILITIES</span><span data-lang="ar">إمكانات المنتج</span></span><h2><span data-lang="en">Built for practical desktop work.</span><span data-lang="ar">مصمم للعمل المكتبي العملي.</span></h2></div><p><span data-lang="en">A focused set of utilities designed to make routine Windows file and document tasks easier to manage.</span><span data-lang="ar">مجموعة مركزة من الأدوات لتسهيل إدارة مهام الملفات والمستندات المعتادة في Windows.</span></p></div>
        <div className="featureGrid">
          {features.map((f, i) => <article className="featureCard" key={f[0]}><span className="featureNumber">0{i+1}</span><h3><span data-lang="en">{f[0]}</span><span data-lang="ar">{f[1]}</span></h3><p><span data-lang="en">{f[2]}</span><span data-lang="ar">{f[3]}</span></p></article>)}
        </div>
      </section>

      <section className="trustBand"><div><span className="eyebrow"><span data-lang="en">OFFICIAL RESOURCES</span><span data-lang="ar">المصادر الرسمية</span></span><h2><span data-lang="en">Support and privacy, clearly documented.</span><span data-lang="ar">الدعم والخصوصية موثقان بوضوح.</span></h2></div><div className="trustActions"><Link className="secondaryButton" href="/support"><span data-lang="en">Support center</span><span data-lang="ar">مركز الدعم</span></Link><Link className="secondaryButton" href="/privacy"><span data-lang="en">Privacy policy</span><span data-lang="ar">سياسة الخصوصية</span></Link></div></section>

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
