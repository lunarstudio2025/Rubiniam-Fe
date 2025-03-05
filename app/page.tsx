import Hero from "@/components/hero"
import FeaturedCategories from "@/components/featured-categories"
import FeaturedProducts from "@/components/featured-products"
import FlashSale from "@/components/flash-sale"
import Brands from "@/components/brands"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <FeaturedCategories />
        <FlashSale />
        <FeaturedProducts />
        <Brands />
        <Newsletter />
      </div>
    </main>
  )
}

