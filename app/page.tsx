"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-50">
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
                src="/vitazan.jpg" // Replace with your actual file name (e.g., favicon_io/logo.png)
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
                { id: "introduction", label: "About" },
                { id: "story", label: "Story" },
                { id: "benefits", label: "Benefits" },
                { id: "fuelingRecovery", label: "Fueling Recovery" },
                { id: "ingredients", label: "Ingredients" },
                { id: "recipes", label: "Recipes" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-lg transition-colors hover:text-black ${
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
      <section id="hero" className="relative w-full overflow-hidden bg-white">
        {/* Background Image */}
        <div className="relative w-full h-screen blur-lg sm:blur-0">
          <Image
            src="/pinkbg.png"
            alt="Hero Banner"
            fill
            className="object-cover object-[center] md:object-[80%_center]"
            priority
          />

          {/* Subtle overlay for better text readability on right side only */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent" />
        </div>

        {/* Content Overlay - Right Side Only */}
        <div className="absolute inset-0 flex items-center justify-end px-6 md:px-6 lg:px-24">
          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
            {/* Vertical Stack - Text and Bottle */}
            <div className="mt-24 flex flex-col items-center  space-y-10 text-center ">
              {/* Text Content Section */}
              <div className="space-y-6">
                {/* Main Heading */}
                <div className="space-y-4 animate-fade-in-up">
                  <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[0.8] tracking-tight drop-shadow-2xl">
                    <span className="text-black sm:text-[#931d33] transition-colors duration-500">
                      Nourish Resilience ®
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <div className="relative animate-fade-in-up delay-200">
                    <p className="text-xl text-black sm:text-[#931d33] md:text-2xl lg:text-3xl tracking-wide drop-shadow-lg transition-colors duration-500">
                      Fuel Your Recovery
                    </p>
                  </div>
                </div>

                {/* Trust Indicators */}
              </div>

              {/* Bottle Image Section */}
              <div className="relative group mt-8">
                {/* Decorative glow effects */}
                <div className="absolute -top-6 -right-6 w-24 h-24  blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#ff69b4]/30 rounded-full blur-xl" />

                {/* Bottle container with glass morphism effect */}
                <div className="relative">
                  <div className="absolute inset-0  " />
                  <div className="relative ">
                    <Image
                      src="/bottle.png"
                      alt="Nourish Resilience Bottle"
                      width={480}
                      height={480}
                      className="object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                      priority
                    />
                  </div>

                  {/* Floating elements around bottle */}
                  <div className="absolute -top-3 -left-3 w-2 h-2 bg-white/60 rounded-full animate-pulse" />

                  <div className="absolute top-1/3 -right-6 w-1 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer group"
          onClick={() => scrollToSection?.("introduction")}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-white font-medium opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-sm">
              Scroll to explore
            </span>
            <div className="p-2 rounded-full  group-hover:border-white transition-colors backdrop-blur-sm">
              <ChevronDown className="w-5 h-5 text-white animate-bounce" />
            </div>
          </div>
        </div>

        {/* Floating decorative elements - positioned on right side only */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-white/40 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-[#ff69b4]/60 rounded-full opacity-40 animate-bounce" />
        <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-white/30 rounded-full opacity-50" />
      </section>

      <section id="introduction" className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d81177] leading-snug sm:leading-tight">
                Your Next Chapter of Healing Starts Here
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                At Vitazan, we believe that the journey to wellness doesn’t end
                with the completion of treatment — it's a stepping stone to your
                next chapter.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Nourish Resilience® was born from a naturopathic doctor's
                personal experience: a cancer diagnosis that led to a deeper
                understanding of healing, nutrition, and community.
              </p>
            </div>

            {/* Image */}

            <div className="relative">
              <Image
                src="/img1.png?height=600&width=500"
                alt="Woman in peaceful meditation"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Dr. Khamba's Story Section */}
      <section
        id="story"
        className="py-20 bg-gradient-to-r from-purple-50 to-orange-50"
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
                Nourish Resilience™
              </p>
            </div>

            {/* Grid with Image and Intro Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="flex flex-col items-center justify-start h-full">
                {/* Larger Profile Image */}
                <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full shadow-2xl overflow-hidden mb-4">
                  <Image
                    src="/baljit.jpg?height=600&width=600"
                    alt="Dr. Baljit Khamba"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nameplate Below Image */}
                <div className=" px-5 py-1 text-center">
                  <p className="text-sm font-semibold text-[#d81177] tracking-wide">
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
                    ingredients now found in Nourish Resilience™ — including
                    reishi, fermented ginger, black cumin seed, dandelion root,
                    ashwagandha, and chai-inspired spices like cinnamon and
                    cardamom. These nutrients and herbs supported me in managing
                    post-surgical fatigue, hormonal fluctuations,
                    detoxification, and the emotional and metabolic aftermath of
                    cancer treatment.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nourish Resilience™ emerged from this lived experience — not
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
                    <footer className="mt-3 text-sm text-[#d81177] font-medium">
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
              <div className="bg-gradient-to-r from-orange-50 via-white to-purple-50 p-6 rounded-xl shadow-sm  ">
                <p className="text-base text-gray-700 leading-relaxed">
                  Nourish Resilience complements a Mediterranean-style diet and
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
            <div className="relative">
              <Image
                src="/who.png?height=600&width=500"
                alt="Woman in peaceful meditation"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Fueling Recovery Section */}
      <section
        id="fuelingRecovery"
        className="py-20 bg-gradient-to-r from-orange-50 to-purple-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* IMAGE COLUMN - Right aligned on desktop */}
            <div className="relative md:order-1 order-2 flex justify-center">
              <Image
                src="/fuel.png?height=600&width=500&text=Women+Supporting+Recovery"
                alt="Women supporting each other in recovery"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* CONTENT COLUMN */}
            <div className="space-y-6 md:order-2 order-1">
              <h2 className="text-4xl font-bold text-[#8bc345] mb-6">
                Fueling Recovery
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Through Dr. Khamba's firsthand experience and connecting with
                  others on similar paths, it became clear that thriving after
                  breast cancer requires more than medical protocols—it demands
                  ongoing nourishment for the body, mind, and spirit. Vitazan
                  Professional heard the same themes echoed again and again:
                  reliable nutritional guidance was hard to find, supportive
                  connection was essential to healing, and posttreatment changes
                  to metabolism, hormones, and overall health needed new,
                  thoughtful care
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed text-lg">
                  With this vision in mind, Nourish Resilience was developed: a
                  clinically informed, organic plant-based supplement designed
                  to fill the gaps left after treatment. Crafted with the purest
                  ingredients—vegan proteins, medicinal mushrooms, prebiotics,
                  fermented botanicals, and powerful adaptogens—it’s built to
                  support strength, metabolic health, immune resilience, and
                  emotional wellbeing.
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our mission is simple: to empower women to nourish their next
                  chapter with strength, vitality, and confidence. Nourish
                  Resilience is more than a supplement; it’s a symbol of moving
                  forward, rebuilding from within, and knowing that cancer may
                  have been one chapter—but it is not the whole story.
                </p>
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
            selected as part of a holistic nutrition approach
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
            certified lab. Every lot of Nourish Resilience goes through a series
            of testing including pesticide and heavy metal testing
          </p>
        </div>
      </section>

      {/* Key Ingredients Section */}
      <section
        id="ingredients"
        className="py-20 bg-gradient-to-b from-purple-50 to-orange-50"
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

          <IngredientsTabSection />

          {/* <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-purple-200 mt-12">
            <p className="text-sm text-gray-600">
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
          <div className="bg-[#d3a1ca] text-black rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certified Excellence in Every Scoop
            </h2>
            <p className="text-lg text-black/90 max-w-3xl mx-auto mb-6">
              All carefully selected ingredients are certified non-GMO and
              organic, manufactured in our certified cGMP facility and tested in
              an ISO 17025 accredited laboratory to meet the unique needs of
              post cancer physiology
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="bg-[#f5eaf3] text-[#861c56] text-sm font-medium px-4 py-1.5 rounded-md border border-[#e4c7dd] shadow-inner">
                ✓ Certified Organic
              </span>
              <span className="bg-[#f5eaf3] text-[#861c56] text-sm font-medium px-4 py-1.5 rounded-md border border-[#e4c7dd] shadow-inner">
                ✓ Non-GMO
              </span>
              <span className="bg-[#f5eaf3] text-[#861c56] text-sm font-medium px-4 py-1.5 rounded-md border border-[#e4c7dd] shadow-inner">
                ✓ cGMP Certified
              </span>
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
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 border border-purple-200 rounded-xl overflow-hidden shadow-lg">
              <div className="p-8">
                <Image
                  src="/chai1.png?height=300&width=400"
                  alt="Nourish Chai Smoothie"
                  width={400}
                  height={300}
                  className="w-full h-48 object-contain rounded-lg mb-6"
                />
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

            <div className="bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-200 rounded-xl overflow-hidden shadow-lg">
              <div className="p-8">
                <Image
                  src="/latte.png?height=300&width=400"
                  alt="Warming Resilience Latte"
                  width={400}
                  height={300}
                  className="w-full h-48 object-contain rounded-lg mb-6"
                />
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
      <section className="py-6 bg-gray-400 text-black">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left text-base md:text-lg font-semibold uppercase tracking-wide gap-6">
            <span className="w-full text-center md:text-left">
              Rebuild Your Strength
            </span>
            <span className="w-full text-center">
              Reconnect with Your Vitality
            </span>
            <span className="w-full text-center md:text-right">
              Nourish your body
            </span>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-300 text-white py-8">
        <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap justify-between items-start gap-6">
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
          <div className="text-sm text-gray-900 flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-900" />
              <a
                href="mailto:info@vitazan.com"
                className="hover:text-white transition-colors"
              >
                info@vitazan.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-900" />
              <a
                href="tel:1-888-863-9274"
                className="hover:text-white transition-colors"
              >
                1-888-863-9274
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-900" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5 text-gray-900" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5 text-gray-900" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500  border-gray-800 pt-4">
          &copy; {new Date().getFullYear()} Vitazan.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function IngredientsTabSection() {
  const [activeTab, setActiveTab] = useState(0);

  const ingredientCategories = [
    {
      category: "Organic Vegan Protein",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      description:
        "Supports muscle maintenance, repair body tissues, and build antibodies",
      ingredients: [
        {
          name: "Mung Bean",
          benefit: "Complete amino acid profile for muscle recovery",
          image: "/mugbeans.png?height=250&width=250&text=Mung+Bean",
        },
        {
          name: "Almond",
          benefit: "Rich in omega fatty acids and easily digestible",
          image: "/almond.png?height=150&width=150&text=Hemp+Protein",
        },
        {
          name: "Pumpkin Seed",
          benefit: "Hypoallergenic protein source with B-vitamins",
          image: "/pumkinseeds.png?height=150&width=150&text=Rice+Protein",
        },
      ],
    },
    {
      category: "Fermented Botanicals",
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      description: "Enhanced absorption for digestive health",
      ingredients: [
        {
          name: "Ginger",
          benefit: "Enhanced curcumin absorption for inflammation support",
          image: "/ginger.png?height=150&width=150&text=Turmeric",
        },
        {
          name: "Black Cumin Seed",
          benefit: "Improved digestive support and nausea relief",
          image: "/blackcuminseed.png?height=150&width=150&text=Ginger",
        },
        // {
        //   name: "Fermented Ashwagandha",
        //   benefit: "Better stress adaptation and energy balance",
        //   image: "/placeholder.svg?height=150&width=150&text=Ashwagandha",
        // },
      ],
    },
    {
      category: "Medicinal Mushrooms",
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      description: "Strengthen immune recovery",
      ingredients: [
        {
          name: "Reishi",
          benefit: "Stress reduction and immune system modulation",
          image: "/reishi.png?height=150&width=150&text=Reishi",
        },
        {
          name: "Shiitake",
          benefit: "Immune support with powerful polysaccharides",
          image: "/shiitake.png?height=150&width=150&text=Turkey+Tail",
        },
        {
          name: "Maitake",
          benefit: "Cardiovascular health and immune enhancement",
          image: "/maitake.png?height=150&width=150&text=Shiitake",
        },
      ],
    },
    {
      category: "Antioxidants and Adaptogens",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      description: "Energize and cleanse",
      ingredients: [
        {
          name: "Matcha Green Tea",
          benefit: "Mental clarity and fatigue resistance",
          image: "/matcha.png?height=150&width=150&text=Matcha",
        },
        {
          name: "Ashwagandha",
          benefit: "Liver support and cellular protection",
          image: "/ashwagandha.png?height=150&width=150&text=Ashwagandha",
        },
        {
          name: "Dandelion Root",
          benefit: "Immune strengthening and energy support",
          image: "/dandelionroot.png?height=150&width=150&text=Dandelion+Root",
        },
      ],
    },
    {
      category: "Prebiotic Fibre",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      description: "Supports gut microbiome and healthy digestion",
      ingredients: [
        {
          name: "Inulin",
          benefit: "Feeds beneficial gut bacteria for digestive health",
          image: "/inulin.png?height=150&width=150&text=Inulin",
        },
        // {
        //   name: "Acacia Fiber",
        //   benefit: "Gentle, soluble fiber for regularity",
        //   image: "/placeholder.svg?height=150&width=150&text=Acacia+Fiber",
        // },
      ],
    },
    {
      category: "Spices",
      icon: <Star className="w-6 h-6 text-orange-600" />,
      description: "Antioxidant benefits and comforting taste",
      ingredients: [
        {
          name: "Cinnamon",
          benefit: "Blood sugar support and warming comfort",
          image: "/cinnamon.png?height=150&width=150&text=Cinnamon",
        },
        {
          name: "Cardamom",
          benefit: "Digestive aid with aromatic therapeutic properties",
          image: "/cardamom.png?height=150&width=150&text=Cardamom",
        },
        {
          name: "Cocoa",
          benefit: "Enhanced nutrient absorption and circulation",
          image: "/cocoa.png?height=150&width=150&text=Cocoa",
        },
        {
          name: "Clove",
          benefit: "Enhanced nutrient absorption and circulation",
          image: "/clove.png?height=150&width=150&text=Clove",
        },
      ],
    },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200 shadow-lg overflow-hidden p-4 sm:p-6 md:p-8 space-y-12">
      {ingredientCategories.map((category, index) => (
        <div key={index} className="space-y-0">
          {/* Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <div className="p-2 rounded-lg flex justify-center sm:justify-start">
              {category.icon}
            </div>
            <div className="mt-2 sm:mt-0 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#d81177]">
                {category.category}
              </h3>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                {category.description}
              </p>
            </div>
          </div>

          {/* Ingredients Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.ingredients.map((ingredient, ingredientIndex) => (
              <div
                key={ingredientIndex}
                className="flex flex-col my-4 items-center text-center space-y-2"
              >
                <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl  flex items-center justify-center overflow-hidden ">
                  <Image
                    src={ingredient.image || "/placeholder.svg"}
                    alt={ingredient.name}
                    width={112}
                    height={112}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h4 className="font-semibold text-gray-700 text-sm sm:text-base">
                  {ingredient.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    // <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200 shadow-lg overflow-hidden">
    //   {/* Tab Navigation */}
    //   <div className="border-b border-purple-200 overflow-x-auto scrollbar-gray">
    //     <div className="flex min-w-full space-x-2 px-4 sm:px-6 py-2 ">
    //       {ingredientCategories.map((category, index) => (
    //         <button
    //           key={index}
    //           onClick={() => setActiveTab(index)}
    //           className={`flex-shrink-0 px-4 py-2 text-sm sm:text-base font-medium transition-all duration-200 rounded-md whitespace-nowrap ${
    //             activeTab === index
    //               ? "bg-[#d3a1ca] text-black border-b-2 border-[#d81177]"
    //               : "text-black hover:bg-purple-50 hover:text-[#d81177]"
    //           }`}
    //         >
    //           <div className="flex items-center space-x-2">
    //             <span className="hidden sm:block">{category.icon}</span>
    //             <span className="truncate">{category.category}</span>
    //           </div>
    //         </button>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Tab Content */}
    //   <div className="p-4 sm:p-6 md:p-8">
    //     {/* Category Header */}
    //     <div className="mb-6 md:mb-8">
    //       <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
    //         <div className="p-2 rounded-lg flex justify-center sm:justify-start">
    //           {ingredientCategories[activeTab].icon}
    //         </div>
    //         <div className="mt-2 sm:mt-0 text-center sm:text-left">
    //           <h3 className="text-xl sm:text-2xl font-bold text-[#d81177]">
    //             {ingredientCategories[activeTab].category}
    //           </h3>
    //           <p className="text-gray-600 mt-1 text-sm sm:text-base">
    //             {ingredientCategories[activeTab].description}
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Ingredients Grid */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {ingredientCategories[activeTab].ingredients.map(
    //         (ingredient, index) => (
    //           <div
    //             key={index}
    //             className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg p-4 sm:p-6 border border-purple-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
    //           >
    //             <div className="w-full aspect-square mb-4 flex items-center justify-center overflow-hidden">
    //               <Image
    //                 src={ingredient.image || "/placeholder.svg"}
    //                 alt={ingredient.name}
    //                 width={240}
    //                 height={240}
    //                 className="object-contain w-full h-full"
    //               />
    //             </div>
    //             <h4 className="font-semibold text-gray-700 text-base sm:text-lg">
    //               {ingredient.name}
    //             </h4>
    //           </div>
    //         )
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}
