"use client"

import { useState } from "react"
import { Phone, MessageSquare, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

const PHONE_NUMBER = "(573) 607-5910"
const PHONE_HREF = "tel:+15736075910"
const SMS_HREF = "sms:+15736075910"

export function FinalCTA() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: window.location.pathname }),
      })

      if (response.ok) {
        setFormData({ name: "", phone: "", message: "" })
        setSubmitted(true)
      } else {
        const payload = await response.json()
        setError(payload.error || "Something went wrong. Please try again or call us directly.")
      }
    } catch {
      setError("Unable to send your message. Please call us directly at (573) 607-5910.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-12 md:py-16 bg-muted/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side — CTA + trust framing */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
              Schedule a Free Crawl Space Inspection
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We&apos;ll inspect your crawl space, explain exactly what&apos;s going on, and give you a straightforward quote. No pressure, no fluff.
            </p>

            {/* Trust bullets */}
            <div className="mt-5 space-y-2">
              {[
                "Free inspection — no charge to assess your crawl space",
                "Same-week availability across Central Missouri",
                "Honest recommendations — we only suggest what your home actually needs",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button size="sm" asChild className="text-xs px-4 py-4">
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {PHONE_NUMBER}
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild className="text-xs px-4 py-4 border-border hover:bg-muted">
                <a href={SMS_HREF}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Text Photos for a Fast Opinion
                </a>
              </Button>
            </div>
          </div>

          {/* Right side — Form */}
          <div className="bg-card border border-border rounded-md p-5">
            <h3 className="font-semibold text-sm text-foreground mb-1">Send us a message</h3>
            <p className="text-xs text-muted-foreground mb-4">We&apos;ll respond within 2 hours during business hours.</p>

            {submitted ? (
              <div className="text-center py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Message Sent!</h4>
                <p className="text-xs text-muted-foreground mb-4">We&apos;ll be in touch soon.</p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                    <p className="text-red-700 text-xs">{error}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <FieldGroup className="space-y-3">
                    <Field>
                      <FieldLabel htmlFor="cta-name">Name</FieldLabel>
                      <Input
                        id="cta-name"
                        name="name"
                        placeholder="Your name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="cta-phone">Phone</FieldLabel>
                      <Input
                        id="cta-phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 555-5555"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="cta-message">Tell us about your crawl space issue</FieldLabel>
                      <Textarea
                        id="cta-message"
                        name="message"
                        placeholder="Describe what you're experiencing — moisture, mold, sagging floors, cold floors..."
                        rows={3}
                        className="resize-none"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </Field>
                    <Button
                      type="submit"
                      size="sm"
                      className="w-full text-xs"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Schedule a Free Crawl Space Inspection
                        </>
                      )}
                    </Button>
                  </FieldGroup>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
