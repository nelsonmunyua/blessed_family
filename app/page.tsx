import Image from "next/image"
import { Users, Clock, Home, Award, ArrowRight, TreePine, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Updated two-column layout */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-start">
            {/* Left: Text Content */}
            <div className="lg:pr-12 animate-fade-in">
              <Badge className="mb-6 bg-highlight/10 text-highlight border-highlight/20">
                <Award className="w-4 h-4 mr-2" />
                Licensed by Washington State DSHS
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-highlight via-accent to-secondary bg-clip-text text-transparent">
                  HOPE RESTORATION
                </span>
                <br />
                Adult Family Home LLC
              </h1>

              <p className="text-xl md:text-2xl mb-12 max-w-lg leading-relaxed text-foreground/90">
                Where compassionate care meets the warmth of home. We create a family atmosphere where each resident is
                treated with dignity, respect, and personalized attention in beautiful Lacey, Washington.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-highlight to-yellow-400 hover:from-highlight/90 text-primary font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group min-h-[52px] w-full sm:w-auto"
                >
                  <Link href="/contact" className="flex items-center justify-center">
                    Schedule Your Tour Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/20 bg-white text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105 min-h-[52px] w-full sm:w-auto"
                >
                  <Link href="/contact" className="flex items-center justify-center">
                    Call Now (360) 338-9851
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Users className="h-12 w-12 text-highlight mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-2 text-primary text-center">6:2 Ratio</h3>
                  <p className="text-foreground/80 text-center leading-relaxed">Low resident-to-caregiver ratio ensures personalized attention</p>
                </div>
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Clock className="h-12 w-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-2 text-primary text-center">24/7 Care</h3>
                  <p className="text-foreground/80 text-center leading-relaxed">Round-the-clock professional care and supervision</p>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative animate-slide-in-right lg:mt-4">
              <div className="relative rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 border-4 border-white/50">
                <Image
src="/images/caregive3.jpg"
                  alt="Compassionate caregiver providing personalized care to senior resident at HOPE RESTORATION Adult Family Home"
                  width={600}
                  height={500}
                  className="w-full h-[28rem] md:h-[32rem] object-cover hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Preview */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Why Families Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes HOPE RESTORATION ADULT FAMILY HOME LLC the trusted choice for families in Lacey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-secondary/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Home className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-primary">Home-Like Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  A peaceful and supportive place where residents can thrive physically, emotionally, and socially.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-primary">Personalized Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Low staff-to-resident ratio ensuring each individual receives the attention they deserve.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <TreePine className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-primary">Prime Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Located in Lacey, WA, close to parks and local amenities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Testimonial */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 text-accent mx-auto mb-6" />
            <blockquote className="text-2xl font-medium text-gray-700 mb-6">
              "HOPE RESTORATION ADULT FAMILY HOME LLC truly lives up to its name. The level of care and compassion shown to my mother
              has been extraordinary."
            </blockquote>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-highlight text-highlight" />
              ))}
            </div>
            <p className="text-lg text-secondary font-semibold">– Sarah M., Daughter of Resident</p>
            <div className="mt-8">
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
              >
                <Link href="/testimonials">Read More Testimonials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
