"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, MessageSquare, Phone, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ConnectPage() {
  const [urgencyLevel, setUrgencyLevel] = useState("medium")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="container py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Connect with a Professional</h1>
        <p className="text-muted-foreground">
          Get support from licensed therapists and counselors when you need it most
        </p>
      </div>

      {submitted ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-green-600">Request Submitted</CardTitle>
            <CardDescription className="text-center">A professional will contact you shortly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Phone className="h-8 w-8 text-green-600" />
            </div>
            <p>
              Thank you for reaching out. Based on your urgency level, a mental health professional will contact you
              within:
            </p>
            <p className="text-2xl font-bold">
              {urgencyLevel === "high" ? "15 minutes" : urgencyLevel === "medium" ? "1 hour" : "24 hours"}
            </p>
            <p className="text-sm text-muted-foreground">
              If this is an emergency, please call your local emergency services or a crisis hotline immediately.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" onClick={() => setSubmitted(false)}>
              Back to Form
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Tabs defaultValue="request" className="max-w-2xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="request">Request Help</TabsTrigger>
            <TabsTrigger value="schedule">Schedule Session</TabsTrigger>
            <TabsTrigger value="crisis">Crisis Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="request" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Request Professional Support</CardTitle>
                <CardDescription>Fill out this form to be connected with a mental health professional</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input id="phone" type="tel" required />
                    </div>

                    <div className="space-y-2">
                      <Label>How would you like to be contacted?</Label>
                      <RadioGroup defaultValue="phone" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="contact-phone" />
                          <Label htmlFor="contact-phone" className="cursor-pointer">
                            Phone
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="video" id="contact-video" />
                          <Label htmlFor="contact-video" className="cursor-pointer">
                            Video Call
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="chat" id="contact-chat" />
                          <Label htmlFor="contact-chat" className="cursor-pointer">
                            Chat
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>Urgency level</Label>
                      <RadioGroup
                        defaultValue="medium"
                        className="grid grid-cols-3 gap-4"
                        onValueChange={setUrgencyLevel}
                      >
                        <div className="flex flex-col items-center space-y-2 border rounded-md p-4">
                          <RadioGroupItem value="low" id="urgency-low" className="sr-only" />
                          <Label htmlFor="urgency-low" className="cursor-pointer text-center">
                            <div className="font-medium mb-1">Low</div>
                            <div className="text-xs text-muted-foreground">Within 24 hours</div>
                          </Label>
                        </div>
                        <div className="flex flex-col items-center space-y-2 border rounded-md p-4">
                          <RadioGroupItem value="medium" id="urgency-medium" className="sr-only" />
                          <Label htmlFor="urgency-medium" className="cursor-pointer text-center">
                            <div className="font-medium mb-1">Medium</div>
                            <div className="text-xs text-muted-foreground">Within 1 hour</div>
                          </Label>
                        </div>
                        <div className="flex flex-col items-center space-y-2 border rounded-md p-4">
                          <RadioGroupItem value="high" id="urgency-high" className="sr-only" />
                          <Label htmlFor="urgency-high" className="cursor-pointer text-center">
                            <div className="font-medium mb-1">High</div>
                            <div className="text-xs text-muted-foreground">Within 15 minutes</div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="concern">Briefly describe your concern</Label>
                      <Textarea id="concern" placeholder="What's on your mind?" />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="mr-2 h-4 w-4" /> Request Support
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                Your information is kept confidential and secure.
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Schedule a Session</CardTitle>
                <CardDescription>Book a future appointment with a mental health professional</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Type of session</Label>
                      <RadioGroup defaultValue="therapy" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="therapy" id="session-therapy" />
                          <Label htmlFor="session-therapy" className="cursor-pointer">
                            Therapy
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="counseling" id="session-counseling" />
                          <Label htmlFor="session-counseling" className="cursor-pointer">
                            Counseling
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="psychiatry" id="session-psychiatry" />
                          <Label htmlFor="session-psychiatry" className="cursor-pointer">
                            Psychiatry
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred method</Label>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center space-y-2 border rounded-md p-4 cursor-pointer hover:bg-muted/50">
                          <Phone className="h-8 w-8 text-muted-foreground" />
                          <span className="text-sm font-medium">Phone Call</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2 border rounded-md p-4 cursor-pointer hover:bg-muted/50">
                          <Video className="h-8 w-8 text-muted-foreground" />
                          <span className="text-sm font-medium">Video Call</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2 border rounded-md p-4 cursor-pointer hover:bg-muted/50">
                          <MessageSquare className="h-8 w-8 text-muted-foreground" />
                          <span className="text-sm font-medium">Chat</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Preferred date</Label>
                        <div className="flex items-center border rounded-md px-3 py-2">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Select a date</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred time</Label>
                        <div className="flex items-center border rounded-md px-3 py-2">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Select a time</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialist">Specialist preference (optional)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="No preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="anxiety">Anxiety Specialist</SelectItem>
                          <SelectItem value="depression">Depression Specialist</SelectItem>
                          <SelectItem value="trauma">Trauma Specialist</SelectItem>
                          <SelectItem value="addiction">Addiction Specialist</SelectItem>
                          <SelectItem value="relationship">Relationship Counselor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" /> Schedule Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crisis" className="mt-6">
            <Card>
              <CardHeader className="bg-red-50 dark:bg-red-950/20">
                <CardTitle>Crisis Resources</CardTitle>
                <CardDescription>
                  If you're experiencing a mental health emergency, please use these resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="border border-red-200 rounded-md p-4 bg-red-50 dark:bg-red-950/10">
                  <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-2">
                    If you are in immediate danger
                  </h3>
                  <p className="mb-4">
                    If you are thinking about harming yourself or others, call emergency services immediately:
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 w-full">
                    <Phone className="mr-2 h-4 w-4" /> Call Emergency Services (911)
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Crisis Hotlines</h3>

                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-1">National Suicide Prevention Lifeline</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      24/7, free and confidential support for people in distress
                    </p>
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" /> 1-800-273-8255
                    </Button>
                  </div>

                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-1">Crisis Text Line</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Text HOME to 741741 to connect with a Crisis Counselor
                    </p>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" /> Text HOME to 741741
                    </Button>
                  </div>

                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-1">Veterans Crisis Line</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      For U.S. Military Veterans and their loved ones
                    </p>
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" /> 1-800-273-8255 (Press 1)
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}
