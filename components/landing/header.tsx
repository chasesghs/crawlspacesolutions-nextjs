"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, MessageSquare, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE_NUMBER = "(573) 607-5910"
const PHONE_HREF = "tel:+15736075910"
const SMS_HREF = "sms:+15736075910"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
]

const ANGI_URL = "https://www.angi.com/companylist/us/mo/osage-beach/safeguard-home-solutions-reviews-1.htm"
const GOOGLE_URL = "https://www.google.com/maps?cid=3113788047082069089"

function AnnouncementBar() {
  return (
    <div className="bg-primary/10 border-b border-primary/20">
      <p className="py-2 px-4 text-center text-sm italic text-primary font-medium">
        Missouri&apos;s leading provider of affordable crawl space solutions.
      </p>
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/30 shadow-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-header-cropped.png"
                alt="Crawl Space Solutions"
                width={280}
                height={55}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-foreground/70 hover:text-foreground transition-all duration-200 group"
                >
                  {/* Hover background */}
                  <span className="absolute inset-0 rounded-sm bg-transparent group-hover:bg-primary/15 transition-all duration-200" />
                  {/* Border effect */}
                  <span className="absolute inset-0 rounded-sm border border-transparent group-hover:border-primary/40 group-hover:shadow-[0_0_8px_rgba(111,175,133,0.15)] transition-all duration-200" />
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <a 
                href={ANGI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary border border-primary/30 rounded-sm hover:bg-primary/10 transition-colors"
              >
                <span className="text-primary">Angi</span>
                <span className="text-foreground/60">Certified</span>
              </a>
              <Button 
                variant="ghost" 
                size="sm" 
                asChild 
                className="text-xs text-foreground/70 hover:text-foreground hover:bg-primary/10 font-bold h-8"
              >
                <a href={SMS_HREF}>
                  <MessageSquare className="mr-1.5 h-3.5 w-3.5" />
                  Text
                </a>
              </Button>
              <Button size="sm" asChild className="font-bold shadow-md h-8 text-xs">
                <a href={PHONE_HREF}>
                  <Phone className="mr-1.5 h-3.5 w-3.5" />
                  {PHONE_NUMBER}
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground rounded hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border/30">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded font-semibold transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-border/30 flex flex-col gap-2">
                <Button size="sm" asChild className="w-full font-semibold">
                  <a href={PHONE_HREF}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call {PHONE_NUMBER}
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="w-full font-semibold">
                  <a href={SMS_HREF}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Text Us
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
