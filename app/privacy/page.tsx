import Link from "next/link";
import LanguageSwitcher from "../language-switcher";

export const metadata = {
  title: "Toolbox Suite Privacy Policy",
  description: "Privacy policy for Toolbox Suite by BIM Specialist Software.",
};

export default function PrivacyPage() {
  return (
    <main>
      <header className="siteHeader">
        <Link className="brand" href="/" aria-label="BIM Specialist Software home"><span className="brandMark">B</span><span><strong>BIM</strong><small>Specialist</small></span></Link>
        <nav aria-label="Main navigation">
          <Link href="/"><span data-lang="en">Product</span><span data-lang="ar">المنتج</span></Link>
          <Link href="/support"><span data-lang="en">Support</span><span data-lang="ar">الدعم</span></Link>
          <LanguageSwitcher />
        </nav>
      </header>
      <article className="documentShell">
        <Link className="backLink" href="/"><span data-lang="en">← Toolbox Suite</span><span data-lang="ar">Toolbox Suite ←</span></Link>
        <header className="documentHeader">
          <div className="eyebrow"><span data-lang="en">EFFECTIVE AUGUST 15, 2026</span><span data-lang="ar">سارية من 15 أغسطس 2026</span></div>
          <h1><span data-lang="en">Privacy Policy</span><span data-lang="ar">سياسة الخصوصية</span></h1>
          <p><span data-lang="en">This policy explains how Toolbox Suite handles information when you use the Windows application.</span><span data-lang="ar">توضح هذه السياسة كيفية تعامل Toolbox Suite مع المعلومات عند استخدام تطبيق Windows.</span></p>
        </header>
        <div className="document">
          <p className="notice"><span data-lang="en"><strong>Summary:</strong> Toolbox Suite processes the files you select locally on your Windows device. The application does not upload your working files to BIM Specialist Software servers by default.</span><span data-lang="ar"><strong>الخلاصة:</strong> يعالج Toolbox Suite الملفات التي تختارها محليًا على جهاز Windows. ولا يرفع التطبيق ملفات العمل إلى خوادم BIM Specialist Software افتراضيًا.</span></p>
          <h2><span data-lang="en">1. Information processed by Toolbox Suite</span><span data-lang="ar">1. المعلومات التي يعالجها Toolbox Suite</span></h2>
          <p><span data-lang="en">Toolbox Suite processes documents and files only when you select them or ask the application to perform an operation. This processing takes place locally on your Windows device.</span><span data-lang="ar">يعالج Toolbox Suite المستندات والملفات فقط عندما تختارها أو تطلب من التطبيق تنفيذ عملية عليها. وتتم هذه المعالجة محليًا على جهاز Windows.</span></p>
          <h2><span data-lang="en">2. Local application data</span><span data-lang="ar">2. بيانات التطبيق المحلية</span></h2>
          <p><span data-lang="en">The application may store preferences such as language, appearance, recent tools, favorites, output folders, interface settings, and a cached Microsoft Store entitlement status in your local application data folder. This data remains on your device and supports normal application operation.</span><span data-lang="ar">قد يخزن التطبيق تفضيلات مثل اللغة والمظهر والأدوات الحديثة والمفضلة ومجلدات الإخراج وإعدادات الواجهة وحالة ترخيص Microsoft Store المخزنة مؤقتًا داخل مجلد بيانات التطبيق المحلي. تبقى هذه البيانات على جهازك وتدعم التشغيل الطبيعي للتطبيق.</span></p>
          <h2><span data-lang="en">3. Microsoft Store services</span><span data-lang="ar">3. خدمات Microsoft Store</span></h2>
          <p><span data-lang="en">Toolbox Suite uses Microsoft Store services for distribution, subscription purchases, purchase restoration, and license verification. Microsoft may process Microsoft account, payment, transaction, device, and licensing information according to Microsoft’s own terms and privacy statement. BIM Specialist Software does not receive your full payment-card information.</span><span data-lang="ar">يستخدم Toolbox Suite خدمات Microsoft Store للتوزيع وشراء الاشتراك واستعادة المشتريات والتحقق من الترخيص. وقد تعالج Microsoft بيانات الحساب والدفع والمعاملات والجهاز والترخيص وفق شروطها وسياسة الخصوصية الخاصة بها. ولا تتلقى BIM Specialist Software بيانات بطاقة الدفع الكاملة.</span></p>
          <h2><span data-lang="en">4. File transmission</span><span data-lang="ar">4. نقل الملفات</span></h2>
          <p><span data-lang="en">Toolbox Suite does not intentionally transmit your selected working files to BIM Specialist Software servers. If a future feature requires online processing, this policy and the feature interface will be updated before that processing is introduced.</span><span data-lang="ar">لا يرسل Toolbox Suite ملفات العمل التي تختارها عمدًا إلى خوادم BIM Specialist Software. وإذا تطلبت ميزة مستقبلية معالجة عبر الإنترنت، فسيتم تحديث هذه السياسة وواجهة الميزة قبل تقديم تلك المعالجة.</span></p>
          <h2><span data-lang="en">5. Data retention and deletion</span><span data-lang="ar">5. الاحتفاظ بالبيانات وحذفها</span></h2>
          <p><span data-lang="en">Locally stored preferences remain on your device until you change them, reset the application, clear its application data, or uninstall it. Microsoft Store transaction and licensing records are controlled by Microsoft.</span><span data-lang="ar">تبقى التفضيلات المخزنة محليًا على جهازك حتى تقوم بتغييرها أو إعادة ضبط التطبيق أو مسح بياناته أو إلغاء تثبيته. وتخضع سجلات معاملات Microsoft Store والترخيص لإدارة Microsoft.</span></p>
          <h2><span data-lang="en">6. Children’s privacy</span><span data-lang="ar">6. خصوصية الأطفال</span></h2>
          <p><span data-lang="en">Toolbox Suite is a general productivity application and is not directed specifically to children. BIM Specialist Software does not knowingly collect children’s personal information through the application.</span><span data-lang="ar">Toolbox Suite تطبيق إنتاجية عام وغير موجه خصيصًا للأطفال. ولا تجمع BIM Specialist Software عن علم معلومات شخصية للأطفال من خلال التطبيق.</span></p>
          <h2><span data-lang="en">7. Security</span><span data-lang="ar">7. الأمان</span></h2>
          <p><span data-lang="en">We design Toolbox Suite to minimize data collection and keep file processing local. No software environment can be guaranteed completely secure, and users should maintain suitable backups of important files.</span><span data-lang="ar">نصمم Toolbox Suite لتقليل جمع البيانات والحفاظ على معالجة الملفات محليًا. ولا يمكن ضمان الأمان الكامل لأي بيئة برمجية، لذا ينبغي للمستخدمين الاحتفاظ بنسخ احتياطية مناسبة من الملفات المهمة.</span></p>
          <h2><span data-lang="en">8. Changes to this policy</span><span data-lang="ar">8. التغييرات على هذه السياسة</span></h2>
          <p><span data-lang="en">We may update this policy when the application or applicable requirements change. The effective date at the top of this page identifies the current version.</span><span data-lang="ar">قد نقوم بتحديث هذه السياسة عند تغير التطبيق أو المتطلبات المعمول بها. ويحدد تاريخ السريان أعلى الصفحة النسخة الحالية.</span></p>
          <h2><span data-lang="en">9. Publisher</span><span data-lang="ar">9. الناشر</span></h2>
          <p><span data-lang="en">This policy is published by <strong>BIM Specialist Software</strong> for Toolbox Suite, Microsoft Store product ID <strong>9N8MJLGKWWFG</strong>. Support requests may be submitted through the official </span><span data-lang="ar">تنشر <strong>BIM Specialist Software</strong> هذه السياسة لبرنامج Toolbox Suite، ومعرّف المنتج في Microsoft Store هو <strong>9N8MJLGKWWFG</strong>. ويمكن إرسال طلبات الدعم من خلال </span><Link className="backLink" href="/support"><span data-lang="en">Toolbox Suite support page</span><span data-lang="ar">صفحة دعم Toolbox Suite الرسمية</span></Link>.</p>
        </div>
      </article>
    </main>
  );
}
