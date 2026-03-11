import { Heart, CheckCircle, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PersonalCarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Services
            </Link>

            <Badge className="mb-6 bg-highlight/10 text-primary border-highlight/20">
              <Heart className="w-4 h-4 mr-2" />
              Personal Care Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Personal Care
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Compassionate, respectful assistance with daily activities to help our residents maintain dignity and
              independence.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                At HOPE RESTORATION ADULT FAMILY HOME LLC, we understand that even small daily tasks can become overwhelming with age
                or illness. Our compassionate caregivers offer respectful, hands-on assistance with bathing, dressing,
                grooming, toileting, and mobility. Each care plan is customized to honor our residents' preferences and
                privacy while promoting as much independence as possible. We're here to help our residents feel
                comfortable, confident, and cared for—every single day.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Personal Care Services Include:</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Bathing assistance with dignity and respect</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Dressing and grooming support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Toileting and incontinence care</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Mobility and transfer assistance</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Customized care plans</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Privacy and preference respect</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Independence promotion</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">24/7 compassionate support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Ready to Learn More?</h3>
                <p className="text-gray-600 mb-8">
                  Contact us today to discuss how our personal care services can benefit your loved one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/contact">Schedule a Tour</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
