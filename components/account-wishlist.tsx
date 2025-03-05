"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trash2, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function AccountWishlist() {
  const { addToCart } = useCart()

  const wishlistItems = [
    {
      id: "prod1",
      name: "Smartphone X Pro",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=300&auto=format&fit=crop",
      price: 799.99,
      link: "/product/smartphone-x-pro",
    },
    {
      id: "prod3",
      name: "Wireless Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop",
      price: 149.99,
      link: "/product/wireless-headphones",
    },
    {
      id: "prod8",
      name: "Fitness Tracker",
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=300&auto=format&fit=crop",
      price: 89.99,
      link: "/product/fitness-tracker",
    },
  ]

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">My Wishlist</h3>
        <span className="text-sm text-muted-foreground">{wishlistItems.length} items</span>
      </div>

      <div className="space-y-4">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:bg-muted/30">
              <div className="relative w-full sm:w-24 h-24 flex-shrink-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div className="flex-1">
                <Link href={item.link}>
                  <h3 className="font-medium hover:text-primary">{item.name}</h3>
                </Link>
                <div className="text-lg font-bold text-primary mt-1 mb-4">${item.price.toFixed(2)}</div>

                <div className="flex flex-wrap gap-2">
                  <Button size="sm" onClick={() => handleAddToCart(item)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm" className="text-muted-foreground">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 border rounded-lg">
            <p className="text-muted-foreground mb-4">Your wishlist is empty.</p>
            <Link href="/products">
              <Button>Discover Products</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

