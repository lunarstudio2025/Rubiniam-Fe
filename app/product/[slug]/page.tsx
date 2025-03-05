import Image from "next/image"
import Link from "next/link"
import { Truck, ShieldCheck, RotateCcw, Star, ChevronRight } from "lucide-react"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductTabs from "@/components/product-tabs"
import RelatedProducts from "@/components/related-products"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real app, you would fetch the product data based on the slug
  const product = {
    id: "prod1",
    name: "Smartphone X Pro",
    slug: params.slug,
    description:
      "Experience the future with our latest smartphone. Featuring a stunning display, powerful processor, and all-day battery life. Perfect for work and play.",
    price: 799.99,
    rating: 4.8,
    reviews: 245,
    stock: 15,
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=600&auto=format&fit=crop",
    ],
    features: [
      "6.7-inch Super Retina XDR display",
      "A15 Bionic chip for lightning-fast performance",
      "Pro camera system with 12MP cameras",
      "Up to 28 hours of video playback",
      "5G capable for ultra-fast downloads and streaming",
      "Face ID for secure authentication",
    ],
    specifications: {
      Display: "6.7-inch Super Retina XDR display",
      Processor: "A15 Bionic chip",
      Storage: "128GB, 256GB, 512GB, 1TB",
      Camera: "Pro 12MP camera system",
      Battery: "Up to 28 hours video playback",
      OS: "iOS 15",
      Connectivity: "5G, Wi-Fi 6, Bluetooth 5.0",
      Dimensions: "160.8 x 78.1 x 7.65 mm",
      Weight: "240g",
    },
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>{product.name}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
            <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-md border bg-muted">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          <div className="text-3xl font-bold text-primary mb-4">${product.price.toFixed(2)}</div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm">
              <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
              </span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <AddToCartButton product={product} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-6">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <p className="font-medium">Free Shipping</p>
                <p className="text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <p className="font-medium">2 Year Warranty</p>
                <p className="text-muted-foreground">Full coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <p className="font-medium">30 Day Returns</p>
                <p className="text-muted-foreground">Hassle-free returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductTabs product={product} />
      <RelatedProducts />
    </main>
  )
}

