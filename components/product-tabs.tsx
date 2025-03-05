"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, User } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string
  specifications: Record<string, string>
}

export default function ProductTabs({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState("description")

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      date: "2023-05-15",
      comment:
        "Excellent product! Exceeded my expectations in every way. The battery life is amazing and the camera quality is outstanding.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      date: "2023-04-28",
      comment:
        "Very good phone. Fast performance and great display. The only downside is that it gets a bit hot when gaming for long periods.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      rating: 5,
      date: "2023-04-10",
      comment:
        "Best smartphone I've ever owned. The screen is beautiful and the camera takes amazing photos even in low light.",
    },
  ]

  return (
    <Tabs defaultValue="description" className="mb-12">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="py-4">
        <div className="prose max-w-none">
          <p>{product.description}</p>
          <p>
            Experience the next generation of mobile technology with the {product.name}. This cutting-edge device
            combines sleek design with powerful performance to deliver an exceptional user experience. Whether you're
            capturing memories, gaming on the go, or staying productive, this smartphone has everything you need.
          </p>
          <p>
            The stunning display brings your content to life with vibrant colors and sharp details. The advanced camera
            system lets you take professional-quality photos and videos in any lighting condition. And with all-day
            battery life, you can stay connected without worrying about running out of power.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="specifications" className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex border-b pb-2">
              <span className="font-medium w-1/3">{key}:</span>
              <span className="w-2/3">{value}</span>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="reviews" className="py-4">
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-primary/10 rounded-full p-2">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

