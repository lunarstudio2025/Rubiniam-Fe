"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  const categories = [
    { id: "electronics", label: "Electronics" },
    { id: "fashion", label: "Fashion" },
    { id: "home-living", label: "Home & Living" },
    { id: "beauty", label: "Beauty" },
    { id: "sports", label: "Sports" },
    { id: "toys", label: "Toys" },
  ]

  const brands = [
    { id: "brand1", label: "Brand 1" },
    { id: "brand2", label: "Brand 2" },
    { id: "brand3", label: "Brand 3" },
    { id: "brand4", label: "Brand 4" },
    { id: "brand5", label: "Brand 5" },
  ]

  const ratings = [
    { id: "4-up", label: "4★ & up" },
    { id: "3-up", label: "3★ & up" },
    { id: "2-up", label: "2★ & up" },
    { id: "1-up", label: "1★ & up" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>

      <Accordion type="multiple" defaultValue={["price", "categories", "brands", "ratings"]}>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="py-4">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-6"
              />
              <div className="flex items-center justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={category.id} />
                  <Label htmlFor={category.id}>{category.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brands">
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox id={brand.id} />
                  <Label htmlFor={brand.id}>{brand.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ratings">
          <AccordionTrigger>Ratings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              {ratings.map((rating) => (
                <div key={rating.id} className="flex items-center space-x-2">
                  <Checkbox id={rating.id} />
                  <Label htmlFor={rating.id}>{rating.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

