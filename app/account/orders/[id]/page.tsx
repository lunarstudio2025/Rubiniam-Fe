"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import { ChevronLeft, Truck, MapPin, Clock, Download, ShoppingCart } from "lucide-react"

interface OrderDetailPageProps {
  params: {
    id: string
  }
}

export default function OrderDetailPage({ params }: OrderDetailPageProps) {
  const router = useRouter()

  // In a real app, you would fetch the order data based on params.id
  const order = {
    id: params.id,
    date: "2023-03-15",
    total: 249.98,
    status: "Delivered",
    deliveredDate: "2023-03-20",
    tracking: "1Z999AA10123456784",
    carrier: "UPS",
    items: [
      {
        id: "prod1",
        name: "Smartphone X Pro",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=300&auto=format&fit=crop",
        price: 149.99,
        quantity: 1,
        link: "/product/smartphone-x-pro",
      },
      {
        id: "prod3",
        name: "Wireless Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop",
        price: 99.99,
        quantity: 1,
        link: "/product/wireless-headphones",
      },
    ],
    address: {
      name: "John Doe",
      address: "123 Main Street",
      apartment: "Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    payment: {
      method: "Credit Card",
      last4: "4242",
      subtotal: 249.98,
      shipping: 0,
      tax: 20.0,
      total: 269.98,
    },
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "Shipped":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "Processing":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "Cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return ""
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/account/orders" className="flex items-center text-primary hover:underline">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Orders
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">Order Details: {order.id}</h1>
        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Order Items</h2>
            </div>
            <div className="divide-y">
              {order.items.map((item) => (
                <div key={item.id} className="p-4 flex gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href={item.link}>
                      <h3 className="font-medium hover:text-primary">{item.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    <div className="text-primary font-bold mt-1">${item.price.toFixed(2)}</div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hidden sm:flex"
                      onClick={() => router.push(item.link)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Buy Again
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Shipping & Tracking</h2>
            </div>
            <div className="p-4">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Shipping Address</h3>
                      <p className="text-sm">{order.address.name}</p>
                      <p className="text-sm">{order.address.address}</p>
                      {order.address.apartment && <p className="text-sm">{order.address.apartment}</p>}
                      <p className="text-sm">
                        {order.address.city}, {order.address.state} {order.address.zip}
                      </p>
                      <p className="text-sm">{order.address.country}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Truck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Shipping Method</h3>
                      <p className="text-sm">{order.carrier} Standard Shipping</p>
                      <p className="text-sm">
                        Tracking Number: <span className="font-medium">{order.tracking}</span>
                      </p>
                      <Button variant="link" className="h-auto p-0 text-primary">
                        Track Package
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Delivery Information</h3>
                      <p className="text-sm">
                        {order.status === "Delivered"
                          ? `Delivered on ${order.deliveredDate}`
                          : "Expected delivery in 3-5 business days"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden sticky top-20">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Order Summary</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="text-sm">
                <p>Order Date: {order.date}</p>
                <p>Order Number: {order.id}</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${order.payment.subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{order.payment.shipping === 0 ? "Free" : `$${order.payment.shipping.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${order.payment.tax.toFixed(2)}</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${order.payment.total.toFixed(2)}</span>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Payment Method:</span> {order.payment.method}
                  {order.payment.last4 && <span> ending in {order.payment.last4}</span>}
                </p>

                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Invoice
                </Button>

                <Button className="w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Buy Again
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

