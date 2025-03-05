"use client"

import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Truck, XCircle, Eye } from "lucide-react"

export default function AdminRecentOrders() {
  // Sample recent orders data
  const recentOrders = [
    {
      id: "ORD-3782",
      customer: "John Doe",
      date: "2023-03-15",
      total: 249.98,
      status: "delivered",
    },
    {
      id: "ORD-3566",
      customer: "Jane Smith",
      date: "2023-03-14",
      total: 129.99,
      status: "shipped",
    },
    {
      id: "ORD-3492",
      customer: "Robert Johnson",
      date: "2023-03-13",
      total: 399.97,
      status: "processing",
    },
    {
      id: "ORD-3275",
      customer: "Emily Davis",
      date: "2023-03-12",
      total: 89.99,
      status: "delivered",
    },
    {
      id: "ORD-3150",
      customer: "Michael Wilson",
      date: "2023-03-11",
      total: 159.95,
      status: "cancelled",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Delivered
          </Badge>
        )
      case "shipped":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Truck className="mr-1 h-3 w-3" />
            Shipped
          </Badge>
        )
      case "processing":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            <Clock className="mr-1 h-3 w-3" />
            Processing
          </Badge>
        )
      case "cancelled":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <XCircle className="mr-1 h-3 w-3" />
            Cancelled
          </Badge>
        )
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="w-[100px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
              <TableCell className="text-center">{getStatusBadge(order.status)}</TableCell>
              <TableCell className="text-right">
                <Link href={`/admin/orders/${order.id}`}>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

