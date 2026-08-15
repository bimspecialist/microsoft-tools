import Link from "next/link";

export const metadata = {
  title: "Toolbox Suite Privacy Policy",
  description: "Privacy policy for Toolbox Suite by BIM Specialist Software.",
};

export default function PrivacyPage() {
  return (
    <main><article className="documentShell">
      <Link className="backLink" href="/">← BIM Specialist Software</Link>
      <header className="documentHeader">
        <div className="eyebrow">EFFECTIVE AUGUST 15, 2026</div>
        <h1>Privacy Policy</h1>
        <p>This policy explains how Toolbox Suite handles information when you use the Windows application.</p>
      </header>
      <div className="document">
        <p className="notice"><strong>Summary:</strong> Toolbox Suite processes the files you select locally on your Windows device. The application does not upload your working files to BIM Specialist Software servers by default.</p>
        <h2>1. Information processed by Toolbox Suite</h2>
        <p>Toolbox Suite processes documents and files only when you select them or ask the application to perform an operation. This processing takes place locally on your Windows device.</p>
        <h2>2. Local application data</h2>
        <p>The application may store preferences such as language, appearance, recent tools, favorites, output folders, interface settings, and a cached Microsoft Store entitlement status in your local application data folder. This data remains on your device and supports normal application operation.</p>
        <h2>3. Microsoft Store services</h2>
        <p>Toolbox Suite uses Microsoft Store services for distribution, subscription purchases, purchase restoration, and license verification. Microsoft may process Microsoft account, payment, transaction, device, and licensing information according to Microsoft’s own terms and privacy statement. BIM Specialist Software does not receive your full payment-card information.</p>
        <h2>4. File transmission</h2>
        <p>Toolbox Suite does not intentionally transmit your selected working files to BIM Specialist Software servers. If a future feature requires online processing, this policy and the feature interface will be updated before that processing is introduced.</p>
        <h2>5. Data retention and deletion</h2>
        <p>Locally stored preferences remain on your device until you change them, reset the application, clear its application data, or uninstall it. Microsoft Store transaction and licensing records are controlled by Microsoft.</p>
        <h2>6. Children’s privacy</h2>
        <p>Toolbox Suite is a general productivity application and is not directed specifically to children. BIM Specialist Software does not knowingly collect children’s personal information through the application.</p>
        <h2>7. Security</h2>
        <p>We design Toolbox Suite to minimize data collection and keep file processing local. No software environment can be guaranteed completely secure, and users should maintain suitable backups of important files.</p>
        <h2>8. Changes to this policy</h2>
        <p>We may update this policy when the application or applicable requirements change. The effective date at the top of this page identifies the current version.</p>
        <h2>9. Publisher</h2>
        <p>This policy is published by <strong>BIM Specialist Software</strong> for Toolbox Suite, Microsoft Store product ID <strong>9N8MJLGKWWFG</strong>. Support requests may be submitted through the official <Link className="backLink" href="/support">Toolbox Suite support page</Link>.</p>
        <h2 lang="ar" dir="rtl">ملخص سياسة الخصوصية</h2>
        <p lang="ar" dir="rtl">يعالج Toolbox Suite الملفات التي يختارها المستخدم محليًا على جهاز Windows، ولا يرفع ملفات العمل إلى خوادم BIM Specialist Software افتراضيًا. تُستخدم خدمات Microsoft Store للشراء والتحقق من الاشتراك وفق سياسة Microsoft.</p>
      </div>
    </article></main>
  );
}
