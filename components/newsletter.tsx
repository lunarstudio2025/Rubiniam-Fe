"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      // In a real app, you would send this to your API
    }
  }

  return (
    <section className="py-10 bg-primary/10 rounded-lg my-10">
      <div className="text-center max-w-2xl mx-auto px-4">
        <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
        <p className="text-muted-foreground mb-6">
          Stay updated with the latest products, exclusive offers, and discounts.
        </p>
        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg">
            Thank you for subscribing! We'll keep you updated with the latest news and offers.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        )}
      </div>
    </section>
  )
}

