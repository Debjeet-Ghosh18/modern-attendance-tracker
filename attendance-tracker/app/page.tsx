import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, ChevronRight, LineChart, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <CalendarDays className="h-6 w-6 text-rose-500" />
            <span>AttendX</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              Dashboard
            </Link>
            <Link href="/attendance" className="text-sm font-medium hover:underline underline-offset-4">
              Attendance
            </Link>
            <Link href="/reports" className="text-sm font-medium hover:underline underline-offset-4">
              Reports
            </Link>
            <Link href="/settings" className="text-sm font-medium hover:underline underline-offset-4">
              Settings
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Modern Attendance Tracking
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your attendance management with our intuitive, powerful tracking system. Save time and
                    gain insights with real-time analytics.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-rose-50 opacity-50" />
                  <div className="relative z-10 h-full rounded-lg border bg-background/80 p-6 backdrop-blur">
                    <div className="flex items-center justify-between border-b pb-4">
                      <h3 className="text-xl font-semibold">Today's Attendance</h3>
                      <span className="text-sm text-muted-foreground">May 12, 2025</span>
                    </div>
                    <div className="mt-4 space-y-4">
                      {[
                        { name: "Alex Johnson", time: "08:45 AM", status: "Present" },
                        { name: "Maria Garcia", time: "08:52 AM", status: "Present" },
                        { name: "James Wilson", time: "09:05 AM", status: "Late" },
                        { name: "Sarah Chen", time: "08:30 AM", status: "Present" },
                        { name: "Robert Kim", time: "08:40 AM", status: "Present" },
                        { name: "Emily Davis", time: "--:-- --", status: "Absent" },
                      ].map((person, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-lg border p-3 transition-all hover:bg-muted/50"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`h-2 w-2 rounded-full ${
                                person.status === "Present"
                                  ? "bg-green-500"
                                  : person.status === "Late"
                                    ? "bg-amber-500"
                                    : "bg-red-500"
                              }`}
                            />
                            <span>{person.name}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{person.time}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-end">
                      <Button variant="ghost" size="sm" className="text-rose-500 hover:text-rose-600 hover:bg-rose-50">
                        View All
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our attendance tracker combines powerful features with an intuitive interface to make tracking
                  attendance effortless.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                  <Users className="h-6 w-6 text-rose-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">User Management</h3>
                  <p className="text-muted-foreground">
                    Easily manage users, groups, and permissions with our intuitive interface.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                  <CalendarDays className="h-6 w-6 text-rose-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Real-time Tracking</h3>
                  <p className="text-muted-foreground">
                    Track attendance in real-time with automatic notifications and status updates.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                  <LineChart className="h-6 w-6 text-rose-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Advanced Analytics</h3>
                  <p className="text-muted-foreground">
                    Gain insights with comprehensive reports and visual analytics dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 AttendX. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
