"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, CalendarDays, Download, FileText, LineChart, PieChart } from "lucide-react"
import { motion } from "framer-motion"

export default function ReportsPage() {
  const [reportType, setReportType] = useState("attendance")
  const [timeRange, setTimeRange] = useState("month")

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
            <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              Dashboard
            </Link>
            <Link href="/attendance" className="text-sm font-medium hover:underline underline-offset-4">
              Attendance
            </Link>
            <Link href="/reports" className="text-sm font-medium text-rose-500 underline underline-offset-4">
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
              <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
              <p className="text-muted-foreground">Generate and analyze attendance reports.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
              <Button size="sm" className="h-9 bg-rose-500 hover:bg-rose-600">
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[250px_1fr]">
            <Card>
              <CardHeader>
                <CardTitle>Report Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Report Type</label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="attendance">Attendance Summary</SelectItem>
                      <SelectItem value="department">Department Analysis</SelectItem>
                      <SelectItem value="trends">Attendance Trends</SelectItem>
                      <SelectItem value="individual">Individual Reports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Time Range</label>
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Last Week</SelectItem>
                      <SelectItem value="month">Last Month</SelectItem>
                      <SelectItem value="quarter">Last Quarter</SelectItem>
                      <SelectItem value="year">Last Year</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {reportType === "department" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Department</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="hr">HR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                {reportType === "individual" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Employee</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select employee" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Employees</SelectItem>
                        <SelectItem value="alex">Alex Johnson</SelectItem>
                        <SelectItem value="maria">Maria Garcia</SelectItem>
                        <SelectItem value="james">James Wilson</SelectItem>
                        <SelectItem value="sarah">Sarah Chen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <Button className="w-full bg-rose-500 hover:bg-rose-600">Generate Report</Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {reportType === "attendance"
                      ? "Attendance Summary"
                      : reportType === "department"
                        ? "Department Analysis"
                        : reportType === "trends"
                          ? "Attendance Trends"
                          : "Individual Reports"}
                  </CardTitle>
                  <CardDescription>
                    {timeRange === "week"
                      ? "Data for the last week"
                      : timeRange === "month"
                        ? "Data for the last month"
                        : timeRange === "quarter"
                          ? "Data for the last quarter"
                          : "Data for the last year"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="chart">
                    <TabsList className="grid w-full max-w-md grid-cols-3">
                      <TabsTrigger value="chart">Chart</TabsTrigger>
                      <TabsTrigger value="summary">Summary</TabsTrigger>
                      <TabsTrigger value="data">Data</TabsTrigger>
                    </TabsList>
                    <TabsContent value="chart" className="pt-4">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid gap-4 md:grid-cols-2"
                      >
                        <motion.div variants={itemVariants}>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="h-[200px] w-full rounded-md border p-4">
                                <div className="flex h-full w-full items-center justify-center">
                                  <div className="space-y-2 text-center">
                                    <LineChart className="mx-auto h-12 w-12 text-muted-foreground/60" />
                                    <div className="text-sm font-medium">Attendance Rate Chart</div>
                                    <div className="text-xs text-muted-foreground">
                                      Showing attendance rate over time
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium">Attendance by Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="h-[200px] w-full rounded-md border p-4">
                                <div className="flex h-full w-full items-center justify-center">
                                  <div className="space-y-2 text-center">
                                    <PieChart className="mx-auto h-12 w-12 text-muted-foreground/60" />
                                    <div className="text-sm font-medium">Status Distribution</div>
                                    <div className="text-xs text-muted-foreground">
                                      Present, Late, and Absent distribution
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium">Department Comparison</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="h-[200px] w-full rounded-md border p-4">
                                <div className="flex h-full w-full items-center justify-center">
                                  <div className="space-y-2 text-center">
                                    <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground/60" />
                                    <div className="text-sm font-medium">Department Attendance</div>
                                    <div className="text-xs text-muted-foreground">
                                      Comparing attendance across departments
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium">Attendance Trends</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="h-[200px] w-full rounded-md border p-4">
                                <div className="flex h-full w-full items-center justify-center">
                                  <div className="space-y-2 text-center">
                                    <LineChart className="mx-auto h-12 w-12 text-muted-foreground/60" />
                                    <div className="text-sm font-medium">Trend Analysis</div>
                                    <div className="text-xs text-muted-foreground">
                                      Showing attendance patterns over time
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </motion.div>
                    </TabsContent>
                    <TabsContent value="summary" className="pt-4">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid gap-4 md:grid-cols-2"
                      >
                        <motion.div variants={itemVariants}>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">82.4%</div>
                              <p className="text-xs text-muted-foreground">+2.1% from previous period</p>
                              <div className="mt-4 h-2 w-full rounded-full bg-muted">
                                <div className="h-2 w-[82.4%] rounded-full bg-rose-500" />
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium">Status Breakdown</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                  <div className="text-lg font-bold text-green-500">82.4%</div>
                                  <p className="text-xs text-muted-foreground">Present</p>
                                </div>
                                <div>
                                  <div className="text-lg font-bold text-amber-500">10.2%</div>
                                  <p className="text-xs text-muted-foreground">Late</p>
                                </div>
                                <div>
                                  <div className="text-lg font-bold text-red-500">7.4%</div>
                                  <p className="text-xs text-muted-foreground">Absent</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium">Department Performance</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm">Engineering</span>
                                    <span className="text-sm font-medium">85.2%</span>
                                  </div>
                                  <div className="h-2 w-full rounded-full bg-muted">
                                    <div className="h-2 w-[85.2%] rounded-full bg-rose-500" />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm">Marketing</span>
                                    <span className="text-sm font-medium">78.9%</span>
                                  </div>
                                  <div className="h-2 w-full rounded-full bg-muted">
                                    <div className="h-2 w-[78.9%] rounded-full bg-rose-500" />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm">Design</span>
                                    <span className="text-sm font-medium">82.1%</span>
                                  </div>
                                  <div className="h-2 w-full rounded-full bg-muted">
                                    <div className="h-2 w-[82.1%] rounded-full bg-rose-500" />
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium">Key Insights</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <div className="mt-0.5 h-2 w-2 rounded-full bg-rose-500" />
                                  <span>Overall attendance has improved by 2.1% compared to last period</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="mt-0.5 h-2 w-2 rounded-full bg-rose-500" />
                                  <span>Engineering department has the highest attendance rate at 85.2%</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="mt-0.5 h-2 w-2 rounded-full bg-rose-500" />
                                  <span>Monday has the highest attendance rate at 87.3%</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="mt-0.5 h-2 w-2 rounded-full bg-rose-500" />
                                  <span>Late arrivals have decreased by 1.5% compared to last period</span>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </motion.div>
                    </TabsContent>
                    <TabsContent value="data" className="pt-4">
                      <Card>
                        <CardContent className="p-0">
                          <div className="rounded-md border">
                            <div className="grid grid-cols-12 gap-4 bg-muted/50 p-4 font-medium">
                              <div className="col-span-3">Date</div>
                              <div className="col-span-3">Department</div>
                              <div className="col-span-2">Present</div>
                              <div className="col-span-2">Late</div>
                              <div className="col-span-2">Absent</div>
                            </div>
                            <div className="divide-y">
                              {[
                                {
                                  date: "May 12, 2025",
                                  department: "All",
                                  present: "82.4%",
                                  late: "10.2%",
                                  absent: "7.4%",
                                },
                                {
                                  date: "May 12, 2025",
                                  department: "Engineering",
                                  present: "85.2%",
                                  late: "9.1%",
                                  absent: "5.7%",
                                },
                                {
                                  date: "May 12, 2025",
                                  department: "Marketing",
                                  present: "78.9%",
                                  late: "12.3%",
                                  absent: "8.8%",
                                },
                                {
                                  date: "May 12, 2025",
                                  department: "Design",
                                  present: "82.1%",
                                  late: "10.5%",
                                  absent: "7.4%",
                                },
                                {
                                  date: "May 12, 2025",
                                  department: "Finance",
                                  present: "83.7%",
                                  late: "8.9%",
                                  absent: "7.4%",
                                },
                                {
                                  date: "May 12, 2025",
                                  department: "HR",
                                  present: "81.2%",
                                  late: "10.1%",
                                  absent: "8.7%",
                                },
                                {
                                  date: "May 11, 2025",
                                  department: "All",
                                  present: "81.9%",
                                  late: "10.5%",
                                  absent: "7.6%",
                                },
                                {
                                  date: "May 11, 2025",
                                  department: "Engineering",
                                  present: "84.7%",
                                  late: "9.3%",
                                  absent: "6.0%",
                                },
                                {
                                  date: "May 11, 2025",
                                  department: "Marketing",
                                  present: "78.5%",
                                  late: "12.5%",
                                  absent: "9.0%",
                                },
                                {
                                  date: "May 11, 2025",
                                  department: "Design",
                                  present: "81.8%",
                                  late: "10.7%",
                                  absent: "7.5%",
                                },
                              ].map((item, i) => (
                                <div
                                  key={i}
                                  className="grid grid-cols-12 gap-4 p-4 transition-colors hover:bg-muted/30"
                                >
                                  <div className="col-span-3">{item.date}</div>
                                  <div className="col-span-3">{item.department}</div>
                                  <div className="col-span-2">{item.present}</div>
                                  <div className="col-span-2">{item.late}</div>
                                  <div className="col-span-2">{item.absent}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
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
