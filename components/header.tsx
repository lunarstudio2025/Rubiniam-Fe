"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { cartItems } = useCart()

  const categories = ["Electronics", "Fashion", "Home & Living", "Beauty", "Sports", "Toys", "Groceries", "Health"]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/products"
                    className="text-lg font-medium transition-colors hover:text-primary bg-primary/10 px-3 py-2 rounded-md inline-block"
                  >
                    Shop All Products
                  </Link>
                  <Link href="/categories" className="text-lg font-medium transition-colors hover:text-primary">
                    All Categories
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {category}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">ShopBlue</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/products"
                className="text-sm font-medium transition-colors hover:text-primary bg-primary/10 px-3 py-1.5 rounded-md"
              >
                Shop
              </Link>
              {categories.slice(0, 5).map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {isSearchOpen ? (
              <div className="flex items-center">
                <Input type="search" placeholder="Search products..." className="w-[200px] md:w-[300px]" />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
            <Link href="/wishlist">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
            </Link>
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartItems.length}
                  </Badge>
                )}
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-between items-center">
            <div className="hidden md:flex gap-6">
              {categories.slice(5).map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xs font-medium transition-colors hover:text-white"
                >
                  {category}
                </Link>
              ))}
            </div>
            <div className="text-xs">Free shipping on orders over $50</div>
          </div>
        </div>
      </div>
    </header>
  )
}

