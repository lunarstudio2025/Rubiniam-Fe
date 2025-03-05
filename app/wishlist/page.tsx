"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/context/cart-context"
import { Heart, Trash2, ShoppingCart, Search } from "lucide-react"

export default function WishlistPage() {
  const { addToCart } = useCart()

  const wishlistItems = [
    {
      id: "prod1",
      name: "Smartphone X Pro",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=300&auto=format&fit=crop",
      price: 799.99,
      link: "/product/smartphone-x-pro",
      rating: 4.8,
      reviews: 245,
    },
    {
      id: "prod3",
      name: "Wireless Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop",
      price: 149.99,
      link: "/product/wireless-headphones",
      rating: 4.5,
      reviews: 320,
    },
    {
      id: "prod8",
      name: "Fitness Tracker",
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=300&auto=format&fit=crop",
      price: 89.99,
      link: "/product/fitness-tracker",
      rating: 4.3,
      reviews: 275,
    },
    {
      id: "prod5",
      name: "4K Smart TV",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=300&auto=format&fit=crop",
      price: 599.99,
      link: "/product/4k-smart-tv",
      rating: 4.7,
      reviews: 203,
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
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <p className="text-muted-foreground">{wishlistItems.length} saved items</p>
        </div>

        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search wishlist..." className="pl-8 w-full md:w-[300px]" />
        </div>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border group">
              <div className="relative">
                <Link href={item.link}>
                  <div className="relative aspect-square">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                  <span className="sr-only">Remove from wishlist</span>
                </Button>
              </div>
              <div className="p-4">
                <Link href={item.link}>
                  <h3 className="font-medium mb-1 hover:text-primary truncate">{item.name}</h3>
                </Link>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
                </div>
                <Button className="w-full" onClick={() => handleAddToCart(item)}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border rounded-lg">
          <div className="flex justify-center mb-4">
            <Heart className="h-16 w-16 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-6">Save items you like by clicking the heart icon on product pages.</p>
          <Link href="/products">
            <Button size="lg">Discover Products</Button>
          </Link>
        </div>
      )}
    </main>
  )
}

