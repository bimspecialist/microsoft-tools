"use client";

import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    const saved = localStorage.getItem("toolbox-language");
    const next = saved === "ar" || (!saved && navigator.language.startsWith("ar")) ? "ar" : "en";
    apply(next);
  }, []);

  function apply(next: "en" | "ar") {
    setLang(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.language = next;
    localStorage.setItem("toolbox-language", next);
  }

  return (
    <div className="languageSwitch" aria-label={lang === "ar" ? "اللغة" : "Language"}>
      <button type="button" className={lang === "en" ? "active" : ""} onClick={() => apply("en")} aria-pressed={lang === "en"}>EN</button>
      <button type="button" className={lang === "ar" ? "active" : ""} onClick={() => apply("ar")} aria-pressed={lang === "ar"}>عربي</button>
    </div>
  );
}
