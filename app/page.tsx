import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { KhmerPattern } from "@/components/khmer-pattern"
import { ArrowRight, Users, BookOpen, Code, Globe, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <KhmerPattern className="text-primary" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Professional Freelance Team
              <span className="text-primary block">From Cambodia</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              We deliver technology-driven solutions through structured collaboration, professional development, and
              innovative approaches to modern challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  View Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Team Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for modern businesses and individuals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Technology Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Modern web development, mobile apps, and digital transformation services
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Structured teamwork with clear communication and project management</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Professional Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Short, focused courses to enhance skills and professional development</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Serving clients worldwide with Cambodian excellence and cultural insight
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented professionals from Cambodia bringing diverse skills and cultural insight to every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">SK</span>
                </div>
                <CardTitle>Sokha Kim</CardTitle>
                <CardDescription>Lead Developer & Project Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Full-stack developer with 8+ years experience in React, Node.js, and cloud architecture.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">CP</span>
                </div>
                <CardTitle>Chenda Pich</CardTitle>
                <CardDescription>UI/UX Designer & Frontend Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Creative designer specializing in user experience and modern interface design with cultural
                  sensitivity.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">Design Systems</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">VR</span>
                </div>
                <CardTitle>Virak Ros</CardTitle>
                <CardDescription>Mobile Developer & DevOps Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mobile app specialist and infrastructure expert ensuring scalable and reliable solutions.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/team">
                View Full Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Highlight Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Development Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Short, focused courses designed to enhance your skills and advance your career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-accent text-accent-foreground">Popular</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-current text-accent mr-1" />
                    4.9
                  </div>
                </div>
                <CardTitle>Modern Web Development</CardTitle>
                <CardDescription>React, Next.js, and TypeScript fundamentals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />6 weeks intensive program
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Hands-on projects
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Certificate upon completion
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">New</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-current text-accent mr-1" />
                    4.8
                  </div>
                </div>
                <CardTitle>Mobile App Development</CardTitle>
                <CardDescription>React Native and cross-platform solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />8 weeks comprehensive course
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Real app deployment
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Portfolio development
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Professional</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-current text-accent mr-1" />
                    4.9
                  </div>
                </div>
                <CardTitle>Project Management</CardTitle>
                <CardDescription>Agile methodologies and team leadership</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />4 weeks intensive training
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Industry best practices
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Leadership skills development
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by businesses and individuals worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-accent" />
                  ))}
                </div>
                <CardDescription>
                  "The Cambo Freelance Team delivered our e-commerce platform ahead of schedule with exceptional
                  quality. Their attention to detail and cultural understanding made all the difference."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">John Davis</div>
                    <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-accent" />
                  ))}
                </div>
                <CardDescription>
                  "Professional, reliable, and innovative. The mobile app they developed for us has received excellent
                  user feedback and significantly improved our customer engagement."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-semibold text-sm">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah Martinez</div>
                    <div className="text-sm text-muted-foreground">Product Manager, InnovateCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-accent" />
                  ))}
                </div>
                <CardDescription>
                  "Their training courses transformed our team's capabilities. The practical approach and real-world
                  examples made complex concepts easy to understand and implement."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">MK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Michael Kim</div>
                    <div className="text-sm text-muted-foreground">CTO, Digital Solutions Ltd.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community of professionals and start your next project with confidence.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">CF</span>
                </div>
                <span className="font-bold text-xl text-foreground">Cambo Freelance</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Professional freelance team from Cambodia delivering technology-driven solutions with cultural insight
                and modern expertise.
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-4">Send us a message</h3>
                <p className="text-muted-foreground mb-4">Ready to start your project? Get in touch with our team.</p>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/services/web" className="hover:text-primary transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile" className="hover:text-primary transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="hover:text-primary transition-colors">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-primary transition-colors">
                    Training
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/team" className="hover:text-primary transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Cambo Freelance Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
