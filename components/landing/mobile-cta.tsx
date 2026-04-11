"use client"

import { Phone, MessageSquare } from "lucide-react"

const PHONE_HREF = "tel:+15736075910"
const SMS_HREF = "sms:+15736075910"

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-secondary/95 backdrop-blur-sm border-t border-border p-3">
      <div className="flex gap-3">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          <Phone className="h-5 w-5" />
          Call (573) 607-5910
        </a>
        <a
          href={SMS_HREF}
          className="flex-1 flex items-center justify-center gap-2 bg-card text-foreground py-3.5 rounded-lg font-semibold text-sm border border-border hover:border-primary/30 transition-colors"
        >
          <MessageSquare className="h-5 w-5" />
          Text Us
        </a>
      </div>
    </div>
  )
}
