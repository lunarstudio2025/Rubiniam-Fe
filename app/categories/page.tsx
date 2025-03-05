import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function CategoriesPage() {
  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      description:
        "Discover the latest gadgets and tech innovations. From smartphones to smart home devices, find everything you need to stay connected.",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=600&auto=format&fit=crop",
      featured: true,
      subcategories: ["Smartphones", "Laptops", "Audio", "Smart Home", "Cameras", "Accessories"],
    },
    {
      id: "fashion",
      name: "Fashion",
      description:
        "Express yourself with our curated collection of clothing, shoes, and accessories for men, women, and children.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop",
      featured: true,
      subcategories: ["Men's Clothing", "Women's Clothing", "Shoes", "Bags", "Jewelry", "Watches"],
    },
    {
      id: "home-living",
      name: "Home & Living",
      description:
        "Transform your living space with our stylish furniture, decor, and home essentials. Create a home that reflects your personal style.",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop",
      featured: true,
      subcategories: ["Furniture", "Decor", "Kitchen", "Bedding", "Bath", "Lighting"],
    },
    {
      id: "beauty",
      name: "Beauty",
      description:
        "Discover premium skincare, makeup, and fragrances. Look and feel your best with our selection of beauty products.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop",
      featured: true,
      subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances", "Bath & Body", "Tools"],
    },
    {
      id: "sports",
      name: "Sports & Outdoors",
      description:
        "Gear up for your active lifestyle with our range of sports equipment, activewear, and outdoor essentials.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
      featured: true,
      subcategories: ["Activewear", "Footwear", "Equipment", "Camping", "Fitness", "Cycling"],
    },
    {
      id: "toys",
      name: "Toys & Games",
      description:
        "Find the perfect toys and games for children of all ages. From educational toys to fun board games, we have it all.",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=600&auto=format&fit=crop",
      featured: true,
      subcategories: ["Action Figures", "Board Games", "Educational", "Dolls", "Outdoor Toys", "Puzzles"],
    },
    {
      id: "groceries",
      name: "Groceries",
      description:
        "Shop for fresh produce, pantry staples, and gourmet foods. Enjoy convenient delivery of high-quality groceries.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop",
      featured: false,
      subcategories: ["Fresh Food", "Pantry", "Beverages", "Snacks", "Organic", "International"],
    },
    {
      id: "health",
      name: "Health & Wellness",
      description: "Prioritize your wellbeing with our selection of vitamins, supplements, and wellness products.",
      image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=600&auto=format&fit=crop",
      featured: false,
      subcategories: ["Vitamins", "Supplements", "Personal Care", "Fitness", "Medical Supplies", "Aromatherapy"],
    },
    {
      id: "books",
      name: "Books & Stationery",
      description:
        "Explore our collection of books, journals, and stationery. Find your next read or the perfect writing tools.",
      image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=600&auto=format&fit=crop",
      featured: false,
      subcategories: ["Fiction", "Non-Fiction", "Children's Books", "Journals", "Pens & Pencils", "Art Supplies"],
    },
    {
      id: "automotive",
      name: "Automotive",
      description:
        "Keep your vehicle running smoothly with our range of automotive parts, accessories, and maintenance products.",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop",
      featured: false,
      subcategories: ["Parts", "Accessories", "Tools", "Car Care", "Electronics", "Motorcycle"],
    },
  ]

  const featuredCategories = categories.filter((category) => category.featured)
  const otherCategories = categories.filter((category) => !category.featured)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>Categories</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden border group">
              <div className="relative h-48">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground mb-4 line-clamp-2">{category.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.subcategories.slice(0, 3).map((subcategory) => (
                    <span key={subcategory} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {subcategory}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      +{category.subcategories.length - 3} more
                    </span>
                  )}
                </div>
                <Link href={`/category/${category.id}`}>
                  <Button className="w-full">Explore {category.name}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">All Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.subcategories.length} subcategories</p>
              </div>
              <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

