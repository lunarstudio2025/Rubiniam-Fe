"use client"

import Image from "next/image"
import { Progress } from "@/components/ui/progress"

export default function AdminTopProducts() {
  // Sample top products data
  const topProducts = [
    {
      id: "prod1",
      name: "Smartphone X Pro",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=300&auto=format&fit=crop",
      sales: 42,
      revenue: 33599.58,
      percentage: 100,
    },
    {
      id: "prod2",
      name: "Laptop Ultra Slim",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=300&auto=format&fit=crop",
      sales: 28,
      revenue: 36399.72,
      percentage: 86,
    },
    {
      id: "prod3",
      name: "Wireless Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop",
      sales: 35,
      revenue: 5249.65,
      percentage: 72,
    },
    {
      id: "prod5",
      name: "4K Smart TV",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=300&auto=format&fit=crop",
      sales: 19,
      revenue: 11399.81,
      percentage: 65,
    },
    {
      id: "prod7",
      name: "Gaming Console",
      image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=300&auto=format&fit=crop",
      sales: 17,
      revenue: 8499.83,
      percentage: 58,
    },
  ]

  return (
    <div className="space-y-6">
      {topProducts.map((product) => (
        <div key={product.id} className="flex items-center gap-4">
          <div className="relative h-10 w-10 rounded-md overflow-hidden flex-shrink-0">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium truncate">{product.name}</h4>
            <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
              <span>{product.sales} sold</span>
              <span>${product.revenue.toFixed(2)}</span>
            </div>
            <Progress value={product.percentage} className="h-1.5 mt-2" />
          </div>
        </div>
      ))}
    </div>
  )
}

