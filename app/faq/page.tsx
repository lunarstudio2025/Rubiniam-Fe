import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available at checkout for 1-2 business day delivery. International shipping times vary by location but generally take 7-14 business days.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Products must be in their original condition with all packaging and tags. Some products like electronics may have a shorter return window. Please check our Returns & Refunds page for more details.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. Import duties and taxes may apply and are the responsibility of the customer.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can also check your order status by logging into your account and viewing your order history.",
    },
    {
      question: "Are my payment details secure?",
      answer:
        "Absolutely. We use industry-standard encryption and secure payment processors to ensure your information is protected. We never store your full credit card details on our servers.",
    },
    {
      question: "Can I change or cancel my order after placing it?",
      answer:
        "We process orders quickly to ensure fast delivery. If you need to change or cancel an order, please contact us immediately. We'll do our best to accommodate your request, but we cannot guarantee changes once an order has been processed.",
    },
    {
      question: "Do you offer price matching?",
      answer:
        "Yes, we offer price matching for identical items from authorized retailers. Please contact our customer service team with proof of the lower price within 7 days of your purchase.",
    },
    {
      question: "What warranty do your products have?",
      answer:
        "Most products come with a manufacturer's warranty. The length and terms vary by product and brand. Extended warranty options are available for many items at checkout.",
    },
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking the 'Sign Up' link in the top-right corner of our website. You'll need to provide your email address and create a password. You can also create an account during the checkout process.",
    },
    {
      question: "Do you offer discounts for bulk orders?",
      answer:
        "Yes, we offer volume discounts for bulk purchases. Please contact our sales team for a custom quote based on the items and quantities you're interested in.",
    },
  ]

  const categories = [
    "Shipping & Delivery",
    "Returns & Refunds",
    "Payment & Security",
    "Account & Orders",
    "Product Information",
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
        Find answers to the most common questions about our products, shipping, returns, and more. If you can't find
        what you're looking for, please contact our support team.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div className="md:col-span-1">
          <div className="sticky top-20 space-y-4">
            <h2 className="font-semibold mb-2">Categories</h2>
            <div className="space-y-1">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start hover:bg-primary/10 hover:text-primary"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="bg-primary/10 rounded-lg p-4 mt-6">
              <h3 className="font-semibold mb-2">Need more help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you can't find the answer you're looking for, our support team is here to help.
              </p>
              <Link href="/contact">
                <Button className="w-full">Contact Support</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="pb-4 pt-0 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  )
}

