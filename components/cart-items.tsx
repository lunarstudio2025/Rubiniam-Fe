"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Minus, Plus, Trash2 } from "lucide-react"

export default function CartItems() {
  const { cartItems, updateQuantity, removeFromCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="font-semibold">Cart Items ({cartItems.length})</h2>
      </div>

      <div className="divide-y">
        {cartItems.map((item) => (
          <div key={item.id} className="p-4 flex flex-col sm:flex-row gap-4">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded-md" />
            </div>

            <div className="flex-1">
              <Link href={`/product/${item.id}`}>
                <h3 className="font-medium hover:text-primary">{item.name}</h3>
              </Link>
              <div className="text-lg font-bold text-primary mt-1">${item.price.toFixed(2)}</div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-10 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-5 w-5" />
                  <span className="sr-only">Remove item</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

