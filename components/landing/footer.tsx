import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const PHONE_NUMBER = "(573) 607-5910"
const PHONE_HREF = "tel:+15736075910"
const EMAIL = "contact@crawlspacesolutionsmo.com"
const SITE_URL = "https://crawlspacesolutionsmo.com"

const ANGI_URL = "https://www.angi.com/companylist/us/mo/osage-beach/safeguard-home-solutions-reviews-1.htm"
const GOOGLE_URL = "https://www.google.com/maps?cid=3113788047082069089"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo-header-cropped.png"
                alt="Crawl Space Solutions"
                width={220}
                height={46}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              Professional crawl space repair and encapsulation for Central Missouri homeowners. 
              Licensed, insured, and committed to doing the job right.
            </p>
            {/* Review Links */}
            <div className="flex flex-col gap-2">
              <a
                href={ANGI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-primary border border-primary/30 rounded-sm hover:bg-primary/10 transition-colors"
              >
                <span>Read Reviews on Angi</span>
              </a>
              <a 
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-primary border border-primary/30 rounded-sm hover:bg-primary/10 transition-colors"
              >
                <span>Read Google Reviews</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Contact</h4>
            <div className="space-y-2">
              <a 
                href={PHONE_HREF} 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs"
              >
                <Phone className="h-3.5 w-3.5" />
                {PHONE_NUMBER}
              </a>
              <a 
                href={`mailto:${EMAIL}`} 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs"
              >
                <Mail className="h-3.5 w-3.5" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-xs">
                <MapPin className="h-3.5 w-3.5 mt-0.5" />
                <span>Serving Lake of the Ozarks &amp; Central Missouri</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Quick Links</h4>
            <nav className="space-y-1.5">
              <Link href="/services" className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/process" className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="/reviews" className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                Reviews
              </Link>
              <Link href="/faq" className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Crawl Space Solutions. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground">
            A SafeGuard Home Solutions Company
          </p>
        </div>
      </div>
    </footer>
  )
}
