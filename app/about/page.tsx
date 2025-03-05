import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Truck, Shield, TrendingUp, Heart } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jane Smith",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
      bio: "With over 15 years of experience in retail and e-commerce, Jane founded ShopBlue with a vision to create a seamless shopping experience.",
    },
    {
      name: "John Davis",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
      bio: "John leads our technology team, ensuring that our platform is fast, secure, and easy to use for all our customers.",
    },
    {
      name: "Sarah Johnson",
      position: "Head of Customer Service",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
      bio: "Sarah is dedicated to ensuring every customer has a positive experience with our brand, leading our support team with empathy and expertise.",
    },
    {
      name: "Michael Lee",
      position: "Product Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      bio: "Michael works closely with suppliers to ensure we offer a curated selection of high-quality products at competitive prices.",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="max-w-5xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About ShopBlue</h1>
        <p className="text-xl text-center text-muted-foreground mb-10">
          Transforming the way you shop online with quality products and exceptional service.
        </p>

        <div className="aspect-video relative rounded-lg overflow-hidden mb-10">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
            alt="ShopBlue team"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2015, ShopBlue started with a simple mission: to make quality products accessible to everyone
            while providing an exceptional shopping experience. What began as a small operation has grown into a trusted
            e-commerce destination serving customers worldwide.
          </p>
          <p className="text-muted-foreground">
            Our journey hasn't always been easy, but our commitment to quality, transparency, and customer satisfaction
            has never wavered. Today, we're proud to offer thousands of products across multiple categories, all curated
            with our customers' needs in mind.
          </p>
          <p className="text-muted-foreground">
            As we continue to grow, we remain dedicated to our core values and the customers who have made our success
            possible. We're constantly innovating and improving our platform to ensure that shopping with ShopBlue is
            always a pleasure.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Quality First</h3>
            <p className="text-muted-foreground">
              We carefully select every product in our inventory to ensure it meets our high standards for quality and
              value.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Customer Focus</h3>
            <p className="text-muted-foreground">
              Our customers are at the heart of everything we do. We strive to exceed expectations at every touchpoint.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="flex justify-center mb-4">
              <Heart className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Community Impact</h3>
            <p className="text-muted-foreground">
              We're committed to giving back to the communities we serve through sustainable practices and charitable
              initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="relative aspect-square">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose ShopBlue</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="bg-primary/10 p-3 rounded-full h-fit">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Fast & Reliable Shipping</h3>
              <p className="text-muted-foreground">
                We partner with trusted carriers to ensure your orders arrive on time, every time. Free shipping
                available on qualifying orders.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-primary/10 p-3 rounded-full h-fit">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Secure Shopping</h3>
              <p className="text-muted-foreground">
                Our platform uses the latest security technologies to protect your information. Shop with confidence
                knowing your data is safe.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-primary/10 p-3 rounded-full h-fit">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quality Selection</h3>
              <p className="text-muted-foreground">
                We continuously update our product catalog with the latest trends and highest quality items across all
                categories.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-primary/10 p-3 rounded-full h-fit">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Our customer service team is ready to assist you with any questions or concerns, providing personalized
                support when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Experience ShopBlue?</h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of satisfied customers who have made ShopBlue their go-to online shopping destination.
        </p>
        <Link href="/products">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </section>
    </main>
  )
}

