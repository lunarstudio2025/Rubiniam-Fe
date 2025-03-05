"use client"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AccountOrders from "@/components/account-orders"
import AccountSettings from "@/components/account-settings"
import AccountWishlist from "@/components/account-wishlist"
import AccountAddresses from "@/components/account-addresses"
import { User, Package, Heart, MapPin, LogOut } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>john.doe@example.com</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <nav className="flex flex-col space-y-1 px-4 pb-4">
              <Link
                href="#profile"
                className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted ${
                  activeTab === "profile" ? "bg-muted" : ""
                }`}
                onClick={() => setActiveTab("profile")}
              >
                <User className="h-4 w-4" />
                Personal Info
              </Link>
              <Link
                href="#orders"
                className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted ${
                  activeTab === "orders" ? "bg-muted" : ""
                }`}
                onClick={() => setActiveTab("orders")}
              >
                <Package className="h-4 w-4" />
                My Orders
              </Link>
              <Link
                href="#wishlist"
                className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted ${
                  activeTab === "wishlist" ? "bg-muted" : ""
                }`}
                onClick={() => setActiveTab("wishlist")}
              >
                <Heart className="h-4 w-4" />
                Wishlist
              </Link>
              <Link
                href="#addresses"
                className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted ${
                  activeTab === "addresses" ? "bg-muted" : ""
                }`}
                onClick={() => setActiveTab("addresses")}
              >
                <MapPin className="h-4 w-4" />
                Addresses
              </Link>
              <Link
                href="/auth/signout"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-red-500 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Link>
            </nav>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <AccountSettings />
            </TabsContent>
            <TabsContent value="orders">
              <AccountOrders />
            </TabsContent>
            <TabsContent value="wishlist">
              <AccountWishlist />
            </TabsContent>
            <TabsContent value="addresses">
              <AccountAddresses />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </main>
  )
}

