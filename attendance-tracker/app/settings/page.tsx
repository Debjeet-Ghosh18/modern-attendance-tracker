"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Bell, CalendarDays, Clock, Globe, Lock, Save, User, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

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
            <Link href="/reports" className="text-sm font-medium hover:underline underline-offset-4">
              Reports
            </Link>
            <Link href="/settings" className="text-sm font-medium text-rose-500 underline underline-offset-4">
              Settings
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">Manage your account settings and preferences.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[200px_1fr]">
            <Card>
              <CardContent className="p-4">
                <nav className="flex flex-col space-y-1">
                  <Button
                    variant={activeTab === "general" ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("general")}
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    General
                  </Button>
                  <Button
                    variant={activeTab === "account" ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("account")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </Button>
                  <Button
                    variant={activeTab === "notifications" ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("notifications")}
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Button
                    variant={activeTab === "attendance" ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("attendance")}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    Attendance
                  </Button>
                  <Button
                    variant={activeTab === "users" ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("users")}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Users
                  </Button>
                  <Button
                    variant={activeTab === "security" ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("security")}
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Security
                  </Button>
                </nav>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {activeTab === "general" && (
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <motion.div variants={itemVariants}>
                    <Card>
                      <CardHeader>
                        <CardTitle>General Settings</CardTitle>
                        <CardDescription>Manage general application settings</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company Name</Label>
                          <Input id="company-name" defaultValue="Acme Inc." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone</Label>
                          <Select defaultValue="utc-8">
                            <SelectTrigger id="timezone">
                              <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="utc-12">UTC-12:00</SelectItem>
                              <SelectItem value="utc-11">UTC-11:00</SelectItem>
                              <SelectItem value="utc-10">UTC-10:00</SelectItem>
                              <SelectItem value="utc-9">UTC-09:00</SelectItem>
                              <SelectItem value="utc-8">UTC-08:00 (PST)</SelectItem>
                              <SelectItem value="utc-7">UTC-07:00 (MST)</SelectItem>
                              <SelectItem value="utc-6">UTC-06:00 (CST)</SelectItem>
                              <SelectItem value="utc-5">UTC-05:00 (EST)</SelectItem>
                              <SelectItem value="utc-4">UTC-04:00</SelectItem>
                              <SelectItem value="utc-3">UTC-03:00</SelectItem>
                              <SelectItem value="utc-2">UTC-02:00</SelectItem>
                              <SelectItem value="utc-1">UTC-01:00</SelectItem>
                              <SelectItem value="utc">UTC+00:00</SelectItem>
                              <SelectItem value="utc+1">UTC+01:00</SelectItem>
                              <SelectItem value="utc+2">UTC+02:00</SelectItem>
                              <SelectItem value="utc+3">UTC+03:00</SelectItem>
                              <SelectItem value="utc+4">UTC+04:00</SelectItem>
                              <SelectItem value="utc+5">UTC+05:00</SelectItem>
                              <SelectItem value="utc+5:30">UTC+05:30 (IST)</SelectItem>
                              <SelectItem value="utc+6">UTC+06:00</SelectItem>
                              <SelectItem value="utc+7">UTC+07:00</SelectItem>
                              <SelectItem value="utc+8">UTC+08:00</SelectItem>
                              <SelectItem value="utc+9">UTC+09:00 (JST)</SelectItem>
                              <SelectItem value="utc+10">UTC+10:00</SelectItem>
                              <SelectItem value="utc+11">UTC+11:00</SelectItem>
                              <SelectItem value="utc+12">UTC+12:00</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date-format">Date Format</Label>
                          <Select defaultValue="mm-dd-yyyy">
                            <SelectTrigger id="date-format">
                              <SelectValue placeholder="Select date format" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                              <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                              <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time-format">Time Format</Label>
                          <Select defaultValue="12h">
                            <SelectTrigger id="time-format">
                              <SelectValue placeholder="Select time format" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                              <SelectItem value="24h">24-hour</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="dark-mode" className="cursor-pointer">
                            Dark Mode
                          </Label>
                          <Switch id="dark-mode" />
                        </div>
                        <Button className="bg-rose-500 hover:bg-rose-600">
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "account" && (
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <motion.div variants={itemVariants}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Account Settings</CardTitle>
                        <CardDescription>Manage your account information</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" defaultValue="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Role</Label>
                          <Input id="role" defaultValue="Administrator" disabled />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Select defaultValue="management">
                            <SelectTrigger id="department">
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="management">Management</SelectItem>
                              <SelectItem value="engineering">Engineering</SelectItem>
                              <SelectItem value="marketing">Marketing</SelectItem>
                              <SelectItem value="design">Design</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="hr">HR</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="bg-rose-500 hover:bg-rose-600">
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "notifications" && (
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <motion.div variants={itemVariants}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Notification Settings</CardTitle>
                        <CardDescription>Manage your notification preferences</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="email-notifications" className="cursor-pointer">
                            Email Notifications
                          </Label>
                          <Switch id="email-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="push-notifications" className="cursor-pointer">
                            Push Notifications
                          </Label>
                          <Switch id="push-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="attendance-alerts" className="cursor-pointer">
                            Attendance Alerts
                          </Label>
                          <Switch id="attendance-alerts" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="report-notifications" className="cursor-pointer">
                            Report Notifications
                          </Label>
                          <Switch id="report-notifications" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="system-notifications" className="cursor-pointer">
                            System Notifications
                          </Label>
                          <Switch id="system-notifications" defaultChecked />
                        </div>
                        <Button className="bg-rose-500 hover:bg-rose-600">
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "attendance" && (
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <motion.div variants={itemVariants}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Attendance Settings</CardTitle>
                        <CardDescription>Configure attendance tracking settings</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="work-start">Work Start Time</Label>
                          <Input id="work-start" type="time" defaultValue="09:00" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="work-end">Work End Time</Label>
                          <Input id="work-end" type="time" defaultValue="17:00" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="grace-period">Grace Period (minutes)</Label>
                          <Input id="grace-period" type="number" defaultValue="15" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="work-days">Work Days</Label>
                          <Select defaultValue="weekdays">
                            <SelectTrigger id="work-days">
                              <SelectValue placeholder="Select work days" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="weekdays">Weekdays (Mon-Fri)</SelectItem>
                              <SelectItem value="all">All Days</SelectItem>
                              <SelectItem value="custom">Custom</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="auto-absent" className="cursor-pointer">
                            Auto-mark Absent
                          </Label>
                          <Switch id="auto-absent" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="weekend-tracking" className="cursor-pointer">
                            Weekend Tracking
                          </Label>
                          <Switch id="weekend-tracking" />
                        </div>
                        <Button className="bg-rose-500 hover:bg-rose-600">
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "users" && (
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <motion.div variants={itemVariants}>
                    <Card>
                      <CardHeader>
                        <CardTitle>User Management</CardTitle>
                        <CardDescription>Manage users and permissions</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="user-registration" className="cursor-pointer">
                            Allow User Registration
                          </Label>
                          <Switch id="user-registration" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="admin-approval" className="cursor-pointer">
                            Require Admin Approval
                          </Label>
                          <Switch id="admin-approval" defaultChecked />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="default-role">Default User Role</Label>
                          <Select defaultValue="employee">
                            <SelectTrigger id="default-role">
                              <SelectValue placeholder="Select default role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="employee">Employee</SelectItem>
                              <SelectItem value="manager">Manager</SelectItem>
                              <SelectItem value="admin">Administrator</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="user-self-edit" className="cursor-pointer">
                            Allow Users to Edit Profile
                          </Label>
                          <Switch id="user-self-edit" defaultChecked />
                        </div>
                        <Button className="bg-rose-500 hover:bg-rose-600">
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "security" && (
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <motion.div variants={itemVariants}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Security Settings</CardTitle>
                        <CardDescription>Manage security and privacy settings</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="two-factor" className="cursor-pointer">
                            Two-Factor Authentication
                          </Label>
                          <Switch id="two-factor" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                          <Input id="session-timeout" type="number" defaultValue="30" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password-expiry" className="cursor-pointer">
                            Password Expiry
                          </Label>
                          <Switch id="password-expiry" defaultChecked />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password-expiry-days">Password Expiry Days</Label>
                          <Input id="password-expiry-days" type="number" defaultValue="90" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="data-encryption" className="cursor-pointer">
                            Data Encryption
                          </Label>
                          <Switch id="data-encryption" defaultChecked />
                        </div>
                        <Button className="bg-rose-500 hover:bg-rose-600">
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )}
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
