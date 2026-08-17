import Link from "next/link";
import LanguageSwitcher from "../language-switcher";

export const metadata = {
  title: "Toolbox Suite Support",
  description: "Official setup, subscription, and troubleshooting support for Toolbox Suite.",
};

export default function SupportPage() {
  return (
    <main>
      <header className="siteHeader">
        <Link className="brand" href="/" aria-label="BIM Specialist Software home"><span className="brandMark">B</span><span><strong>BIM</strong><small>Specialist</small></span></Link>
        <nav aria-label="Main navigation">
          <Link href="/"><span data-lang="en">Product</span><span data-lang="ar">المنتج</span></Link>
          <Link href="/privacy"><span data-lang="en">Privacy</span><span data-lang="ar">الخصوصية</span></Link>
          <LanguageSwitcher />
        </nav>
      </header>
      <article className="documentShell">
        <Link className="backLink" href="/"><span data-lang="en">← Toolbox Suite</span><span data-lang="ar">Toolbox Suite ←</span></Link>
        <header className="documentHeader">
          <div className="eyebrow"><span data-lang="en">TOOLBOX SUITE · WINDOWS</span><span data-lang="ar">TOOLBOX SUITE · WINDOWS</span></div>
          <h1><span data-lang="en">Product Support</span><span data-lang="ar">دعم المنتج</span></h1>
          <p><span data-lang="en">Installation, subscription, and troubleshooting guidance for Toolbox Suite.</span><span data-lang="ar">إرشادات التثبيت والاشتراك واستكشاف الأخطاء وإصلاحها لبرنامج Toolbox Suite.</span></p>
        </header>
        <div className="document">
          <h2><span data-lang="en">Quick help</span><span data-lang="ar">مساعدة سريعة</span></h2>
          <div className="supportGrid">
            <section className="supportItem"><h3><span data-lang="en">Install or update</span><span data-lang="ar">التثبيت أو التحديث</span></h3><p><span data-lang="en">Install Toolbox Suite from its official Microsoft Store listing. Microsoft Store delivers supported updates automatically.</span><span data-lang="ar">ثبّت Toolbox Suite من صفحته الرسمية في Microsoft Store. يقوم المتجر بتوفير التحديثات المدعومة تلقائيًا.</span></p></section>
            <section className="supportItem"><h3><span data-lang="en">Restore Pro</span><span data-lang="ar">استعادة Pro</span></h3><p><span data-lang="en">Sign in to Microsoft Store with the purchasing account, then open Toolbox Suite → Subscription → Restore Purchase.</span><span data-lang="ar">سجّل الدخول إلى Microsoft Store بالحساب المستخدم في الشراء، ثم افتح Toolbox Suite ← الاشتراك ← استعادة الشراء.</span></p></section>
            <section className="supportItem"><h3><span data-lang="en">Manage subscription</span><span data-lang="ar">إدارة الاشتراك</span></h3><p><span data-lang="en">Use Toolbox Suite → Subscription → Manage Subscription, or Microsoft account Services & subscriptions.</span><span data-lang="ar">استخدم Toolbox Suite ← الاشتراك ← إدارة الاشتراك، أو صفحة الخدمات والاشتراكات في حساب Microsoft.</span></p></section>
            <section className="supportItem"><h3><span data-lang="en">Files and output</span><span data-lang="ar">الملفات والإخراج</span></h3><p><span data-lang="en">Confirm the selected input exists and choose an output folder where your Windows account has write permission.</span><span data-lang="ar">تأكد من وجود ملف الإدخال واختر مجلد إخراج يمتلك حساب Windows صلاحية الكتابة فيه.</span></p></section>
          </div>
          <h2><span data-lang="en">Subscription products</span><span data-lang="ar">منتجات الاشتراك</span></h2>
          <ul><li><strong>Toolbox Pro Monthly</strong> — Microsoft Store ID 9P4K5Z77Z30S.</li><li><strong>Toolbox Pro Annual</strong> — Microsoft Store ID 9P0BJR6OXTQ6.</li></ul>
          <p><span data-lang="en">Purchases, renewals, regional pricing, taxes, cancellations, and refunds are handled by Microsoft Store. Toolbox Suite does not process payment-card details directly.</span><span data-lang="ar">تتم عمليات الشراء والتجديد والأسعار الإقليمية والضرائب والإلغاء والاسترداد عبر Microsoft Store. لا يعالج Toolbox Suite بيانات بطاقات الدفع مباشرة.</span></p>
          <h2><span data-lang="en">If Pro is not active</span><span data-lang="ar">إذا لم يتم تفعيل Pro</span></h2>
          <ol data-lang="en"><li>Verify that Windows and Microsoft Store use the Microsoft account that purchased the subscription.</li><li>Check that the subscription is active in Microsoft account Services & subscriptions.</li><li>Restart Microsoft Store, then restart Toolbox Suite.</li><li>Use <strong>Restore Purchase</strong> from the Toolbox Suite subscription screen.</li></ol>
          <ol data-lang="ar"><li>تأكد من أن Windows وMicrosoft Store يستخدمان حساب Microsoft الذي اشترى الاشتراك.</li><li>تحقق من أن الاشتراك فعال في صفحة الخدمات والاشتراكات بحساب Microsoft.</li><li>أعد تشغيل Microsoft Store ثم Toolbox Suite.</li><li>استخدم <strong>استعادة الشراء</strong> من شاشة الاشتراك داخل Toolbox Suite.</li></ol>
          <h2><span data-lang="en">Application troubleshooting</span><span data-lang="ar">استكشاف أخطاء التطبيق</span></h2>
          <ul data-lang="en"><li>Install all pending Windows and Microsoft Store updates.</li><li>Retry with a local file and a writable local output folder.</li><li>Keep an original backup before large batch operations.</li><li>If the application cannot start, use Windows Settings → Apps → Toolbox Suite → Advanced options → Repair.</li></ul>
          <ul data-lang="ar"><li>ثبّت جميع تحديثات Windows وMicrosoft Store المعلقة.</li><li>أعد المحاولة باستخدام ملف محلي ومجلد إخراج محلي قابل للكتابة.</li><li>احتفظ بنسخة أصلية احتياطية قبل العمليات الكبيرة.</li><li>إذا تعذر تشغيل التطبيق، استخدم إعدادات Windows ← التطبيقات ← Toolbox Suite ← الخيارات المتقدمة ← إصلاح.</li></ul>
          <h2><span data-lang="en">Official product details</span><span data-lang="ar">بيانات المنتج الرسمية</span></h2>
          <p><span data-lang="en">Publisher: <strong>BIM Specialist Software</strong><br />Application: <strong>Toolbox Suite</strong><br />Microsoft Store product ID: <strong>9N8MJLGKWWFG</strong><br />Current release: <strong>7.0</strong></span><span data-lang="ar">الناشر: <strong>BIM Specialist Software</strong><br />التطبيق: <strong>Toolbox Suite</strong><br />معرّف Microsoft Store: <strong>9N8MJLGKWWFG</strong><br />الإصدار الحالي: <strong>7.0</strong></span></p>
          <h2><span data-lang="en">Privacy</span><span data-lang="ar">الخصوصية</span></h2>
          <p><span data-lang="en">For local file processing and Microsoft Store licensing details, read the </span><span data-lang="ar">لتفاصيل معالجة الملفات محليًا وترخيص Microsoft Store، اقرأ </span><Link className="backLink" href="/privacy"><span data-lang="en">Toolbox Suite Privacy Policy</span><span data-lang="ar">سياسة خصوصية Toolbox Suite</span></Link>.</p>
        </div>
      </article>
    </main>
  );
}
