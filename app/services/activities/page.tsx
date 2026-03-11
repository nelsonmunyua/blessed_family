import { Activity, CheckCircle, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-accent/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Services
            </Link>

            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              <Activity className="w-4 h-4 mr-2" />
              Engaging Daily Programs
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-6">
              Social Engagement & Activities
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Enriching activities that promote connection, creativity, and joy for emotional and mental well-being.
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
                Staying socially active is essential for emotional and mental well-being. At HOPE RESTORATION ADULT FAMILY HOME LLC,
                we offer engaging activities that promote connection, creativity, and joy. From light exercise and music
                therapy to board games, arts and crafts, and themed social events, there's always something enriching to
                enjoy. We tailor activities to match individual interests and abilities, helping each resident feel
                included and uplifted.
              </p>

              <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-3xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-accent mb-6">Our Activity Programs Include:</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Light exercise programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Music therapy sessions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Board games and puzzles</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Arts and crafts</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Themed social events</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Individual interest matching</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Ability-appropriate activities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Social connection opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-accent mb-4">Stay Active, Stay Connected</h3>
                <p className="text-gray-600 mb-8">
                  Discover how our engaging activity programs can enrich your loved one's daily life and well-being.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/contact">See Our Activity Calendar</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
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
