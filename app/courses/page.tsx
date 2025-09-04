import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { KhmerPattern } from "@/components/khmer-pattern"
import { Clock, Users, Star, CheckCircle, BookOpen, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Modern Web Development",
    subtitle: "React, Next.js, and TypeScript Fundamentals",
    category: "Frontend Development",
    level: "Intermediate",
    duration: "6 weeks",
    students: 124,
    rating: 4.9,
    price: 299,
    instructor: "Sokha Kim",
    description:
      "Master modern web development with React, Next.js, and TypeScript. Build scalable applications with industry best practices.",
    features: [
      "Hands-on projects with real-world applications",
      "Modern React patterns and hooks",
      "Next.js App Router and server components",
      "TypeScript integration and type safety",
      "Deployment and performance optimization",
      "Certificate upon completion",
    ],
    schedule: "Mon, Wed, Fri - 7:00 PM - 9:00 PM (GMT+7)",
    startDate: "July 15, 2024",
    popular: true,
  },
  {
    id: 2,
    title: "Mobile App Development",
    subtitle: "React Native and Cross-Platform Solutions",
    category: "Mobile Development",
    level: "Intermediate",
    duration: "8 weeks",
    students: 89,
    rating: 4.8,
    price: 399,
    instructor: "Virak Ros",
    description:
      "Create powerful mobile applications for iOS and Android using React Native. Learn cross-platform development strategies.",
    features: [
      "React Native fundamentals and advanced concepts",
      "Native module integration",
      "State management with Redux Toolkit",
      "Navigation and UI components",
      "App store deployment process",
      "Real app development and portfolio building",
    ],
    schedule: "Tue, Thu, Sat - 7:00 PM - 9:30 PM (GMT+7)",
    startDate: "August 1, 2024",
    popular: false,
  },
  {
    id: 3,
    title: "UI/UX Design Mastery",
    subtitle: "Design Thinking and Modern Interface Design",
    category: "Design",
    level: "Beginner to Intermediate",
    duration: "5 weeks",
    students: 156,
    rating: 4.9,
    price: 249,
    instructor: "Chenda Pich",
    description:
      "Learn design thinking principles and create beautiful, user-centered interfaces with modern design tools and methodologies.",
    features: [
      "Design thinking and user research methods",
      "Figma mastery and design systems",
      "Prototyping and user testing",
      "Cultural design considerations",
      "Portfolio development",
      "Industry mentor feedback",
    ],
    schedule: "Mon, Wed - 6:30 PM - 8:30 PM (GMT+7)",
    startDate: "July 22, 2024",
    popular: false,
  },
  {
    id: 4,
    title: "Backend Development with Python",
    subtitle: "Django, APIs, and Database Design",
    category: "Backend Development",
    level: "Intermediate",
    duration: "7 weeks",
    students: 78,
    rating: 4.7,
    price: 349,
    instructor: "Sophea Lim",
    description:
      "Build robust backend systems with Python and Django. Master API development, database design, and server architecture.",
    features: [
      "Django framework and REST APIs",
      "Database design and optimization",
      "Authentication and security",
      "Microservices architecture",
      "Cloud deployment strategies",
      "Performance monitoring and scaling",
    ],
    schedule: "Tue, Thu - 7:30 PM - 9:30 PM (GMT+7)",
    startDate: "August 5, 2024",
    popular: false,
  },
  {
    id: 5,
    title: "Project Management for Tech Teams",
    subtitle: "Agile Methodologies and Team Leadership",
    category: "Management",
    level: "All Levels",
    duration: "4 weeks",
    students: 203,
    rating: 4.9,
    price: 199,
    instructor: "Pisach Hor",
    description:
      "Master project management skills specifically for technology teams. Learn Agile methodologies and effective leadership strategies.",
    features: [
      "Agile and Scrum methodologies",
      "Team communication and collaboration",
      "Risk management and problem solving",
      "Stakeholder management",
      "Cultural considerations in team leadership",
      "PMI-PBA preparation materials",
    ],
    schedule: "Wed, Fri - 6:00 PM - 8:00 PM (GMT+7)",
    startDate: "July 10, 2024",
    popular: true,
  },
  {
    id: 6,
    title: "Quality Assurance & Testing",
    subtitle: "Automated Testing and QA Best Practices",
    category: "Quality Assurance",
    level: "Beginner to Intermediate",
    duration: "5 weeks",
    students: 67,
    rating: 4.8,
    price: 279,
    instructor: "Dara Nhem",
    description:
      "Learn comprehensive testing strategies and automation tools to ensure high-quality software delivery.",
    features: [
      "Manual and automated testing strategies",
      "Selenium and Cypress frameworks",
      "Performance and security testing",
      "Test case design and documentation",
      "CI/CD integration for testing",
      "ISTQB certification preparation",
    ],
    schedule: "Mon, Thu - 7:00 PM - 9:00 PM (GMT+7)",
    startDate: "August 12, 2024",
    popular: false,
  },
]

const categories = [
  "All",
  "Frontend Development",
  "Mobile Development",
  "Design",
  "Backend Development",
  "Management",
  "Quality Assurance",
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <KhmerPattern className="text-primary" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Professional Development Courses</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Enhance your skills with our comprehensive courses designed by industry experts. Learn practical skills that
            advance your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#courses">Browse Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Custom Training</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-muted-foreground">Active Courses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">800+</div>
              <div className="text-muted-foreground">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm" className="mb-2">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      className={
                        course.popular ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"
                      }
                    >
                      {course.popular ? "Popular" : course.level}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-current text-accent mr-1" />
                      {course.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{course.description}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students} students
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {course.features.length > 3 && (
                        <li className="text-sm text-muted-foreground ml-6">
                          +{course.features.length - 3} more topics
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {course.instructor}
                      </div>
                      <div className="flex items-center text-lg font-bold text-foreground">
                        <DollarSign className="h-4 w-4" />
                        {course.price}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      Starts {course.startDate}
                    </div>
                  </div>

                  <Button className="w-full">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Join hundreds of professionals who have enhanced their skills with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact for Custom Training</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/team">Meet Our Instructors</Link>
            </Button>
          </div>
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
