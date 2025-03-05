"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Briefcase, Plus, Edit, Trash2 } from "lucide-react"

export default function AccountAddresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      type: "home",
      isDefault: true,
      address: "123 Main Street",
      apartment: "Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "John Doe",
      type: "work",
      isDefault: false,
      address: "456 Office Park",
      apartment: "Suite 200",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      country: "United States",
      phone: "+1 (555) 987-6543",
    },
  ])

  const [isAdding, setIsAdding] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">My Addresses</h3>
        <Button variant={isAdding ? "outline" : "default"} onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? (
            "Cancel"
          ) : (
            <>
              <Plus className="h-4 w-4 mr-2" />
              Add New Address
            </>
          )}
        </Button>
      </div>

      {isAdding && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Address</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <Label htmlFor="address">Street Address</Label>
              <Input id="address" placeholder="123 Main St" />
            </div>

            <div className="space-y-2 mt-4">
              <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
              <Input id="apartment" placeholder="Apt 4B" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State/Province</Label>
                <Input id="state" placeholder="NY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">Zip/Postal Code</Label>
                <Input id="zip" placeholder="10001" />
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <Label htmlFor="country">Country</Label>
              <Input id="country" placeholder="United States" />
            </div>

            <div className="flex gap-2 mt-6">
              <Button>Save Address</Button>
              <Button variant="outline" onClick={() => setIsAdding(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <Card key={address.id} className="relative overflow-hidden">
            <div
              className={`absolute top-0 right-0 w-0 h-0 border-t-[50px] border-r-[50px] 
                ${address.isDefault ? "border-t-primary border-r-transparent" : "border-t-transparent border-r-transparent"}`}
            />
            {address.isDefault && (
              <div className="absolute top-1 right-1 text-primary-foreground text-xs font-bold transform rotate-45">
                Default
              </div>
            )}

            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                {address.type === "home" ? (
                  <Home className="h-4 w-4 text-primary" />
                ) : (
                  <Briefcase className="h-4 w-4 text-primary" />
                )}
                <CardTitle className="text-base">{address.type === "home" ? "Home" : "Work"}</CardTitle>
                {address.isDefault && (
                  <Badge variant="outline" className="ml-auto sm:hidden">
                    Default
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 mb-4">
                <p className="font-medium">{address.name}</p>
                <p className="text-sm text-muted-foreground">{address.address}</p>
                {address.apartment && <p className="text-sm text-muted-foreground">{address.apartment}</p>}
                <p className="text-sm text-muted-foreground">
                  {address.city}, {address.state} {address.zip}
                </p>
                <p className="text-sm text-muted-foreground">{address.country}</p>
                <p className="text-sm text-muted-foreground">{address.phone}</p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-muted-foreground">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </Button>
                {!address.isDefault && (
                  <Button size="sm" className="ml-auto">
                    Set as Default
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

