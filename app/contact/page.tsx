import { MapPin, Phone, Mail, Calendar, Users, CheckCircle, Clock, Home } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Phone className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Ready to Learn More?
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're here to help you make the best decision for your loved one's care. Contact us today for a free
              consultation or to schedule a tour of our beautiful home.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Tour Scheduling */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">Our Location</h3>
                      <p className="text-gray-600">2606 College St SE, Lacey, WA 98503</p>
                      <p className="text-sm text-gray-500">Beautiful residential neighborhood</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-secondary to-accent p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">Phone</h3>
                      <p className="text-gray-600">+1 206 7911351</p>
                      <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-accent to-highlight p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">Email</h3>
                      <p className="text-gray-600">(Insert Email Address)</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-highlight to-secondary p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                      <p className="text-sm text-gray-500">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-highlight/10 to-accent/10 rounded-3xl p-8 border border-highlight/20">
                <h3 className="text-2xl font-bold text-primary mb-4">Free Expert Consultation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We offer free consultations to help you understand your care options, discuss pricing, and answer any
                  questions about our services. No obligation - just expert guidance when you need it most.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20">No Obligation</Badge>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Expert Guidance</Badge>
                  <Badge className="bg-highlight/10 text-primary border-highlight/20">Free Service</Badge>
                </div>
              </div>
            </div>

            {/* Tour Scheduling */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-primary/10">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Schedule Your Visit</h2>
              <p className="text-gray-600 mb-8 text-center leading-relaxed">
                Experience our warm, family-like environment firsthand. We offer flexible scheduling for both in-person
                and virtual tours to accommodate your needs.
              </p>

              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg py-4">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule In-Person Tour
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 text-lg py-4 bg-transparent"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Request Virtual Tour
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 text-lg py-4 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation Call
                </Button>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
                <h4 className="text-lg font-semibold text-primary mb-3">What to Expect During Your Visit:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Tour our beautiful home and facilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Meet our caring staff and leadership team
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Discuss your loved one's specific needs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Learn about our services and pricing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Ask questions and get expert advice
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Home className="h-12 w-12 text-highlight mr-4 animate-float" />
            <h3 className="text-4xl font-bold">Ready to Make the Right Choice?</h3>
          </div>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-white/90 mb-8">
            Don't wait to secure the best care for your loved one. Our home fills up quickly because families trust us
            with what matters most. Contact us today to learn more about availability and how we can serve your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-highlight text-primary hover:bg-highlight/90 font-bold text-lg px-8 py-4 shadow-2xl hover:shadow-highlight/25 transition-all duration-300 transform hover:scale-105">
              Call Now for Immediate Assistance
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              Schedule Tour Online
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
