"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export default function FlashSale() {
  const { addToCart } = useCart()
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 30,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return { hours: 0, minutes: 0, seconds: 0 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0")
  }

  const products = [
    {
      id: "flash1",
      name: "Wireless Earbuds",
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=300&auto=format&fit=crop",
      price: 49.99,
      originalPrice: 99.99,
      discount: 50,
      link: "/product/wireless-earbuds",
    },
    {
      id: "flash2",
      name: "Smart Watch",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=300&auto=format&fit=crop",
      price: 79.99,
      originalPrice: 129.99,
      discount: 38,
      link: "/product/smart-watch",
    },
    {
      id: "flash3",
      name: "Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=300&auto=format&fit=crop",
      price: 39.99,
      originalPrice: 69.99,
      discount: 43,
      link: "/product/bluetooth-speaker",
    },
    {
      id: "flash4",
      name: "Power Bank",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=300&auto=format&fit=crop",
      price: 24.99,
      originalPrice: 44.99,
      discount: 44,
      link: "/product/power-bank",
    },
  ]

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Flash Sale</h2>
        <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">
            Ends in: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border">
            <div className="relative">
              <Link href={product.link}>
                <div className="relative aspect-square">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
              </Link>
              <Badge className="absolute top-2 left-2 bg-red-500">-{product.discount}%</Badge>
            </div>
            <div className="p-4">
              <Link href={product.link}>
                <h3 className="font-medium mb-1 hover:text-primary truncate">{product.name}</h3>
              </Link>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              </div>
              <Button
                className="w-full"
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  })
                }
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

