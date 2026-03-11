"use client"

import { Home, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-primary/10 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Home className="h-10 w-10 text-highlight animate-float" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                HOPE RESTORATION ADULT FAMILY HOME LLC
              </h1>
              <p className="text-xs text-gray-500">Licensed Care • Lacey, WA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-primary hover:text-secondary transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/services"
              className="text-primary hover:text-secondary transition-all duration-300 font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/testimonials"
              className="text-primary hover:text-secondary transition-all duration-300 font-medium relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:text-secondary transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Button className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="/contact">Schedule Tour</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary/10">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-primary hover:text-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-primary hover:text-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/testimonials"
                className="text-primary hover:text-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="text-primary hover:text-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-secondary to-accent text-white w-fit">
                <Link href="/contact">Schedule Tour</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
