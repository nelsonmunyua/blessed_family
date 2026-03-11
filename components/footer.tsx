import { Home, ArrowRight, MapPin, Phone, Mail, Shield, Users } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-accent text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Home className="h-8 w-8 text-highlight animate-float" />
              <div>
                <h4 className="text-2xl font-bold">HOPE RESTORATION ADULT FAMILY HOME LLC</h4>
                <p className="text-sm text-white/70">Licensed Care in Lacey, WA</p>
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed mb-6">
              Providing compassionate, high-quality care in a warm, home-like environment where every resident is
              treated with dignity and respect.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Home className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Users className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-xl font-bold mb-6 text-highlight">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-highlight transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-highlight transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-white/80 hover:text-highlight transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-highlight transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-bold mb-6 text-highlight">Our Services</h5>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="/services/personal-care" className="hover:text-highlight transition-colors">
                  Personal Care Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/memory-care" className="hover:text-highlight transition-colors">
                  Memory & Dementia Care
                </Link>
              </li>
              <li>
                <Link href="/services/medication-management" className="hover:text-highlight transition-colors">
                  Medication Management
                </Link>
              </li>
              <li>
                <Link href="/services/meals" className="hover:text-highlight transition-colors">
                  Nutritious Meal Programs
                </Link>
              </li>
              <li>
                <Link href="/services/activities" className="hover:text-highlight transition-colors">
                  Social Engagement & Activities
                </Link>
              </li>
              <li>
                <Link href="/services/end-of-life-care" className="hover:text-highlight transition-colors">
                  End-of-Life Care
                </Link>
              </li>
              <li>
                <Link href="/services/housekeeping" className="hover:text-highlight transition-colors">
                  Housekeeping & Laundry
                </Link>
              </li>
              <li>
                <Link href="/services/transportation" className="hover:text-highlight transition-colors">
                  Transportation Assistance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-bold mb-6 text-highlight">Contact Info</h5>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-highlight" />
                <div>
                  <p>2606 College St SE</p>
                  <p>Lacey, WA 98503</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-highlight" />
                <p>+1 206 7911351</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-highlight" />
                <p>(Insert Email Address)</p>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-3 text-highlight" />
                <p>Licensed by WA State DSHS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 mb-4 md:mb-0">&copy; 2024 HOPE RESTORATION ADULT FAMILY HOME LLC. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-white/70">
              <a href="#" className="hover:text-highlight transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-highlight transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-highlight transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
