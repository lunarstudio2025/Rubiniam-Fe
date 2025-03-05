"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import CartItems from "@/components/cart-items"
import CartSummary from "@/components/cart-summary"
import { useCart } from "@/context/cart-context"
import { ShoppingCart } from "lucide-react"

export default function CartPage() {
  const { cartItems } = useCart()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartItems />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="flex justify-center mb-4">
            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link href="/products">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      )}
    </main>
  )
}

