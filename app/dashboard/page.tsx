import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ContentPerformanceChart } from "@/components/charts/ContentPerformanceChart"
import { WebsiteTrafficChart } from "@/components/charts/WebsiteTrafficChart"
import {
  Users,
  FileText,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Plus,
  Settings,
  MessageSquare,
  ImageIcon,
  Search,
  Bell,
  Edit3,
  Eye,
  MoreHorizontal,
  Upload,
  BarChart3,
} from "lucide-react"

const contentData = [
  { name: "Jan", articles: 12, courses: 3, views: 2400 },
  { name: "Feb", articles: 19, courses: 5, views: 3200 },
  { name: "Mar", articles: 15, courses: 4, views: 2800 },
  { name: "Apr", articles: 22, courses: 6, views: 4100 },
  { name: "May", articles: 18, courses: 4, views: 3600 },
  { name: "Jun", articles: 25, courses: 7, views: 4800 },
]

const trafficData = [
  { name: "Mon", visitors: 1200 },
  { name: "Tue", visitors: 1900 },
  { name: "Wed", visitors: 1600 },
  { name: "Thu", visitors: 2100 },
  { name: "Fri", visitors: 1800 },
  { name: "Sat", visitors: 1400 },
  { name: "Sun", visitors: 1100 },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center relative">
                <span className="text-primary-foreground font-bold text-sm">CF</span>
                {/* Subtle Khmer pattern */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-white to-transparent rounded-lg"></div>
              </div>
              <span className="font-bold text-lg text-sidebar-foreground">CMS Panel</span>
            </div>

            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start bg-sidebar-accent text-sidebar-accent-foreground">
                <BarChart3 className="mr-3 h-4 w-4" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <FileText className="mr-3 h-4 w-4" />
                Pages & Articles
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <BookOpen className="mr-3 h-4 w-4" />
                Courses
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <Users className="mr-3 h-4 w-4" />
                Team Management
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <ImageIcon className="mr-3 h-4 w-4" />
                Media Library
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <MessageSquare className="mr-3 h-4 w-4" />
                Messages
                <Badge className="ml-auto bg-accent text-accent-foreground">3</Badge>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <Settings className="mr-3 h-4 w-4" />
                Settings
              </Button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <header className="bg-background border-b border-border px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div className="relative max-w-md flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search content, courses, team members..." className="pl-10 bg-muted/50" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full"></span>
                </Button>

                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">SK</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium">Sokha Kim</p>
                    <p className="text-xs text-muted-foreground">Administrator</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Content Management</h1>
                <p className="text-muted-foreground">Manage your website content, courses, and team efficiently.</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Media
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Article
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Published Articles</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground">+8 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+3 new courses</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground">All active</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Views</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">48.2K</div>
                  <p className="text-xs text-muted-foreground">+15.3% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Content Performance</CardTitle>
                  <CardDescription>Articles, courses, and page views over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContentPerformanceChart data={contentData} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Website Traffic</CardTitle>
                  <CardDescription>Daily visitors over the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <WebsiteTrafficChart data={trafficData} />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Content</CardTitle>
                  <CardDescription>Latest articles and course updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Advanced React Patterns</h4>
                        <p className="text-sm text-muted-foreground">Article • 2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">Published</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Mobile Development Bootcamp</h4>
                        <p className="text-sm text-muted-foreground">Course • 1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Draft</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Team Collaboration Best Practices</h4>
                        <p className="text-sm text-muted-foreground">Article • 3 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">Published</Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Message Center</CardTitle>
                  <CardDescription>Recent contact form submissions and team updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 border border-border rounded-lg bg-accent/5">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">New project inquiry from TechCorp</p>
                      <p className="text-xs text-muted-foreground">2 hours ago • Unread</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border border-border rounded-lg">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">CP</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Chenda updated team profile</p>
                      <p className="text-xs text-muted-foreground">4 hours ago</p>
                    </div>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>

                  <div className="flex items-center space-x-3 p-4 border border-border rounded-lg bg-accent/5">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Course enrollment question</p>
                      <p className="text-xs text-muted-foreground">6 hours ago • Unread</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg border-l-4 border-l-primary">
                    <h4 className="font-semibold text-foreground mb-3">Quick Actions</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="justify-start bg-transparent">
                        <Plus className="mr-2 h-3 w-3" />
                        New Course
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start bg-transparent">
                        <Users className="mr-2 h-3 w-3" />
                        Add Member
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start bg-transparent">
                        <Upload className="mr-2 h-3 w-3" />
                        Upload Media
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start bg-transparent">
                        <Settings className="mr-2 h-3 w-3" />
                        Site Settings
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
