import Link from "next/link";

export const metadata = {
  title: "Toolbox Suite Support",
  description: "Official setup, subscription, and troubleshooting support for Toolbox Suite.",
};

export default function SupportPage() {
  return (
    <main><article className="documentShell">
      <Link className="backLink" href="/">← BIM Specialist Software</Link>
      <header className="documentHeader">
        <div className="eyebrow">TOOLBOX SUITE · WINDOWS</div>
        <h1>Product Support</h1>
        <p>Installation, subscription, and troubleshooting guidance for Toolbox Suite.</p>
      </header>
      <div className="document">
        <h2>Quick help</h2>
        <div className="supportGrid">
          <section className="supportItem"><h3>Install or update</h3><p>Install Toolbox Suite from its official Microsoft Store listing. Microsoft Store delivers supported updates automatically.</p></section>
          <section className="supportItem"><h3>Restore Pro</h3><p>Sign in to Microsoft Store with the purchasing account, then open Toolbox Suite → Subscription → Restore Purchase.</p></section>
          <section className="supportItem"><h3>Manage subscription</h3><p>Use Toolbox Suite → Subscription → Manage Subscription, or open Microsoft account Services &amp; subscriptions.</p></section>
          <section className="supportItem"><h3>Files and output</h3><p>Confirm that the selected input exists and choose an output folder where your Windows account has write permission.</p></section>
        </div>
        <h2>Subscription products</h2>
        <ul><li><strong>Toolbox Pro Monthly</strong> — Microsoft Store ID 9P4K5Z77Z30S.</li><li><strong>Toolbox Pro Annual</strong> — Microsoft Store ID 9P0BJR6OXTQ6.</li></ul>
        <p>Purchases, renewals, regional pricing, taxes, cancellations, and refunds are handled by Microsoft Store. Toolbox Suite does not process payment-card details directly.</p>
        <h2>If Pro is not active</h2>
        <ol><li>Verify that Windows and Microsoft Store use the Microsoft account that purchased the subscription.</li><li>Check that the subscription is active in Microsoft account Services &amp; subscriptions.</li><li>Restart Microsoft Store, then restart Toolbox Suite.</li><li>Use <strong>Restore Purchase</strong> from the Toolbox Suite subscription screen.</li></ol>
        <h2>Application troubleshooting</h2>
        <ul><li>Install all pending Windows and Microsoft Store updates.</li><li>Retry with a local file and a writable local output folder.</li><li>Keep an original backup before running large batch operations.</li><li>If the application cannot start, use Windows Settings → Apps → Toolbox Suite → Advanced options → Repair.</li></ul>
        <h2>Official product details</h2>
        <p>Publisher: <strong>BIM Specialist Software</strong><br />Application: <strong>Toolbox Suite</strong><br />Microsoft Store product ID: <strong>9N8MJLGKWWFG</strong><br />Current release: <strong>7.0</strong></p>
        <h2>Privacy</h2>
        <p>For details about local file processing and Microsoft Store licensing, read the <Link className="backLink" href="/privacy">Toolbox Suite Privacy Policy</Link>.</p>
        <h2 lang="ar" dir="rtl">الدعم باللغة العربية</h2>
        <p lang="ar" dir="rtl">لتفعيل الاشتراك، تأكد من تسجيل الدخول إلى Microsoft Store بالحساب المستخدم في الشراء، ثم افتح شاشة الاشتراك داخل Toolbox Suite واضغط على «استعادة الشراء». تتم إدارة الدفع والتجديد والإلغاء بواسطة Microsoft Store.</p>
      </div>
    </article></main>
  );
}
