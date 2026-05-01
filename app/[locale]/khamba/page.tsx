"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import {
  ChevronLeft,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Languages,
} from "lucide-react";

export default function KhambaPage() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [bottleImage, setBottleImage] = useState("/Canversion.webp");
  const [trademarkSymbol, setTrademarkSymbol] = useState<React.ReactNode>(
    <sup>®</sup>
  );

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.hostname === "nourish-resilience.com"
    ) {
      setBottleImage("/USversion.webp");
      setTrademarkSymbol("®");
    }
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbe4f2] to-[#fff4fa]">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link
              href="https://vitazan.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vitazan homepage"
              className="inline-block"
            >
              <Image
                src="/vitazan.png"
                alt="Vitazan Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-base font-lg text-gray-600 hover:text-black transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {t("Navbar.home")}
              </Link>

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-pink-200 text-sm font-medium text-[#d81177] hover:bg-pink-50 transition-colors"
              >
                <Languages className="w-4 h-4" />
                <span>{locale === "fr" ? "EN" : "FR"}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Story Content */}
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[#8bc345] mb-4">
                {t("Story.title")}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.rich("Story.subtitle", {
                  trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>,
                })}
              </p>
            </div>

            {/* Grid with Image and Intro Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="flex flex-col items-center justify-start h-full">
                <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full shadow-2xl overflow-hidden mb-4">
                  <Image
                    src="/baljit.webp"
                    alt={t("Story.drName")}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nameplate Below Image */}
                <div className="px-5 py-1 text-center">
                  <p className="text-base font-semibold text-[#d81177] tracking-wide">
                    {t("Story.drName")}
                  </p>
                  <p className="text-xs text-gray-700">
                    {t("Story.drTitles")}
                  </p>
                </div>
              </div>

              {/* Content — everything shown, no accordion */}
              <div className="space-y-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.rich("Story.introText", {
                      i: (chunks) => <i>{chunks}</i>,
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Expanded Full-Width Story — always visible */}
            <div className="mt-12">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.rich("Story.expandedText1", {
                      trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>,
                    })}
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.rich("Story.expandedText2", {
                      trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>,
                    })}
                  </p>

                  <div className="border-l-4 border-[#8bc345] pl-6 bg-purple-50 p-4 rounded-r-lg">
                    <footer className="mt-3 text-base text-[#d81177] font-medium">
                      {t("Story.drName")}, {t("Story.drTitles")}
                      <br />
                      <span className="text-black">
                        {t("Story.quoteFooter")}
                      </span>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-50 text-gray-800 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="https://vitazan.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Vitazan website"
              className="inline-block"
            >
              <Image
                src="/vitazan.png"
                alt="Vitazan Logo"
                width={160}
                height={40}
                className="w-auto h-10 object-contain"
                priority
              />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-base text-gray-700 flex flex-col items-start md:items-end gap-2 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:info@vitazan.com"
                className="hover:text-[#d81177] transition-colors"
              >
                info@vitazan.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a
                href="tel:1-888-863-9274"
                className="hover:text-[#d81177] transition-colors"
              >
                1-888-863-9274
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/vitazanprofessional/"
                aria-label="Instagram"
                className="text-gray-700 hover:text-[#d81177] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/vitazanpro/"
                aria-label="Facebook"
                className="text-gray-700 hover:text-[#d81177] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vitazan-professional-36139514a/"
                aria-label="Linkedin"
                className="text-gray-700 hover:text-[#d81177] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center text-xs text-gray-600 border-t border-rose-200 pt-6">
          &copy; {new Date().getFullYear()} Vitazan.com.{" "}
          {t("Footer.rights")}
        </div>
      </footer>
    </div>
  );
}
