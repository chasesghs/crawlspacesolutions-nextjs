import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
});

const SITE_URL = "https://crawlspacesolutionsmo.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Crawl Space Solutions | Central Missouri Crawl Space Repair & Encapsulation",
    template: "%s | Crawl Space Solutions",
  },
  description:
    "Professional crawl space repair, encapsulation, vapor barrier installation, and moisture control for Central Missouri homeowners. Licensed, insured, local. Call (573) 607-5910 for a free inspection.",
  keywords: [
    "crawl space repair",
    "crawl space encapsulation",
    "vapor barrier",
    "moisture control",
    "mold remediation",
    "Central Missouri",
    "Lake of the Ozarks",
    "Osage Beach",
    "Jefferson City",
    "Columbia MO",
  ],
  authors: [{ name: "Crawl Space Solutions" }],
  creator: "Crawl Space Solutions",
  publisher: "Crawl Space Solutions",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Crawl Space Solutions",
    title: "Crawl Space Solutions | Central Missouri Crawl Space Repair & Encapsulation",
    description:
      "Professional crawl space repair, encapsulation, vapor barrier installation, and moisture control for Central Missouri homeowners. Licensed, insured, local.",
    images: [
      {
        url: "/images/logo-square.png",
        width: 1200,
        height: 1200,
        alt: "Crawl Space Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crawl Space Solutions | Central Missouri Crawl Space Repair",
    description: "Professional crawl space repair and encapsulation for Central Missouri homeowners.",
    images: ["/images/logo-square.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0F2A44',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
