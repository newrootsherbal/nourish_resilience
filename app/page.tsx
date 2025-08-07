"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Ingredients from "../components/ingredients";

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
  ChevronRight,
  Linkedin,
} from "lucide-react";

export default function NourishResilienceLanding() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showMoreStory, setShowMoreStory] = useState(false);
  const [showMoreRecovery, setShowMoreRecovery] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "introduction",
        "story",
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
                src="/vitazan.png" // Replace with your actual file name (e.g., favicon_io/logo.png)
                alt="Vitazan Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <div className="hidden md:flex space-x-6">
              {[
                { id: "hero", label: "Home" },
                { id: "benefits", label: "Benefits" },
                { id: "story", label: "Story" },
                { id: "ingredients", label: "Ingredients" },
                { id: "recipes", label: "Recipes" },
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

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 pt-20 pb-32 text-center text-white">
          <div className="flex animate-fade-in-up flex-col items-center space-y-8 md:space-y-10">
            <div className="space-y-4">
              <h1
                className="text-5xl font-black tracking-tighter text-white drop-shadow-lg md:text-6xl lg:text-7xl"
                style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
              >
                Nourish Resilience ®
              </h1>
            </div>

            <div className="group relative mx-auto w-52 sm:w-64 md:w-80">
              <div className="absolute -inset-4 animate-pulse rounded-full bg-[#931d33]/30 blur-2xl" />
              <Image
                src="/3173-Nourish-Resilience-476g.png"
                alt="Nourish Resilience Bottle"
                width={520}
                height={520}
                className="transform-gpu object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            <p
              className="max-w-xl text-xl text-white drop-shadow-md md:text-2xl lg:text-3xl font-semibold"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
            >
              Your Next Chapter of Healing Starts Here
            </p>
          </div>

          <button
            className="group absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer focus:outline-none"
            onClick={() => scrollToSection("benefits")}
            aria-label="Scroll to benefits"
            type="button"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="font-medium text-white opacity-70 transition-opacity group-hover:opacity-100">
                Scroll to explore
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/80 transition-colors group-hover:border-white">
                <ChevronDown className="h-5 w-5 animate-bounce text-white" />
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#d81177] mb-8">
                Who Can Benefit?
              </h2>

              <ul className="space-y-4">
                <p className="text-lg text-gray-600 max-w-2xl mx-0 font-bold">
                  Nourish Resilience® is ideal for:
                </p>
                {[
                  "Women using holistic nutritional supplementation as part of their recovery process",
                  "Individuals looking for a nutritional beverage for wellbeing",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-[#8bc345] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-br from-[#fbe4f2] to-[#fff4fa] p-6 rounded-xl shadow-sm  ">
                <p className="text-base text-gray-700 leading-relaxed">
                  Nourish Resilience® complements a Mediterranean-style diet and
                  works synergistically with holistic practices like yoga,
                  mindfulness, acupuncture, and strength training.
                  <br className="hidden sm:block" />
                  <br />
                  It’s your trusted partner for functional nutrition developed
                  to assist women in their recovery journey following serious
                  illness. Ask your naturopathic doctor, integrative healthcare
                  provider, or functional-medicine practitioner about how
                  Nourish Resilience® can become a key part of your long-term
                  wellness journey.
                  <br className="hidden sm:block" />
                  <br />
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

      {/* Dr. Khamba's Story Section */}
      <section
        id="story"
        className="py-20 bg-gradient-to-br from-[#fbe4f2] to-[#fff4fa]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#8bc345] mb-4">
                Dr. Khamba's Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A personal story of resilience, recovery, and the creation of
                Nourish Resilience®
              </p>
            </div>

            {/* Grid with Image and Intro Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="flex flex-col items-center justify-start h-full">
                {/* Larger Profile Image */}
                <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full shadow-2xl overflow-hidden mb-4">
                  <Image
                    src="/baljit.webp"
                    alt="Dr. Baljit Khamba"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nameplate Below Image */}
                <div className=" px-5 py-1 text-center">
                  <p className="text-base font-semibold text-[#d81177] tracking-wide">
                    Dr. Baljit Khamba
                  </p>
                  <p className="text-xs text-gray-700">ND, MPH, EdD</p>
                </div>
              </div>

              {/* Initial Content + Button */}
              <div className="space-y-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    As a BRCA1-positive survivor of triple-negative breast
                    cancer, I underwent both a double mastectomy and bilateral
                    oophorectomy in my early 40s. This experience was not only
                    physically and emotionally transformative but also
                    professionally catalytic. Throughout my recovery, I was
                    determined to support my body using a blend of
                    evidence-based naturopathic medicine and the traditional
                    healing wisdom of my South Asian roots.
                  </p>
                </div>

                <button
                  onClick={() => setShowMoreStory(!showMoreStory)}
                  className="inline-flex items-center gap-2 text-[#d81177] hover:text-[#d3a1ca] font-medium transition-colors group"
                >
                  {showMoreStory ? "Read Less" : "Read More About Her Journey"}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                      showMoreStory ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Expanded Full-Width Story */}
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                showMoreStory
                  ? "max-h-[2000px] opacity-100 mt-12"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I began crafting daily blends incorporating many of the
                    ingredients now found in Nourish Resilience® — including
                    reishi, fermented ginger, black cumin seed, dandelion root,
                    ashwagandha, and chai-inspired spices like cinnamon and
                    cardamom. These nutrients and herbs supported me in managing
                    post-surgical fatigue, hormonal fluctuations,
                    detoxification, and the emotional and metabolic aftermath of
                    cancer treatment.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nourish Resilience® emerged from this lived experience — not
                    just as a product, but as a deeply intentional formulation
                    designed to support recovery, resilience, and vitality in
                    others. It reflects the science of nutritional therapeutics,
                    the wisdom of ancestral medicine, and the realities of life
                    after cancer. I'm proud to offer it as part of a broader
                    commitment to helping women feel strong, whole, and
                    nourished — from the cellular level outward.
                  </p>

                  <div className="border-l-4 border-[#8bc345] pl-6 bg-purple-50 p-4 rounded-r-lg">
                    {/* <p className="text-purple-800 font-medium italic">
                "Every ingredient was chosen not just for its scientific
                backing, but for its ability to honor the body's innate
                wisdom to heal and thrive."
              </p> */}
                    <footer className="mt-3 text-base text-[#d81177] font-medium">
                      Dr. Baljit Khamba, ND, MPH, EdD
                      <br />
                      <span className="text-black">
                        Breast cancer survivor &amp; thriver
                      </span>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what is nourish resilience */}
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-16 font-sans">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d81177] mb-6">
            What is Nourish Resilience®
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold text-gray-800">
              Nourish Resilience®
            </span>{" "}
            is a clinically informed, organic vegan protein supplement developed
            to assist women in their recovery journey following serious illness,
            including breast cancer. This functional nutrition formula blends
            bioavailable proteins, powerful antioxidants, adaptogenic medicinal
            mushrooms, fermented botanicals, and gut-supportive prebiotics —each
            selected as part of a holistic nutrition approach.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            With a comforting chai-inspired flavour featuring cardamom and
            cocoa, Nourish Resilience® can be enjoyed warm or iced as part of
            your daily self-care ritual.
          </p>
          <br />
          <p className="text-lg text-gray-700 leading-relaxed">
            Vitazan Professional is committed to providing clean, laboratory
            verified products. Our products are made in a certified cGMP
            facility and tested in an on-site independently managed ISO-17025
            certified lab. Every lot of Nourish Resilience® goes through a
            series of testing including pesticide and heavy metal testing.
          </p>
          <Image
            src="/ISO 17025.png"
            alt="laboratory ISO 17025 certification"
            width={400}
            height={200}
            className="mx-auto mt-8 mb-6"
          />
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
              Powerful Ingredients for Healing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each ingredient is carefully selected for its unique healing
              properties and synergistic benefits
            </p>
          </div>

          <Ingredients />

          {/* <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-purple-200 mt-12">
            <p className="text-base text-gray-600">
              <strong>Quality Assurance:</strong> Certified organic, non-GMO,
              and crafted in a third-party cGMP facility to ensure the highest
              standards of purity and potency.
            </p>
          </div> */}
        </div>
      </section>
      {/* Certification Achievement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-[#fbe4f2] to-[#fff4fa] text-[#d81177] rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certified Excellence in Every Scoop
            </h2>
            <p className="text-lg text-black/90 max-w-3xl mx-auto mb-8">
              All carefully selected ingredients are certified non-GMO and organic, manufactured in our certified cGMP facility and tested in an ISO 17025 accredited laboratory to meet the unique needs of post cancer physiology.
            </p>
            <div className="flex flex-wrap justify-evenly items-center gap-6 md:gap-12 mt-8">
              <Image
                src="/cGMP.png"
                alt="USDA Organic Certified"
                width={80}
                height={80}
                className="object-contain"
              />
              <Image
                src="/GMO.png"
                alt="Non-GMO Certified"
                width={80}
                height={80}
                className="object-contain"
              />
              <Image
                src="/Vegan.png"
                alt="cGMP Certified"
                width={80}
                height={80}
                className="object-contain"
              />
              <Image
                src="/Gluten.png"
                alt="ISO 17025 Accredited"
                width={80}
                height={80}
                className="object-contain"
              />
              <Image
                src="/Canada.png"
                alt="3rd Party Lab Tested"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Recipes Section */}
      <section id="recipes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#d81177] mb-4">
              Simple Ways to Nourish Daily
            </h2>
            <p className="text-lg text-gray-600">
              Every step you take toward wellness matters. Nourish Resilience®
              brings you clean, organic ingredients designed to strengthen your
              body and spirit. These simple, nourishing recipes fit effortlessly
              into your new wellness routine — helping you rise stronger, every
              day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#fbe4f2] to-[#fff4fa] rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-64">
                <Image
                  src="/latte.webp"
                  alt="Nourish Chai Smoothie"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="p-8 pt-6">
                <h3 className="text-2xl font-bold text-[#8bc345] mb-4">
                  Nourish Chai Smoothie
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Prep time:</strong> 5 minutes
                  </p>
                  <div>
                    <strong>Ingredients:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>1 scoop Nourish Resilience®</li>
                      <li>1 cup unsweetened coconut milk</li>
                      <li>1/2 frozen banana</li>
                      <li>1/4 cup frozen berries</li>
                      <li>1 tablespoon ground flaxseed</li>
                      <li>1/2 teaspoon honey</li>
                    </ul>
                  </div>
                  <p>
                    <strong>Instructions:</strong> Blend until creamy. Serve
                    chilled
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fbe4f2] to-[#fff4fa] rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-64">
                <Image
                  src="/coffee.webp"
                  alt="Warming Resilience Latte"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="p-8 pt-6">
                <h3 className="text-2xl font-bold text-[#8bc345] mb-4">
                  Warming Resilience Latte
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Prep time:</strong> 8 minutes
                  </p>
                  <div>
                    <strong>Ingredients:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>1 scoop Nourish Resilience®</li>
                      <li>1 cup heated oat milk or almond milk</li>
                      <li>1/2 teaspoon honey (optional)</li>
                    </ul>
                  </div>
                  <p>
                    <strong>Instructions:</strong> Stir or froth well. Sprinkle
                    with cinnamon or cocoa powder before serving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Banner */}
      <section className="py-6 bg-[#d81177] text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-base md:text-lg font-semibold uppercase tracking-wide gap-4 md:gap-6">
            <span className="w-full md:text-left">Rebuild Your Strength</span>
            <span className="w-full">Reconnect with Your Vitality</span>
            <span className="w-full md:text-right">Nourish your body</span>
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
          &copy; {new Date().getFullYear()} Vitazan.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
