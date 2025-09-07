import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { KhmerPattern } from "@/components/khmer-pattern"
import { Mail, Linkedin, Github, MapPin, Calendar, Award } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    id: 1,
    name: "Sokha Kim",
    role: "Lead Developer & Project Manager",
    avatar: "SK",
    location: "Phnom Penh, Cambodia",
    experience: "8+ years",
    email: "sokha@cambofreelance.com",
    linkedin: "#",
    github: "#",
    bio: "Full-stack developer with extensive experience in React, Node.js, and cloud architecture. Passionate about building scalable solutions and leading high-performing teams.",
    skills: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL", "Docker"],
    specializations: ["Web Development", "Cloud Architecture", "Team Leadership"],
    projects: 45,
    certifications: ["AWS Solutions Architect", "Scrum Master"],
  },
  {
    id: 2,
    name: "Chenda Pich",
    role: "UI/UX Designer & Frontend Specialist",
    avatar: "CP",
    location: "Siem Reap, Cambodia",
    experience: "6+ years",
    email: "chenda@cambofreelance.com",
    linkedin: "#",
    github: "#",
    bio: "Creative designer specializing in user experience and modern interface design with cultural sensitivity. Expert in creating intuitive and beautiful digital experiences.",
    skills: ["Figma", "Adobe Creative Suite", "CSS", "JavaScript", "Design Systems", "Prototyping"],
    specializations: ["UI/UX Design", "Frontend Development", "Brand Identity"],
    projects: 38,
    certifications: ["Google UX Design", "Adobe Certified Expert"],
  },
  {
    id: 3,
    name: "Virak Ros",
    role: "Mobile Developer & DevOps Engineer",
    avatar: "VR",
    location: "Battambang, Cambodia",
    experience: "7+ years",
    email: "virak@cambofreelance.com",
    linkedin: "#",
    github: "#",
    bio: "Mobile app specialist and infrastructure expert ensuring scalable and reliable solutions. Passionate about automation and continuous integration.",
    skills: ["React Native", "Flutter", "Docker", "Kubernetes", "CI/CD", "MongoDB"],
    specializations: ["Mobile Development", "DevOps", "Infrastructure"],
    projects: 32,
    certifications: ["Google Cloud Professional", "Docker Certified Associate"],
  },
  {
    id: 4,
    name: "Sophea Lim",
    role: "Backend Developer & Database Specialist",
    avatar: "SL",
    location: "Phnom Penh, Cambodia",
    experience: "5+ years",
    email: "sophea@cambofreelance.com",
    linkedin: "#",
    github: "#",
    bio: "Backend specialist focused on building robust APIs and optimizing database performance. Expert in microservices architecture and data modeling.",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "GraphQL", "Microservices"],
    specializations: ["Backend Development", "Database Design", "API Architecture"],
    projects: 28,
    certifications: ["MongoDB Professional", "Python Institute Certified"],
  },
  {
    id: 5,
    name: "Dara Nhem",
    role: "Quality Assurance & Testing Lead",
    avatar: "DN",
    location: "Kampong Cham, Cambodia",
    experience: "4+ years",
    email: "dara@cambofreelance.com",
    linkedin: "#",
    github: "#",
    bio: "QA specialist ensuring high-quality deliverables through comprehensive testing strategies. Expert in automated testing and quality processes.",
    skills: ["Selenium", "Jest", "Cypress", "TestRail", "Automation", "Performance Testing"],
    specializations: ["Quality Assurance", "Test Automation", "Performance Testing"],
    projects: 35,
    certifications: ["ISTQB Certified", "Selenium WebDriver"],
  },
  {
    id: 6,
    name: "Pisach Hor",
    role: "Business Analyst & Client Relations",
    avatar: "PH",
    location: "Phnom Penh, Cambodia",
    experience: "6+ years",
    email: "pisach@cambofreelance.com",
    linkedin: "#",
    github: "#",
    bio: "Business analyst bridging the gap between technical teams and clients. Expert in requirements gathering and stakeholder management.",
    skills: ["Business Analysis", "Stakeholder Management", "Agile", "Documentation", "Client Relations"],
    specializations: ["Business Analysis", "Project Coordination", "Client Management"],
    projects: 42,
    certifications: ["PMI-PBA", "Certified Business Analyst"],
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <KhmerPattern className="text-primary" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Meet Our Expert Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Talented professionals from Cambodia bringing diverse skills, cultural insight, and modern expertise to
            every project we undertake.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">180+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6+</div>
              <div className="text-muted-foreground">Years Average Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="mb-3">
                        <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                        <CardDescription className="text-base">{member.role}</CardDescription>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {member.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {member.experience}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{member.avatar}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{member.bio}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((spec) => (
                        <Badge key={spec} className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {member.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{member.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border mt-6">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span>{member.projects} projects</span>
                      <span className="text-muted-foreground/50">•</span>
                      <span>{member.certifications.length} certifications</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={member.linkedin}>
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={member.github}>
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Our Team?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Let's discuss your project and see how our expertise can help you achieve your goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Start Your Project</Link>
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
