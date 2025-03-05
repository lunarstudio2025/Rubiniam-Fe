import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import ProductList from "@/components/product-list"
import ProductFilters from "@/components/product-filters"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // In a real app, you would fetch the category data based on the slug
  const categories = {
    electronics: {
      name: "Electronics",
      description:
        "Discover the latest gadgets and tech innovations. From smartphones to smart home devices, find everything you need to stay connected.",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200&auto=format&fit=crop",
      subcategories: ["Smartphones", "Laptops", "Audio", "Smart Home", "Cameras", "Accessories"],
    },
    fashion: {
      name: "Fashion",
      description:
        "Express yourself with our curated collection of clothing, shoes, and accessories for men, women, and children.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
      subcategories: ["Men's Clothing", "Women's Clothing", "Shoes", "Bags", "Jewelry", "Watches"],
    },
    "home-living": {
      name: "Home & Living",
      description:
        "Transform your living space with our stylish furniture, decor, and home essentials. Create a home that reflects your personal style.",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop",
      subcategories: ["Furniture", "Decor", "Kitchen", "Bedding", "Bath", "Lighting"],
    },
    beauty: {
      name: "Beauty",
      description:
        "Discover premium skincare, makeup, and fragrances. Look and feel your best with our selection of beauty products.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
      subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances", "Bath & Body", "Tools"],
    },
    sports: {
      name: "Sports & Outdoors",
      description:
        "Gear up for your active lifestyle with our range of sports equipment, activewear, and outdoor essentials.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
      subcategories: ["Activewear", "Footwear", "Equipment", "Camping", "Fitness", "Cycling"],
    },
    toys: {
      name: "Toys & Games",
      description:
        "Find the perfect toys and games for children of all ages. From educational toys to fun board games, we have it all.",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=1200&auto=format&fit=crop",
      subcategories: ["Action Figures", "Board Games", "Educational", "Dolls", "Outdoor Toys", "Puzzles"],
    },
  }

  const category = categories[params.slug as keyof typeof categories] || {
    name: "Category Not Found",
    description: "The category you are looking for does not exist.",
    image: "/placeholder.svg?height=600&width=1200",
    subcategories: [],
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/categories" className="hover:text-primary">
          Categories
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{category.name}</span>
      </div>

      <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden mb-8">
        <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.name}</h1>
          <p className="text-white/90 max-w-2xl">{category.description}</p>
        </div>
      </div>

      {category.subcategories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {category.subcategories.map((subcategory) => (
            <Link
              key={subcategory}
              href={`/category/${params.slug}?subcategory=${subcategory.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Button variant="outline" className="rounded-full">
                {subcategory}
              </Button>
            </Link>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 shrink-0">
          <ProductFilters />
        </div>
        <div className="flex-1">
          <ProductList />
        </div>
      </div>
    </main>
  )
}

