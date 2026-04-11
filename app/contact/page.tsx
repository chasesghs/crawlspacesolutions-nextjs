"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, MessageSquare, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"

const PHONE_NUMBER = "(573) 607-5910"
const PHONE_HREF = "tel:+15736075910"
const SMS_HREF = "sms:+15736075910"
const EMAIL = "contact@crawlspacesolutionsmo.com"

const serviceAreas = [
  "Lake of the Ozarks",
  "Osage Beach",
  "Camdenton",
  "Lebanon",
  "Jefferson City",
  "Columbia",
  "Eldon",
  "Versailles",
  "Linn Creek",
  "Sunrise Beach",
  "Laurie",
  "Gravois Mills",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    source: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const resetForm = () => {
    setFormData({ name: "", phone: "", email: "", message: "", source: "" })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: window.location.pathname }),
      })

      if (response.ok) {
        resetForm()
        setFormSubmitted(true)
      } else {
        const payload = await response.json()
        setSubmitError(payload.error || "Something went wrong. Please try again or call us directly.")
      }
    } catch {
      setSubmitError("Unable to send your message. Please check your connection or call us directly at (573) 607-5910.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-foreground mb-3">
                Schedule a Free Crawl Space Inspection
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get in touch for a free inspection and honest quote. We&apos;ll show you exactly what&apos;s going on under your home and explain your options.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Prefer to talk? <a href={PHONE_HREF} className="text-primary hover:underline font-medium">Call or text us</a> directly at {PHONE_NUMBER}.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-6 mb-12">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <a href={PHONE_HREF} className="flex items-start gap-4 group">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                          <p className="text-primary font-medium">{PHONE_NUMBER}</p>
                          <p className="text-sm text-muted-foreground mt-1">Available Mon-Sat, 8am-6pm</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <a href={SMS_HREF} className="flex items-start gap-4 group">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <MessageSquare className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Text Us</h3>
                          <p className="text-primary font-medium">{PHONE_NUMBER}</p>
                          <p className="text-sm text-muted-foreground mt-1">Quick responses during business hours</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                          <p className="text-primary font-medium text-sm break-all">{EMAIL}</p>
                          <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </div>

                {/* Service Areas */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Service Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.map((area) => (
                      <span 
                        key={area} 
                        className="px-3 py-1.5 text-sm bg-card border border-border rounded-full text-foreground/80"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Don&apos;t see your area? Contact us - we may still be able to help!
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="bg-card border-border relative overflow-hidden">
                  {/* Success Overlay — elevated modal-light confirmation */}
                  {formSubmitted && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md text-center px-8 rounded-lg">
                      {/* Glowing success ring */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-125" />
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                          <CheckCircle className="h-10 w-10 text-primary" />
                        </div>
                      </div>

                      <h3 className="font-semibold text-2xl text-foreground mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground text-base max-w-sm mx-auto mb-8 leading-relaxed">
                        Thanks — your message was sent successfully. We&apos;ll be in touch soon.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <Button
                          variant="outline"
                          className="flex-1 sm:flex-none"
                          onClick={() => setFormSubmitted(false)}
                        >
                          Send Another Message
                        </Button>
                        <a href={PHONE_HREF} className="flex-1 sm:flex-none">
                          <Button variant="secondary" className="w-full gap-2">
                            <Phone className="h-4 w-4" />
                            Call (573) 607-5910
                          </Button>
                        </a>
                      </div>
                    </div>
                  )}

                  <CardContent className="p-6 md:p-8">
                    <h2 className="font-semibold text-xl text-foreground mb-2">
                      Schedule a Free Crawl Space Inspection
                    </h2>
                    <p className="text-xs text-muted-foreground mb-5">
                      Tell us about your crawl space and we&apos;ll follow up within 24 hours.
                    </p>

                    {submitError && (
                      <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-red-700 text-sm font-medium mb-1">{submitError}</p>
                          <a href={PHONE_HREF} className="text-red-600 text-xs hover:underline font-medium">
                            Call (573) 607-5910
                          </a>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      {/* Honeypot — hidden from users, catches bots */}
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        className="absolute -left-[9999px] w-px h-px"
                        onChange={handleChange}
                      />

                      <FieldGroup className="space-y-4">
                        <Field>
                          <FieldLabel htmlFor="name">Name</FieldLabel>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            className="bg-input border-border"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isSubmitting}
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="phone">Phone</FieldLabel>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            autoComplete="tel"
                            className="bg-input border-border"
                            placeholder="(555) 555-5555"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={isSubmitting}
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="email">Email <span className="text-muted-foreground font-normal">(optional)</span></FieldLabel>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="bg-input border-border"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="message">How can we help?</FieldLabel>
                          <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Describe your crawl space concerns..."
                            className="bg-input border-border resize-none"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isSubmitting}
                          />
                        </Field>
                        <Button
                          type="submit"
                          className="w-full"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            "Schedule a Free Crawl Space Inspection"
                          )}
                        </Button>
                      </FieldGroup>
                    </form>
                  </CardContent>
                </Card>

                <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>We typically respond within 2 hours during business hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTA />
    </div>
  )
}