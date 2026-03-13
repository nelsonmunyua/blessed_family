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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 sm:pt-36 md:pt-24">
        {/* Hero background image */}
        <Image
          src="/images/caregive.jpg"
          alt="Compassionate care at HOPE RESTORATION Adult Family Home"
          fill
          className="object-cover object-center mix-blend-overlay z-0 brightness-50"
          priority
        />
        {/* Background with animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/20 to-highlight/30"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-highlight/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-highlight/20 text-highlight border-highlight/30 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              Licensed by Washington State DSHS
            </Badge>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-highlight to-yellow-300 bg-clip-text text-transparent">
                HOPE RESTORATION
              </span>
              <br />
              Adult Family Home LLC
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
              Where compassionate care meets the warmth of home. We create a family atmosphere where each resident is
              treated with dignity, respect, and personalized attention in beautiful Lacey, Washington.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-highlight text-primary hover:bg-highlight/90 font-bold text-lg px-8 py-4 shadow-2xl hover:shadow-highlight/25 transition-all duration-300 transform hover:scale-105 group"
              >
                <Link href="/contact" className="flex items-center">
                  Schedule Your Tour Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Link href="/contact" className="flex items-center">
                  Call Now
                </Link>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                  <Users className="h-12 w-12 text-highlight mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">6:2 Ratio</h3>
                  <p className="text-white/80">Low resident-to-caregiver ratio ensures personalized attention</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                  <Clock className="h-12 w-12 text-highlight mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">24/7 Care</h3>
                  <p className="text-white/80">Round-the-clock professional care and supervision</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                  <Home className="h-12 w-12 text-highlight mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Home-Like</h3>
                  <p className="text-white/80">Warm, family atmosphere in a beautiful residential setting</p>
                </div>
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
