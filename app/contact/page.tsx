"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, MessageSquare, Clock, CheckCircle } from "lucide-react"
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
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setFormSubmitted(true)
    setIsSubmitting(false)
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
                <Card className="bg-card border-border">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="font-semibold text-xl text-foreground mb-2">
                      Schedule a Free Crawl Space Inspection
                    </h2>
                    <p className="text-xs text-muted-foreground mb-4">
                      Tell us about your crawl space and we&apos;ll follow up within 24 hours.
                    </p>
                    
                    {formSubmitted ? (
                      <div className="text-center py-8">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          We&apos;ll reach out within 24 hours. Usually much sooner.
                        </p>
                        <Button variant="outline" onClick={() => setFormSubmitted(false)}>
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <FieldGroup className="space-y-4">
                          <Field>
                            <FieldLabel htmlFor="name">Name</FieldLabel>
                            <Input 
                              id="name" 
                              name="name" 
                              required 
                              className="bg-input border-border"
                              placeholder="Your name"
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="phone">Phone</FieldLabel>
                            <Input 
                              id="phone" 
                              name="phone" 
                              type="tel" 
                              required 
                              className="bg-input border-border"
                              placeholder="(555) 555-5555"
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="message">How can we help? <span className="text-muted-foreground font-normal">(optional)</span></FieldLabel>
                            <Textarea 
                              id="message" 
                              name="message" 
                              rows={4} 
                              placeholder="Describe your crawl space concerns..."
                              className="bg-input border-border resize-none"
                            />
                          </Field>
                          <div className="text-xs text-muted-foreground mb-2">
                            We&apos;ll reach out within 24 hours. Usually much sooner.
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full" 
                            size="lg"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Schedule a Free Crawl Space Inspection"}
                          </Button>
                        </FieldGroup>
                      </form>
                    )}
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
