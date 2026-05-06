"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Ingredients from "../../components/ingredients";
import { routing } from "@/i18n/routing";
import { Link, usePathname, useRouter } from "@/i18n/routing";

import {
  ChevronDown,
  Heart,
  Leaf,
  Shield,
  Star,
  Users,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Languages,
} from "lucide-react";

export default function NourishResilienceLanding() {
  const t = useTranslations();
  const locale = useLocale();
  const imgSuffix = locale === "fr" ? "_FR" : "";
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const router = useRouter();

  const [bottleImage, setBottleImage] = useState(
    "/Canversion.webp"
  );
  const [trademarkSymbol, setTrademarkSymbol] = useState<React.ReactNode>(
    locale === "fr" ? null : <sup>®</sup>
  );

  useEffect(() => {
    if (locale === "fr") {
      setTrademarkSymbol(null);
    } else if (typeof window !== "undefined" && window.location.hostname === "nourish-resilience.com") {
      setBottleImage("/USversion.webp");
      setTrademarkSymbol("®");
    } else {
      setTrademarkSymbol(<sup>®</sup>);
    }
  }, [locale]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "introduction",
        "benefits",
        "fuelingRecovery",
        "ingredients",
        "recipes",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <div className="hidden md:flex space-x-6">
                {[
                  { id: "hero", label: t("Navbar.home") },
                  { id: "ingredients", label: t("Navbar.ingredients") },
                  { id: "recipes", label: t("Navbar.recipes") },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-base font-lg transition-colors hover:text-black ${
                      activeSection === item.id
                        ? "text-black-700"
                        : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  href="/khamba"
                  className="text-base font-lg transition-colors hover:text-black text-gray-600"
                >
                  {t("Navbar.story")}
                </Link>
              </div>
              
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
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full min-h-[600px] 2xl:min-h-[720px] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/pinkbg.webp"
          alt="Abstract soft pink and white flowing background"
          fill
          className="object-cover object-left"
          priority
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/5 via-black/30 to-black/5" />

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 pt-24 pb-20 text-center text-white">
          <div className="flex animate-fade-in-up flex-col items-center space-y-8 md:space-y-14">
            <div className="space-y-4">
              <h1
                className="text-5xl font-black tracking-tighter text-white drop-shadow-lg md:text-6xl lg:text-7xl pt-8"
                style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
              >
                {t("Hero.title")}{trademarkSymbol}
              </h1>
              <h2 className="text-3xl font-black tracking-tighter text-white drop-shadow-lg md:text-4xl lg:text-5xl" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}>{t("Hero.comingSoon")}</h2>
              <p
              className="text-xl text-white drop-shadow-md md:text-2xl lg:text-3xl font-semibold"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
            >
              {t("Hero.availableThrough")}
            </p>
            </div>

            <div className="group relative mx-auto flex w-full max-w-[32rem] justify-center md:max-w-[48rem]">
              <div className="absolute -inset-6 animate-pulse rounded-full bg-[#931d33]/30 blur-2xl" />
              <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Image
                  src={bottleImage}
                  alt={t("Hero.bottleAlt")}
                  width={1080}
                  height={1080}
                  className="w-40 transform-gpu object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 sm:w-48 md:w-56"
                  priority
                />
              </div>
            </div>

            <p
              className="text-xl text-white drop-shadow-md md:text-2xl lg:text-3xl font-semibold"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
            >
              {t("Hero.futureStartsHere")}
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#d81177] mb-8">
                {t("Benefits.title")}
              </h2>

              <ul className="space-y-4">
                <p className="text-lg text-gray-600 max-w-2xl mx-0 font-bold">
                  {t.rich("Benefits.idealFor", {
                    trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>
                  })}
                </p>
                {[
                  t("Benefits.benefit1"),
                  t("Benefits.benefit2"),
                  t("Benefits.benefit3")
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-[#8bc345] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-br from-[#fbe4f2] to-[#fff4fa] p-6 rounded-xl shadow-sm  ">
                <p className="text-base text-gray-700 leading-relaxed">
                  {t.rich("Benefits.description", {
                    trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>
                  })}
                </p>
              </div>
            </div>
            <div className="relative w-full h-full min-h-[24rem] flex items-stretch">
              <Image
                src="/pinkladies.webp"
                alt="Woman in peaceful meditation"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>


      {/* what is nourish resilience */}
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-16 font-sans">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d81177] mb-6">
            {t.rich("WhatIs.title", {
              trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>
            })}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.rich("WhatIs.description", {
              trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>,
              b: (chunks) => <span className="font-semibold text-gray-800">{chunks}</span>
            })}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t.rich("WhatIs.flavor", {
              trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>
            })}
          </p>
          <br />
          <div className="flex flex-col md:flex-row items-center gap-8">
            <a
              href="https://nhplab.com"
              target="_blank"
              className="image-shadow-button shrink-0"
            >
              <Image
                src={`/ISO 17025${imgSuffix}.png`}
                alt="laboratory ISO 17025 certification"
                width={300}
                height={237}
                className="mx-auto"
              />
            </a>
            <p className="text-lg text-gray-700 leading-relaxed text-left">
              {t.rich("WhatIs.qualityCommitment", {
                trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Story Preview Section */}
      <section className="py-20 bg-white border-t border-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#8bc345] mb-4">
                {t("Story.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.rich("Story.subtitle", {
                  trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>,
                })}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-center justify-center">
                <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full shadow-2xl overflow-hidden mb-4">
                  <Image
                    src="/baljit.webp"
                    alt={t("Story.drName")}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-[#d81177] tracking-wide">
                    {t("Story.drName")}
                  </p>
                  <p className="text-xs text-gray-700">
                    {t("Story.drTitles")}
                  </p>
                </div>
              </div>

              <div className="space-y-8 text-center lg:text-left">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.rich("Story.introText", {
                      i: (chunks) => <i>{chunks}</i>,
                    })}
                  </p>
                </div>
                
                <div className="pt-2">
                  <Link
                    href="/khamba"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#d81177] rounded-full hover:bg-[#b00d60] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {t("Story.readMore")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Ingredients Section */}
      <section
        id="ingredients"
        className="py-20 bg-gradient-to-br from-[#fbe4f2] to-[#fff4fa]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#8bc345] mb-4">
              {t("Ingredients.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("Ingredients.subtitle")}
            </p>
          </div>

          <Ingredients />
        </div>
      </section>
      {/* Certification Achievement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-[#fbe4f2] to-[#fff4fa] text-[#d81177] rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("Certifications.title")}
            </h2>
            <p className="text-lg text-black/90 max-w-3xl mx-auto mb-8">
              {t("Certifications.description")}
            </p>
            <div className="flex flex-wrap justify-evenly items-center gap-6 md:gap-12 mt-8">
              <Image src={`/cGMP${imgSuffix}.png`} alt="cGMP" width={80} height={80} className="object-contain" />
              <Image src={`/GMO${imgSuffix}.png`} alt="Non-GMO" width={80} height={80} className="object-contain" />
              <Image src="/Vegan.png" alt="Vegan" width={80} height={80} className="object-contain" />
              <Image src="/Gluten.png" alt="Gluten Free" width={80} height={80} className="object-contain" />
              <Image src={`/Canada${imgSuffix}.png`} alt="Made in Canada" width={80} height={80} className="object-contain" />
            </div>
          </div>
        </div>
      </section>
      {/* Recipes Section */}
      <section id="recipes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#d81177] mb-4">
              {t("Recipes.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t.rich("Recipes.description", {
                trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#fbe4f2] to-[#fff4fa] rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-64">
                <Image
                  src="/latte.webp"
                  alt={t("Recipes.smoothie.title")}
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="p-8 pt-6">
                <h3 className="text-2xl font-bold text-[#8bc345] mb-4">
                  {t("Recipes.smoothie.title")}
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>{t("Recipes.smoothie.prepTime")}</strong>
                  </p>
                  <div>
                    <strong>{t("Recipes.smoothie.ingredientsLabel")}</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {["0", "1", "2", "3", "4", "5"].map((i) => (
                        <li key={i}>{t.rich(`Recipes.smoothie.ingredients.${i}`, {
                          trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>
                        })}</li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <strong>{t("Recipes.smoothie.instructions")}</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fbe4f2] to-[#fff4fa] rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-64">
                <Image
                  src="/coffee.webp"
                  alt={t("Recipes.latte.title")}
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="p-8 pt-6">
                <h3 className="text-2xl font-bold text-[#8bc345] mb-4">
                  {t("Recipes.latte.title")}
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>{t("Recipes.latte.prepTime")}</strong>
                  </p>
                  <div>
                    <strong>{t("Recipes.latte.ingredientsLabel")}</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {["0", "1", "2"].map((i) => (
                        <li key={i}>{t.rich(`Recipes.latte.ingredients.${i}`, {
                          trademarkSymbol: (chunks) => <>{chunks}{trademarkSymbol}</>
                        })}</li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <strong>{t("Recipes.latte.instructions")}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA For Healthcare Professionals Section */}
      <section className="bg-white font-sans pb-16">
        <div className="bg-gradient-to-br from-pink-50 to-rose-100 container mx-auto rounded-2xl p-10 text-center shadow-xl">
            <div className="flex flex-col items-center justify-center gap-8 text-gray-800">
              <h3 className="text-3xl font-bold text-[#d81177]">
                {t("Professionals.title")}
              </h3>
              <div className="grid md:grid-cols-2 gap-10 md:gap-6 items-start w-full max-w-4xl">
                {/* NFH Column */}
                <div className="flex flex-col items-center justify-start text-center gap-4 h-full">
                  <p className="text-lg">
                    {t("Professionals.nfhText")}
                  </p>
                  <a href="https://nfh.ca" target="_blank" rel="noopener noreferrer" className="my-2 transition-transform hover:scale-105">
                    <Image
                      src="/nfh.png"
                      alt="NFH Logo"
                      width={150}
                      height={75}
                      className="object-contain"
                    />
                  </a>
                  <div className="text-lg space-y-1 font-medium">
                    <p>
                      <a href="tel:1-866-510-3123" className="hover:underline">
                        1-866-510-3123
                      </a>
                    </p>
                    <p>
                      <a href="mailto:info@nfh.ca" className="hover:underline">
                        info@nfh.ca
                      </a>
                    </p>
                  </div>
                </div>

                {/* Fullscript Column */}
                <div className="flex flex-col items-center justify-between text-center gap-4 h-full md:border-l md:border-rose-200 md:pl-6">
                  <p className="text-lg">
                    {t("Professionals.fullscriptText")}
                  </p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="my-2 transition-transform hover:scale-105">
                    <Image
                      src="/fullscript-logo.png"
                      alt="Fullscript Logo"
                      width={150}
                      height={50}
                      className="object-contain"
                    />
                  </a>
                  <p className="text-base font-medium text-gray-600">
                    {t("Professionals.availableFall")}
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-6 bg-[#d81177] text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center text-base md:text-lg font-semibold uppercase tracking-wide gap-4 md:gap-6">
            <span>{t("Banner.text1")}</span>
            <span>{t("Banner.text2")}</span>
            <span>{t("Banner.text3")}</span>
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
          &copy; {new Date().getFullYear()} Vitazan.com. {t("Footer.rights")}
        </div>
      </footer>
    </div>
  );
}
