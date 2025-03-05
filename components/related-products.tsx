"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Star } from "lucide-react"

export default function RelatedProducts() {
  const { addToCart } = useCart()

  const products = [
    {
      id: "related1",
      name: "Wireless Earbuds",
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=300&auto=format&fit=crop",
      price: 129.99,
      rating: 4.6,
      reviews: 198,
      link: "/product/wireless-earbuds",
    },
    {
      id: "related2",
      name: "Smart Watch",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=300&auto=format&fit=crop",
      price: 199.99,
      rating: 4.4,
      reviews: 231,
      link: "/product/smart-watch",
    },
    {
      id: "related3",
      name: "Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=300&auto=format&fit=crop",
      price: 79.99,
      rating: 4.2,
      reviews: 185,
      link: "/product/bluetooth-speaker",
    },
    {
      id: "related4",
      name: "Power Bank",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=300&auto=format&fit=crop",
      price: 49.99,
      rating: 4.3,
      reviews: 142,
      link: "/product/power-bank",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border group">
            <div className="relative">
              <Link href={product.link}>
                <div className="relative aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>
            <div className="p-4">
              <Link href={product.link}>
                <h3 className="font-medium mb-1 hover:text-primary truncate">{product.name}</h3>
              </Link>
              <div className="flex items-center gap-1 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
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

