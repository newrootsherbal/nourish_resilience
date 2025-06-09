"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronDown,
  Heart,
  Leaf,
  Shield,
  Star,
  Users,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
} from "lucide-react"

export default function NourishResilienceLanding() {
  const [activeSection, setActiveSection] = useState("hero")
  const [showMoreStory, setShowMoreStory] = useState(false)
  const [showMoreRecovery, setShowMoreRecovery] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "introduction", "story", "benefits", "fuelingRecovery", "ingredients", "recipes"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-50">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-purple-800">Vitazan</div>
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
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    activeSection === item.id ? "text-purple-600" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-orange-50 to-purple-50"></div>
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Nourish Resilience Product"
          width={1200}
          height={800}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-purple-800 mb-4 leading-tight">Fuel Your Recovery</h1>
            <h2 className="text-3xl md:text-5xl font-light text-orange-600 mb-8">Nourish Resilience™</h2>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button
                onClick={() => scrollToSection("introduction")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-lg font-medium transition-colors"
              >
                Learn More
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg rounded-lg font-medium transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-600" />
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-800 leading-tight">
                Your Next Chapter of Healing Starts Here
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Vitazan, we believe that true healing goes beyond treatment—it's about nourishing your body, mind,
                and spirit as you rebuild your strength and reclaim your vitality. Nourish Resilience™ was born from a
                deeply personal journey of recovery and the understanding that every woman deserves support tailored to
                her unique healing path.
              </p>
              <blockquote className="border-l-4 border-purple-600 pl-6 italic text-gray-600">
                "Recovery is not just about surviving—it's about thriving. Every ingredient in Nourish Resilience™ was
                chosen to support your body's natural healing wisdom."
                <footer className="mt-2 text-sm font-medium text-purple-600">— Dr. Baljit Khamba</footer>
              </blockquote>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Supportive women in nature"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Khamba's Story Section */}
      <section id="story" className="py-20 bg-gradient-to-r from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-purple-800 mb-4">Dr. Khamba's Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A personal story of resilience, recovery, and the creation of Nourish Resilience™
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=480&text=Dr.+Baljit+Khamba"
                    alt="Dr. Baljit Khamba"
                    width={480}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-purple-100">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-purple-800">Dr. Baljit Khamba</p>
                    <p className="text-xs text-gray-600">ND, EdD, MPH</p>
                    <p className="text-xs text-purple-600 font-medium mt-1">Survivor & Thriver</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    As a BRCA1-positive survivor of triple-negative breast cancer, I underwent both a double mastectomy
                    and bilateral oophorectomy in my early 40s. This experience was not only physically and emotionally
                    transformative but also professionally catalytic. Throughout my recovery, I was determined to
                    support my body using a blend of evidence-based naturopathic medicine and the traditional healing
                    wisdom of my South Asian roots.
                  </p>
                </div>

                <div
                  className={`space-y-6 overflow-hidden transition-all duration-700 ease-in-out ${
                    showMoreStory ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="prose prose-lg max-w-none space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      I began crafting daily blends incorporating many of the ingredients now found in Nourish
                      Resilience™ — including reishi, fermented ginger, black cumin seed, dandelion root, ashwagandha,
                      and chai-inspired spices like cinnamon and cardamom. These nutrients and herbs supported me in
                      managing post-surgical fatigue, hormonal fluctuations, detoxification, and the emotional and
                      metabolic aftermath of cancer treatment.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Nourish Resilience™ emerged from this lived experience — not just as a product, but as a deeply
                      intentional formulation designed to support recovery, resilience, and vitality in others. It
                      reflects the science of nutritional therapeutics, the wisdom of ancestral medicine, and the
                      realities of life after cancer. I'm proud to offer it as part of a broader commitment to helping
                      women feel strong, whole, and nourished — from the cellular level outward.
                    </p>

                    <div className="border-l-4 border-purple-600 pl-6 bg-purple-50 p-4 rounded-r-lg">
                      <p className="text-purple-800 font-medium italic">
                        "Every ingredient was chosen not just for its scientific backing, but for its ability to honor
                        the body's innate wisdom to heal and thrive."
                      </p>
                      <footer className="mt-3 text-sm text-purple-600 font-medium">
                        — Dr. Baljit Khamba, ND, EdD, MPH
                        <br />
                        <span className="text-purple-500">Breast cancer survivor & thriver</span>
                      </footer>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowMoreStory(!showMoreStory)}
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors group"
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
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-purple-800 mb-8">Who Can Benefit?</h2>
              <ul className="space-y-4">
                {[
                  "Women in active cancer treatment seeking nutritional support",
                  "Breast cancer survivors focused on long-term wellness",
                  "Those looking to rebuild strength and energy post-treatment",
                  "Women wanting to support their immune system naturally",
                  "Anyone seeking high-quality, organic nutritional supplementation",
                  "Those interested in adaptogenic and functional foods",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                <p className="text-sm text-gray-600">
                  <strong>Important:</strong> Always consult with your healthcare practitioner before starting any new
                  supplement regimen, especially during treatment or recovery.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
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
      <section id="fuelingRecovery" className="py-20 bg-gradient-to-r from-orange-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-purple-800 mb-6">Fueling Recovery</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Through firsthand experience and connecting with others on similar paths, it became clear that
                  thriving after breast cancer requires more than medical protocols—it demands ongoing nourishment for
                  the body, mind, and spirit. We heard the same themes echoed again and again: reliable nutritional
                  guidance was hard to find, supportive connection was essential to healing, and post-treatment changes
                  to metabolism, hormones, and overall health needed new, thoughtful care.
                </p>
              </div>

              <div
                className={`space-y-6 overflow-hidden transition-all duration-700 ease-in-out ${
                  showMoreRecovery ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    With this vision in mind, Nourish Resilience was developed: a clinically informed, organic
                    plant-based supplement designed to fill the gaps left after treatment. Crafted with the purest
                    ingredients—vegan proteins, medicinal mushrooms, prebiotics, fermented botanicals, and powerful
                    adaptogens—it's built to support strength, metabolic health, immune resilience, and emotional
                    wellbeing.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Our mission is simple: to empower women to nourish their next chapter with strength, vitality, and
                    confidence. Nourish Resilience is more than a supplement; it's a symbol of moving forward,
                    rebuilding from within, and knowing that cancer may have been one chapter—but it is not the whole
                    story.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowMoreRecovery(!showMoreRecovery)}
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors group"
              >
                {showMoreRecovery ? "Read Less" : "Read More"}
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                    showMoreRecovery ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500&text=Women+Supporting+Recovery"
                alt="Women supporting each other in recovery"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-orange-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <p className="text-sm font-medium text-gray-800">Community & Connection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Ingredients Section */}
      <section id="ingredients" className="py-20 bg-gradient-to-b from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">Powerful Ingredients for Healing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each ingredient is carefully selected for its unique healing properties and synergistic benefits
            </p>
          </div>

          <IngredientsTabSection />

          <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-purple-200 mt-12">
            <p className="text-sm text-gray-600">
              <strong>Quality Assurance:</strong> Certified organic, non-GMO, and crafted in a third-party cGMP facility
              to ensure the highest standards of purity and potency.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Achievement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full"></div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-medium">Latest Achievement</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">Certified Excellence in Every Scoop</h2>

                <p className="text-lg leading-relaxed text-white/90">
                  All ingredients are <strong>organic, non-GMO, curated in a third-party cGMP facility</strong>, and
                  carefully selected to meet the unique needs of post-cancer physiology.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <Shield className="w-5 h-5 text-green-300" />
                    <span className="text-sm font-medium">Certified Organic</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <Leaf className="w-5 h-5 text-green-300" />
                    <span className="text-sm font-medium">Non-GMO</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <Star className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm font-medium">cGMP Certified</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center border-4 border-green-200">
                      <Image
                        src="/placeholder.svg?height=120&width=120&text=cGMP+Certified"
                        alt="cGMP Certification Logo"
                        width={120}
                        height={120}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">cGMP Certified</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Third-party verified manufacturing standards ensuring the highest quality and safety
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-xs text-green-800 font-medium">
                        ✓ Pharmaceutical-grade quality
                        <br />✓ Rigorous testing protocols
                        <br />✓ Contamination-free environment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">Simple Ways to Nourish Daily</h2>
            <p className="text-lg text-gray-600">
              Delicious recipes to incorporate Nourish Resilience™ into your routine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 border border-purple-200 rounded-xl overflow-hidden shadow-lg">
              <div className="p-8">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Nourish Chai Smoothie"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Nourish Chai Smoothie</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Prep time:</strong> 5 minutes
                  </p>
                  <div>
                    <strong>Ingredients:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>1 scoop Nourish Resilience™</li>
                      <li>1 cup almond milk</li>
                      <li>1/2 frozen banana</li>
                      <li>1 tsp vanilla extract</li>
                      <li>Ice cubes</li>
                    </ul>
                  </div>
                  <p>
                    <strong>Instructions:</strong> Blend all ingredients until smooth. Enjoy immediately for best taste
                    and nutrition.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-200 rounded-xl overflow-hidden shadow-lg">
              <div className="p-8">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Warming Resilience Latte"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Warming Resilience Latte</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Prep time:</strong> 8 minutes
                  </p>
                  <div>
                    <strong>Ingredients:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>1 scoop Nourish Resilience™</li>
                      <li>1 cup warm oat milk</li>
                      <li>1 tsp coconut oil</li>
                      <li>Pinch of cinnamon</li>
                      <li>Honey to taste</li>
                    </ul>
                  </div>
                  <p>
                    <strong>Instructions:</strong> Whisk all ingredients in warm milk until frothy. Serve in your
                    favorite mug and savor the moment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-8 bg-purple-800 text-white overflow-hidden">
        <div className="animate-scroll">
          <div className="flex space-x-8 text-lg font-medium whitespace-nowrap">
            <span>● REBUILD YOUR STRENGTH</span>
            <span>● RECONNECT WITH YOUR VITALITY</span>
            <span>● THRIVE BEYOND RECOVERY</span>
            <span>● REBUILD YOUR STRENGTH</span>
            <span>● RECONNECT WITH YOUR VITALITY</span>
            <span>● THRIVE BEYOND RECOVERY</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-purple-400">Vitazan</div>
              <p className="text-gray-400">
                Supporting women's health through science-backed nutrition and compassionate care.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Dr. Khamba's Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Stay Connected</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Vitazan.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function IngredientsTabSection() {
  const [activeTab, setActiveTab] = useState(0)

  const ingredientCategories = [
    {
      category: "Vegan Proteins",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      description: "Plant-based proteins to support tissue repair and muscle maintenance",
      ingredients: [
        {
          name: "Organic Pea Protein",
          benefit: "Complete amino acid profile for muscle recovery",
          image: "/placeholder.svg?height=150&width=150&text=Pea+Protein",
        },
        {
          name: "Hemp Protein",
          benefit: "Rich in omega fatty acids and easily digestible",
          image: "/placeholder.svg?height=150&width=150&text=Hemp+Protein",
        },
        {
          name: "Brown Rice Protein",
          benefit: "Hypoallergenic protein source with B-vitamins",
          image: "/placeholder.svg?height=150&width=150&text=Rice+Protein",
        },
      ],
    },
    {
      category: "Fermented Botanicals",
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      description: "Enhanced bioavailability through traditional fermentation processes",
      ingredients: [
        {
          name: "Fermented Turmeric",
          benefit: "Enhanced curcumin absorption for inflammation support",
          image: "/placeholder.svg?height=150&width=150&text=Turmeric",
        },
        {
          name: "Fermented Ginger",
          benefit: "Improved digestive support and nausea relief",
          image: "/placeholder.svg?height=150&width=150&text=Ginger",
        },
        {
          name: "Fermented Ashwagandha",
          benefit: "Better stress adaptation and energy balance",
          image: "/placeholder.svg?height=150&width=150&text=Ashwagandha",
        },
      ],
    },
    {
      category: "Medicinal Mushrooms",
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      description: "Immune-supporting fungi with powerful adaptogenic properties",
      ingredients: [
        {
          name: "Reishi",
          benefit: "Stress reduction and immune system modulation",
          image: "/placeholder.svg?height=150&width=150&text=Reishi",
        },
        {
          name: "Turkey Tail",
          benefit: "Immune support with powerful polysaccharides",
          image: "/placeholder.svg?height=150&width=150&text=Turkey+Tail",
        },
        {
          name: "Shiitake",
          benefit: "Cardiovascular health and immune enhancement",
          image: "/placeholder.svg?height=150&width=150&text=Shiitake",
        },
      ],
    },
    {
      category: "Adaptogens & Antioxidants",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      description: "Stress-fighting compounds that support overall resilience",
      ingredients: [
        {
          name: "Rhodiola Rosea",
          benefit: "Mental clarity and fatigue resistance",
          image: "/placeholder.svg?height=150&width=150&text=Rhodiola",
        },
        {
          name: "Schisandra Berry",
          benefit: "Liver support and cellular protection",
          image: "/placeholder.svg?height=150&width=150&text=Schisandra",
        },
        {
          name: "Astragalus Root",
          benefit: "Immune strengthening and energy support",
          image: "/placeholder.svg?height=150&width=150&text=Astragalus",
        },
      ],
    },
    {
      category: "Prebiotic Fibre",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      description: "Gut health support for optimal nutrient absorption",
      ingredients: [
        {
          name: "Inulin",
          benefit: "Feeds beneficial gut bacteria for digestive health",
          image: "/placeholder.svg?height=150&width=150&text=Inulin",
        },
        {
          name: "Acacia Fiber",
          benefit: "Gentle, soluble fiber for regularity",
          image: "/placeholder.svg?height=150&width=150&text=Acacia+Fiber",
        },
      ],
    },
    {
      category: "Chai Spices",
      icon: <Star className="w-6 h-6 text-orange-600" />,
      description: "Warming spices that aid digestion and provide comfort",
      ingredients: [
        {
          name: "Ceylon Cinnamon",
          benefit: "Blood sugar support and warming comfort",
          image: "/placeholder.svg?height=150&width=150&text=Cinnamon",
        },
        {
          name: "Cardamom",
          benefit: "Digestive aid with aromatic therapeutic properties",
          image: "/placeholder.svg?height=150&width=150&text=Cardamom",
        },
        {
          name: "Black Pepper",
          benefit: "Enhanced nutrient absorption and circulation",
          image: "/placeholder.svg?height=150&width=150&text=Black+Pepper",
        },
      ],
    },
  ]

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200 shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-purple-200">
        <div className="flex flex-wrap">
          {ingredientCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 min-w-0 px-4 py-4 text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                activeTab === index
                  ? "bg-purple-600 text-white border-b-2 border-purple-600"
                  : "text-purple-600 hover:bg-purple-50 hover:text-purple-800"
              }`}
            >
              <span className="hidden sm:block">{category.icon}</span>
              <span className="truncate">{category.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">{ingredientCategories[activeTab].icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-purple-800">{ingredientCategories[activeTab].category}</h3>
              <p className="text-gray-600 mt-1">{ingredientCategories[activeTab].description}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredientCategories[activeTab].ingredients.map((ingredient, ingredientIndex) => (
            <div
              key={ingredientIndex}
              className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg p-6 border border-purple-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-200">
                <Image
                  src={ingredient.image || "/placeholder.svg"}
                  alt={ingredient.name}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-purple-800 mb-2">{ingredient.name}</h4>
              <p className="text-sm text-gray-600">{ingredient.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
