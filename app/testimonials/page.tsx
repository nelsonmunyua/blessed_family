import { Star, Quote, Home } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-highlight/10 text-primary border-highlight/20">
              <Quote className="w-4 h-4 mr-2" />
              Family Testimonials
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Hear From Our Families
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The trust families place in us is our greatest honor. Here's what they have to say about their experience
              with HOPE RESTORATION ADULT FAMILY HOME LLC.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-highlight text-highlight" />
                  ))}
                </div>
                <CardTitle className="text-2xl font-bold text-primary">"A Blessing for Our Family"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  "HOPE RESTORATION ADULT FAMILY HOME LLC truly lives up to its name. My mother has been living here for over a year,
                  and we couldn't be happier with the level of care she receives. The caregivers treat her like family,
                  and I feel at ease knowing she's in such capable hands."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Sarah M.</p>
                    <p className="text-sm text-gray-500">Daughter of Resident</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-secondary/10 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-highlight text-highlight" />
                  ))}
                </div>
                <CardTitle className="text-2xl font-bold text-primary">"Exceptional Memory Care"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  "After visiting several care facilities, HOPE RESTORATION ADULT FAMILY HOME LLC was the clear choice. My father has
                  dementia, and the memory care services here have been exceptional. The team has been patient,
                  understanding, and dedicated to helping him maintain a good quality of life."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    J
                  </div>
                  <div>
                    <p className="font-semibold text-primary">John K.</p>
                    <p className="text-sm text-gray-500">Son of Resident</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-accent/10 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-highlight"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-highlight text-highlight" />
                  ))}
                </div>
                <CardTitle className="text-2xl font-bold text-primary">"Peace of Mind"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  "Moving my mom to HOPE RESTORATION ADULT FAMILY HOME LLC was one of the best decisions we made. The staff is
                  amazing, and I can tell they genuinely care about her. Knowing she's in a safe and loving environment
                  has brought us so much peace of mind."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center text-primary font-bold text-lg mr-4">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Michael W.</p>
                    <p className="text-sm text-gray-500">Son of Resident</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-highlight/20 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-highlight to-primary"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-highlight text-highlight" />
                  ))}
                </div>
                <CardTitle className="text-2xl font-bold text-primary">"Professional and Caring"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  "The level of professionalism combined with genuine care at HOPE RESTORATION ADULT FAMILY HOME LLC is remarkable.
                  They handle my father's medical needs expertly while maintaining the warmth and comfort of a true home
                  environment. We couldn't ask for better care."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-highlight to-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    L
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Linda R.</p>
                    <p className="text-sm text-gray-500">Daughter of Resident</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-secondary/10 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-highlight text-highlight" />
                  ))}
                </div>
                <CardTitle className="text-2xl font-bold text-primary">"Like Extended Family"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  "What sets HOPE RESTORATION ADULT FAMILY HOME LLC apart is how they treat residents like extended family members.
                  My grandmother has formed genuine friendships with the staff, and they know her preferences, her
                  stories, and what makes her smile. It's exactly what we hoped for."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    D
                  </div>
                  <div>
                    <p className="font-semibold text-primary">David T.</p>
                    <p className="text-sm text-gray-500">Grandson of Resident</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-highlight text-highlight" />
                  ))}
                </div>
                <CardTitle className="text-2xl font-bold text-primary">"Outstanding Communication"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  "The communication from HOPE RESTORATION ADULT FAMILY HOME LLC is outstanding. They keep us informed about
                  everything - from daily activities to health updates. We never feel out of the loop, and they welcome
                  our visits and involvement in care decisions."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    R
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Robert H.</p>
                    <p className="text-sm text-gray-500">Son of Resident</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 backdrop-blur-sm">
              <Home className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-primary mb-4">Join Our Family of Satisfied Families</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Experience the same level of care and support that so many families have come to appreciate. Schedule
                your visit today and see the difference for yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4">
                  <Link href="/contact">Schedule Your Tour</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 bg-transparent"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
