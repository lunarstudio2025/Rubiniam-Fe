"use client"

import { useState } from "react"
import { Search, Filter, MoreHorizontal, Eye, Download, CheckCircle2, Clock, Truck, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminOrders() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Sample order data
  const orders = [
    {
      id: "ORD-3782",
      customer: "John Doe",
      email: "john.doe@example.com",
      date: "2023-03-15",
      total: 249.98,
      status: "delivered",
      items: 3,
      payment: "Credit Card",
    },
    {
      id: "ORD-3566",
      customer: "Jane Smith",
      email: "jane.smith@example.com",
      date: "2023-03-14",
      total: 129.99,
      status: "shipped",
      items: 1,
      payment: "PayPal",
    },
    {
      id: "ORD-3492",
      customer: "Robert Johnson",
      email: "robert.j@example.com",
      date: "2023-03-13",
      total: 399.97,
      status: "processing",
      items: 2,
      payment: "Credit Card",
    },
    {
      id: "ORD-3275",
      customer: "Emily Davis",
      email: "emily.d@example.com",
      date: "2023-03-12",
      total: 89.99,
      status: "delivered",
      items: 1,
      payment: "Credit Card",
    },
    {
      id: "ORD-3150",
      customer: "Michael Wilson",
      email: "michael.w@example.com",
      date: "2023-03-11",
      total: 159.95,
      status: "cancelled",
      items: 2,
      payment: "PayPal",
    },
    {
      id: "ORD-3025",
      customer: "Sarah Brown",
      email: "sarah.b@example.com",
      date: "2023-03-10",
      total: 299.99,
      status: "shipped",
      items: 1,
      payment: "Credit Card",
    },
    {
      id: "ORD-2987",
      customer: "David Miller",
      email: "david.m@example.com",
      date: "2023-03-09",
      total: 74.98,
      status: "delivered",
      items: 2,
      payment: "PayPal",
    },
    {
      id: "ORD-2865",
      customer: "Jennifer Taylor",
      email: "jennifer.t@example.com",
      date: "2023-03-08",
      total: 199.99,
      status: "processing",
      items: 1,
      payment: "Credit Card",
    },
    {
      id: "ORD-2742",
      customer: "Thomas Anderson",
      email: "thomas.a@example.com",
      date: "2023-03-07",
      total: 149.97,
      status: "delivered",
      items: 3,
      payment: "Credit Card",
    },
    {
      id: "ORD-2631",
      customer: "Lisa White",
      email: "lisa.w@example.com",
      date: "2023-03-06",
      total: 59.99,
      status: "cancelled",
      items: 1,
      payment: "PayPal",
    },
  ]

  // Filter orders based on search query and status filter
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())

    const match
    ||
                         order.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

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
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">View and manage customer orders.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
          <CardDescription>View all orders, filter by status, and process customer orders.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by order ID, customer name, or email..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-center">Items</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Payment</TableHead>
                  <TableHead className="w-[100px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>{order.customer}</div>
                        <div className="text-xs text-muted-foreground">{order.email}</div>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                      <TableCell className="text-center">{order.items}</TableCell>
                      <TableCell className="text-center">{getStatusBadge(order.status)}</TableCell>
                      <TableCell className="text-center">{order.payment}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Download Invoice
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Truck className="mr-2 h-4 w-4" />
                              Update Status
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No orders found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

