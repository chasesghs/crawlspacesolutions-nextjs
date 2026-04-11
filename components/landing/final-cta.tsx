"use client"

import { useState } from "react"
import { Phone, MessageSquare, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

const PHONE_NUMBER = "(573) 607-5910"
const PHONE_HREF = "tel:+15736075910"
const SMS_HREF = "sms:+15736075910"

export function FinalCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section className="py-12 md:py-16 bg-muted/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - CTA */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
              Ready to Fix Your Crawl Space?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Call or text us today. We&apos;ll schedule a free inspection, show you exactly what&apos;s going on under your home, and give you an honest quote.
            </p>

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
                  Text Us Photos
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Text photos of your crawl space for a faster quote.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="bg-card border border-border rounded-md p-5">
            <h3 className="font-semibold text-sm text-foreground mb-4">Or send us a message</h3>
            
            {submitted ? (
              <div className="text-center py-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 mx-auto mb-3">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">Message Sent!</h4>
                <p className="text-xs text-muted-foreground mt-1">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">Phone</FieldLabel>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 555-5555"
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="message">Tell us about your crawl space issue</FieldLabel>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Describe what you're experiencing..."
                      rows={4}
                      className="resize-none"
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
                        Send Message
                      </>
                    )}
                  </Button>
                </FieldGroup>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
