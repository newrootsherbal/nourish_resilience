"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function ShareYourStoryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    story: "",
    consent: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", story: "", consent: false })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-800">
            Share Your Story of <span className="text-lime-500">Resilience</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty">
            Your journey matters. By sharing your story, you inspire others and help build a community of strength,
            healing, and hope. Together, we're creating a movement of women who nourish resilience every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 text-center lg:order-1 order-2">
            <div className="p-6 bg-white/80 backdrop-blur rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
              <div className="text-3xl mb-3">💝</div>
              <h3 className="font-semibold mb-2 text-gray-800">Be Part of the Movement</h3>
              <p className="text-sm text-gray-600">
                Your story could be featured to inspire other women on their healing journey
              </p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur rounded-lg shadow-md">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="font-semibold mb-2 text-gray-800">Inspire Others</h3>
              <p className="text-sm text-gray-600">Your journey can give hope to women just beginning theirs</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur rounded-lg shadow-md">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-semibold mb-2 text-gray-800">Build Community</h3>
              <p className="text-sm text-gray-600">Connect with others who understand the path to resilience</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur rounded-lg shadow-md">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-semibold mb-2 text-gray-800">Create Impact</h3>
              <p className="text-sm text-gray-600">Help shape the future of women's wellness and recovery</p>
            </div>
          </div>

          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur lg:order-2 order-1">
            <CardHeader className="space-y-2 bg-gradient-to-r from-sky-100 to-blue-100 rounded-t-lg">
              <CardTitle className="text-2xl text-gray-800">Your Resilience Story</CardTitle>
              <CardDescription className="text-base text-gray-700">
                Share your journey and inspire others in the community
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mb-4 text-5xl">✨</div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">Thank You!</h3>
                  <p className="text-gray-600">
                    Your story has been received. We'll review it and may reach out to feature your journey.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base text-gray-800">
                      Your Name <span className="text-pink-600">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="First and last name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="text-base border-gray-300 focus:border-lime-500 focus:ring-lime-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base text-gray-800">
                      Email Address <span className="text-pink-600">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="text-base border-gray-300 focus:border-lime-500 focus:ring-lime-500"
                    />
                    <p className="text-sm text-gray-600">We'll use this to reach out about featuring your story</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="story" className="text-base text-gray-800">
                      Your Resilience Story <span className="text-pink-600">*</span>
                    </Label>
                    <Textarea
                      id="story"
                      name="story"
                      placeholder="Share your journey... How has Nourish Resilience® supported you? What does resilience mean to you? What would you tell other women on their healing path?"
                      value={formData.story}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="text-base resize-y border-gray-300 focus:border-lime-500 focus:ring-lime-500"
                    />
                    <p className="text-sm text-gray-600">
                      Feel free to share as much or as little as you're comfortable with
                    </p>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-pink-50 rounded-lg border border-pink-200">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, consent: checked as boolean }))}
                      required
                      className="mt-1 border-pink-400 data-[state=checked]:bg-lime-500 data-[state=checked]:border-lime-500"
                    />
                    <div className="space-y-1">
                      <Label
                        htmlFor="consent"
                        className="text-sm font-normal cursor-pointer leading-relaxed text-gray-700"
                      >
                        I consent to having my story reviewed and potentially shared on the Nourish Resilience® website,
                        podcast, or social media. I understand that my story may be edited for clarity and length, and
                        that I may be contacted for follow-up.
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || !formData.consent}
                    className="w-full text-base font-semibold bg-lime-500 hover:bg-lime-600 text-gray-900"
                  >
                    {isSubmitting ? "Submitting Your Story..." : "Share My Story"}
                  </Button>

                  <p className="text-sm text-center text-gray-600">
                    All stories are reviewed before being published. We respect your privacy and will never share your
                    contact information.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
