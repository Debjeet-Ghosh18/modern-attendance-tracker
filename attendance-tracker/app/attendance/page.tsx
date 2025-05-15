"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Check, Clock, Filter, Search, X } from "lucide-react"
import { motion } from "framer-motion"

export default function AttendancePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
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

  // Mock attendance data
  const attendanceData = [
    { id: 1, name: "Alex Johnson", status: "Present", time: "08:45 AM", department: "Engineering" },
    { id: 2, name: "Maria Garcia", status: "Present", time: "08:52 AM", department: "Marketing" },
    { id: 3, name: "James Wilson", status: "Late", time: "09:05 AM", department: "Engineering" },
    { id: 4, name: "Sarah Chen", status: "Present", time: "08:30 AM", department: "Design" },
    { id: 5, name: "Robert Kim", status: "Present", time: "08:40 AM", department: "Finance" },
    { id: 6, name: "Emily Davis", status: "Absent", time: "--:-- --", department: "HR" },
    { id: 7, name: "Michael Brown", status: "Present", time: "08:35 AM", department: "Engineering" },
    { id: 8, name: "Lisa Wang", status: "Late", time: "09:15 AM", department: "Marketing" },
    { id: 9, name: "David Lee", status: "Present", time: "08:50 AM", department: "Finance" },
    { id: 10, name: "Jennifer Smith", status: "Absent", time: "--:-- --", department: "Design" },
  ]

  // Filter attendance data based on search query and status
  const filteredData = attendanceData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.department.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "all" || item.status.toLowerCase() === selectedStatus.toLowerCase()
    return matchesSearch && matchesStatus
  })

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
            <Link href="/attendance" className="text-sm font-medium text-rose-500 underline underline-offset-4">
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
              <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
              <p className="text-muted-foreground">Manage and track daily attendance records.</p>
            </div>
            <div className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="h-9 bg-rose-500 hover:bg-rose-600">
                    <Clock className="mr-2 h-4 w-4" />
                    Record Attendance
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Record Attendance</DialogTitle>
                    <DialogDescription>Enter attendance details for a user manually.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="user">User</Label>
                      <Select>
                        <SelectTrigger id="user">
                          <SelectValue placeholder="Select user" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alex">Alex Johnson</SelectItem>
                          <SelectItem value="maria">Maria Garcia</SelectItem>
                          <SelectItem value="james">James Wilson</SelectItem>
                          <SelectItem value="sarah">Sarah Chen</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="status">Status</Label>
                      <Select>
                        <SelectTrigger id="status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="present">Present</SelectItem>
                          <SelectItem value="late">Late</SelectItem>
                          <SelectItem value="absent">Absent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" type="time" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="bg-rose-500 hover:bg-rose-600">
                      Save
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Tabs defaultValue="list" className="mt-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            <TabsContent value="list">
              <Card className="mt-4">
                <CardHeader>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle>Attendance Records</CardTitle>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search users or departments..."
                          className="pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                        <SelectTrigger className="w-[180px]">
                          <Filter className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Statuses</SelectItem>
                          <SelectItem value="present">Present</SelectItem>
                          <SelectItem value="late">Late</SelectItem>
                          <SelectItem value="absent">Absent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="rounded-md border"
                  >
                    <div className="grid grid-cols-12 gap-4 bg-muted/50 p-4 font-medium">
                      <div className="col-span-5">Name</div>
                      <div className="col-span-2">Status</div>
                      <div className="col-span-2">Time</div>
                      <div className="col-span-3">Department</div>
                    </div>
                    <div className="divide-y">
                      {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                          <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="grid grid-cols-12 gap-4 p-4 transition-colors hover:bg-muted/30"
                          >
                            <div className="col-span-5">{item.name}</div>
                            <div className="col-span-2">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  item.status === "Present"
                                    ? "bg-green-100 text-green-800"
                                    : item.status === "Late"
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-red-100 text-red-800"
                                }`}
                              >
                                {item.status === "Present" ? (
                                  <Check className="mr-1 h-3 w-3" />
                                ) : item.status === "Late" ? (
                                  <Clock className="mr-1 h-3 w-3" />
                                ) : (
                                  <X className="mr-1 h-3 w-3" />
                                )}
                                {item.status}
                              </span>
                            </div>
                            <div className="col-span-2">{item.time}</div>
                            <div className="col-span-3">{item.department}</div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="p-8 text-center text-muted-foreground">No matching records found</div>
                      )}
                    </div>
                  </motion.div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredData.length} of {attendanceData.length} records
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="calendar">
              <div className="mt-4 grid gap-4 md:grid-cols-[300px_1fr]">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Date</CardTitle>
                    <CardDescription>View attendance for a specific date</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {date
                        ? date.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "Select a date"}
                    </CardTitle>
                    <CardDescription>Attendance records for the selected date</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="rounded-md border"
                    >
                      <div className="grid grid-cols-12 gap-4 bg-muted/50 p-4 font-medium">
                        <div className="col-span-5">Name</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-2">Time</div>
                        <div className="col-span-3">Department</div>
                      </div>
                      <div className="divide-y">
                        {attendanceData.map((item) => (
                          <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="grid grid-cols-12 gap-4 p-4 transition-colors hover:bg-muted/30"
                          >
                            <div className="col-span-5">{item.name}</div>
                            <div className="col-span-2">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  item.status === "Present"
                                    ? "bg-green-100 text-green-800"
                                    : item.status === "Late"
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-red-100 text-red-800"
                                }`}
                              >
                                {item.status === "Present" ? (
                                  <Check className="mr-1 h-3 w-3" />
                                ) : item.status === "Late" ? (
                                  <Clock className="mr-1 h-3 w-3" />
                                ) : (
                                  <X className="mr-1 h-3 w-3" />
                                )}
                                {item.status}
                              </span>
                            </div>
                            <div className="col-span-2">{item.time}</div>
                            <div className="col-span-3">{item.department}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
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
