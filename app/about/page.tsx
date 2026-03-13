import Image from "next/image"
import { Home, UserCheck, HeartHandshake, TreePine, Building2, Car, GraduationCap, Award, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              About Our Family Home
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Exceptional Care, Every Day
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our smaller setting allows us to deliver individualized care that larger facilities simply cannot match.
              Every resident becomes part of our extended family.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-br from-secondary to-accent p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">True Home Environment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Located in a peaceful Lacey neighborhood, our home provides a serene, residential setting where
                    residents can thrive physically, emotionally, and socially.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-br from-accent to-highlight p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Personalized Care Plans</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every resident receives a customized care plan developed by our experienced team, ensuring their
                    unique needs and preferences are met with compassion and expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <HeartHandshake className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Family-Centered Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in fostering meaningful relationships between caregivers, residents, and families. Open
                    communication and family involvement are cornerstones of our care philosophy.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
<Image
                src="/images/caregive.jpg"
                alt="Our caring team at HOPE RESTORATION"
                width={300}
                height={400}
                className="rounded-3xl shadow-2xl object-cover w-full h-auto mx-auto"
              />

            </div>
          </div>

          {/* Location Highlights */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-primary/10">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-primary mb-4">Prime Lacey Location</h3>
              <p className="text-xl text-gray-600">
                Conveniently located with easy access to essential services and beautiful outdoor spaces
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300">
                  <TreePine className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-primary mb-2">Local Parks</h4>
                  <p className="text-gray-600">Beautiful parks nearby for scenic walks and outdoor activities</p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-accent/10 to-highlight/10 rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300">
                  <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-primary mb-2">Medical Facilities</h4>
                  <p className="text-gray-600">Close proximity to quality medical care and emergency services</p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300">
                  <Car className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-primary mb-2">Shopping Centers</h4>
                  <p className="text-gray-600">Easy access to shopping, dining, and community resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff & Leadership */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4 mr-2" />
              Our Expert Team
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Experienced, Caring Professionals</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Our dedicated team of professionals brings years of experience and genuine compassion to every aspect of
              care. Meet the people who make HOPE RESTORATION ADULT FAMILY HOME LLC a special place to call home.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-4xl font-bold mb-8">Our Leadership Team</h3>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h4 className="text-2xl font-bold text-highlight mb-3">Experienced Directors</h4>
                  <p className="text-white/90 leading-relaxed">
                    Our home is guided by two directors with extensive backgrounds in healthcare and senior care. Their
                    combined expertise and hands-on leadership ensure the highest standards are maintained across all
                    aspects of care.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h4 className="text-2xl font-bold text-highlight mb-3">Dedicated Manager</h4>
                  <p className="text-white/90 leading-relaxed">
                    Our Manager oversees daily operations and serves as a direct point of contact for families. With
                    deep understanding of resident care and administrative management, they ensure smooth operations and
                    effective care plan implementation.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl font-bold text-highlight mb-2">15+</div>
                  <div className="text-white/80">Years Combined Experience</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl font-bold text-highlight mb-2">100%</div>
                  <div className="text-white/80">Certified Staff</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl font-bold text-highlight mb-2">24/7</div>
                  <div className="text-white/80">Professional Coverage</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl font-bold text-highlight mb-2">6:1</div>
                  <div className="text-white/80">Staff-to-Resident Ratio</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold text-center mb-12">Our Caregiving Team</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-highlight/20 to-accent/20 rounded-2xl p-6 mb-4">
                  <UserCheck className="h-12 w-12 text-highlight mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Certified Professionals</h4>
                  <p className="text-white/80">All caregivers are certified in first aid, CPR, and dementia care</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl p-6 mb-4">
                  <GraduationCap className="h-12 w-12 text-highlight mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Ongoing Training</h4>
                  <p className="text-white/80">Regular training to stay current with latest caregiving practices</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-6 mb-4">
                  <HeartHandshake className="h-12 w-12 text-highlight mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Compassionate Care</h4>
                  <p className="text-white/80">Genuine desire to care for others with dignity and respect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-12 w-12 text-highlight mr-4 animate-float" />
            <h3 className="text-4xl font-bold">Licensed & Accredited</h3>
          </div>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-white/90 mb-8">
            Fully licensed by the Washington State Department of Social and Health Services (DSHS), ensuring we meet the
            highest standards of safety, care, and compliance. Regular inspections and audits verify our commitment to
            quality care.
          </p>
          <Badge className="bg-highlight/20 text-highlight border-highlight/30 text-lg px-6 py-2">
            <Award className="w-5 h-5 mr-2" />
            Washington State DSHS Licensed
          </Badge>
        </div>
      </section>

      <Footer />
    </div>
  )
}
