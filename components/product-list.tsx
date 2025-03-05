"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Star, Heart } from "lucide-react"

export default function ProductList() {
  const { addToCart } = useCart()

  const products = [
    {
      id: "prod1",
      name: "Smartphone X Pro",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=300&auto=format&fit=crop",
      price: 799.99,
      rating: 4.8,
      reviews: 245,
      link: "/product/smartphone-x-pro",
    },
    {
      id: "prod2",
      name: "Laptop Ultra Slim",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=300&auto=format&fit=crop",
      price: 1299.99,
      rating: 4.7,
      reviews: 189,
      link: "/product/laptop-ultra-slim",
    },
    {
      id: "prod3",
      name: "Wireless Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop",
      price: 149.99,
      rating: 4.5,
      reviews: 320,
      link: "/product/wireless-headphones",
    },
    {
      id: "prod4",
      name: "Smart Home Hub",
      image: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?q=80&w=300&auto=format&fit=crop",
      price: 129.99,
      rating: 4.6,
      reviews: 178,
      link: "/product/smart-home-hub",
    },
    {
      id: "prod5",
      name: "4K Smart TV",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=300&auto=format&fit=crop",
      price: 599.99,
      rating: 4.7,
      reviews: 203,
      link: "/product/4k-smart-tv",
    },
    {
      id: "prod6",
      name: "Digital Camera",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=300&auto=format&fit=crop",
      price: 449.99,
      rating: 4.4,
      reviews: 156,
      link: "/product/digital-camera",
    },
    {
      id: "prod7",
      name: "Gaming Console",
      image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=300&auto=format&fit=crop",
      price: 499.99,
      rating: 4.9,
      reviews: 312,
      link: "/product/gaming-console",
    },
    {
      id: "prod8",
      name: "Fitness Tracker",
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=300&auto=format&fit=crop",
      price: 89.99,
      rating: 4.3,
      reviews: 275,
      link: "/product/fitness-tracker",
    },
    {
      id: "prod9",
      name: "Wireless Earbuds",
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=300&auto=format&fit=crop",
      price: 129.99,
      rating: 4.6,
      reviews: 198,
      link: "/product/wireless-earbuds",
    },
    {
      id: "prod10",
      name: "Tablet Pro",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=300&auto=format&fit=crop",
      price: 349.99,
      rating: 4.5,
      reviews: 167,
      link: "/product/tablet-pro",
    },
    {
      id: "prod11",
      name: "Smart Watch",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=300&auto=format&fit=crop",
      price: 199.99,
      rating: 4.4,
      reviews: 231,
      link: "/product/smart-watch",
    },
    {
      id: "prod12",
      name: "Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=300&auto=format&fit=crop",
      price: 79.99,
      rating: 4.2,
      reviews: 185,
      link: "/product/bluetooth-speaker",
    },
  ]

  return (
    <div className="product-grid">
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
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
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
  )
}

