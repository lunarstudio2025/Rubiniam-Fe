"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, Eye } from "lucide-react"

export default function AccountOrders() {
  const orders = [
    {
      id: "ORD-3782",
      date: "2023-03-15",
      total: 249.98,
      status: "Delivered",
      products: 3,
      tracking: "1Z999AA10123456784",
    },
    {
      id: "ORD-3566",
      date: "2023-02-28",
      total: 129.99,
      status: "Shipped",
      products: 1,
      tracking: "1Z999AA10123456785",
    },
    {
      id: "ORD-3492",
      date: "2023-02-14",
      total: 399.97,
      status: "Processing",
      products: 2,
      tracking: null,
    },
    {
      id: "ORD-3275",
      date: "2023-01-20",
      total: 89.99,
      status: "Delivered",
      products: 1,
      tracking: "1Z999AA10123456786",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h3 className="text-xl font-semibold">My Orders</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search orders..." className="pl-8 w-full sm:w-[200px]" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="border rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-3 text-left font-medium text-sm">Order ID</th>
                <th className="px-4 py-3 text-left font-medium text-sm">Date</th>
                <th className="px-4 py-3 text-left font-medium text-sm">Total</th>
                <th className="px-4 py-3 text-left font-medium text-sm">Status</th>
                <th className="px-4 py-3 text-left font-medium text-sm">Items</th>
                <th className="px-4 py-3 text-right font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-muted/30">
                  <td className="px-4 py-4 text-sm font-medium">{order.id}</td>
                  <td className="px-4 py-4 text-sm text-muted-foreground">{order.date}</td>
                  <td className="px-4 py-4 text-sm">${order.total.toFixed(2)}</td>
                  <td className="px-4 py-4 text-sm">
                    <Badge
                      className={
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                      }
                    >
                      {order.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-4 text-sm text-muted-foreground">{order.products} items</td>
                  <td className="px-4 py-4 text-right">
                    <Link href={`/account/orders/${order.id}`}>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Eye className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {orders.length === 0 && (
          <div className="px-4 py-8 text-center">
            <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
            <Link href="/products">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

