"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/context/cart-context"
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  image?: string
  stock?: number
}

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (!product.stock || quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/placeholder.svg?height=300&width=300",
      quantity,
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={increaseQuantity}
            disabled={product.stock !== undefined && quantity >= product.stock}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>

        {product.id === "prod1" && (
          <Select defaultValue="128gb">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select storage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="128gb">128GB</SelectItem>
              <SelectItem value="256gb">256GB</SelectItem>
              <SelectItem value="512gb">512GB</SelectItem>
              <SelectItem value="1tb">1TB</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>

      <div className="flex gap-2">
        <Button className="flex-1" onClick={handleAddToCart} disabled={!product.stock || product.stock === 0}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button variant="outline">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
    </div>
  )
}

