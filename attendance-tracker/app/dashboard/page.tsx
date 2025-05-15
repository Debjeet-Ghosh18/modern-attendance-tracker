"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Download,
  LineChart,
  MoreHorizontal,
  Users,
  UserCheck,
  UserX,
} from "lucide-react"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <CalendarDays className="h-6 w-6 text-rose-500" />
            <span>AttendX</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-rose-500 underline underline-offset-4">
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
      <main className="flex-1 bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Overview of attendance statistics and recent activity.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button size="sm" className="h-9 bg-rose-500 hover:bg-rose-600">
                <Clock className="mr-2 h-4 w-4" />
                Record Attendance
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mt-6" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
              >
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">245</div>
                      <p className="text-xs text-muted-foreground">+12 from last month</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Present Today</CardTitle>
                      <UserCheck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">198</div>
                      <p className="text-xs text-muted-foreground">80.8% attendance rate</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
                      <UserX className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">47</div>
                      <p className="text-xs text-muted-foreground">19.2% absence rate</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
                      <LineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">82.4%</div>
                      <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7"
              >
                <motion.div variants={itemVariants} className="col-span-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Attendance Trends</CardTitle>
                      <CardDescription>Daily attendance over the past 30 days</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] w-full rounded-md border p-4">
                        <div className="flex h-full w-full items-center justify-center">
                          <div className="space-y-2 text-center">
                            <LineChart className="mx-auto h-12 w-12 text-muted-foreground/60" />
                            <div className="text-sm font-medium">Attendance Chart</div>
                            <div className="text-xs text-muted-foreground">Showing attendance trends over time</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemVariants} className="col-span-3">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Latest attendance records</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: "Alex Johnson", time: "08:45 AM", status: "Present" },
                          { name: "Maria Garcia", time: "08:52 AM", status: "Present" },
                          { name: "James Wilson", time: "09:05 AM", status: "Late" },
                          { name: "Sarah Chen", time: "08:30 AM", status: "Present" },
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
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                        >
                          View All
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
            <TabsContent value="analytics">
              <div className="mt-6 grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Analytics</CardTitle>
                    <CardDescription>Comprehensive attendance analytics and insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] w-full rounded-md border p-4">
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="space-y-2 text-center">
                          <LineChart className="mx-auto h-12 w-12 text-muted-foreground/60" />
                          <div className="text-sm font-medium">Analytics Dashboard</div>
                          <div className="text-xs text-muted-foreground">
                            Detailed attendance analytics will be displayed here
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="recent">
              <div className="mt-6 grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest attendance records and activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Alex Johnson", time: "08:45 AM", status: "Present", date: "Today" },
                        { name: "Maria Garcia", time: "08:52 AM", status: "Present", date: "Today" },
                        { name: "James Wilson", time: "09:05 AM", status: "Late", date: "Today" },
                        { name: "Sarah Chen", time: "08:30 AM", status: "Present", date: "Today" },
                        { name: "Robert Kim", time: "08:40 AM", status: "Present", date: "Today" },
                        { name: "Emily Davis", time: "--:-- --", status: "Absent", date: "Today" },
                        { name: "Alex Johnson", time: "08:50 AM", status: "Present", date: "Yesterday" },
                        { name: "Maria Garcia", time: "08:45 AM", status: "Present", date: "Yesterday" },
                        { name: "James Wilson", time: "08:30 AM", status: "Present", date: "Yesterday" },
                        { name: "Sarah Chen", time: "--:-- --", status: "Absent", date: "Yesterday" },
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
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-muted-foreground">{person.date}</div>
                            <div className="text-sm">{person.time}</div>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
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
