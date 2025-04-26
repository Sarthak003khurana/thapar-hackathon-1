import Link from "next/link"
import { ArrowRight, Brain, Headphones, TreesIcon as Lungs, Phone, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import QuickRelief from "@/components/quick-relief"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <QuickRelief />

        <section className="container py-12 space-y-6 md:py-16 lg:py-24">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive Support for Your Mental Wellbeing
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore our range of tools designed to help you manage stress and anxiety
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Music Therapy</CardTitle>
                  <Headphones className="h-6 w-6 text-teal-500" />
                </div>
                <CardDescription>Curated playlists to calm your mind</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Discover music scientifically proven to reduce anxiety and promote relaxation.</p>
              </CardContent>
              <CardFooter>
                <Link href="/music" className="w-full">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Explore Music <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Breathing Exercises</CardTitle>
                  <Lungs className="h-6 w-6 text-blue-500" />
                </div>
                <CardDescription>Guided techniques for instant calm</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Learn effective breathing patterns that help reduce stress and anxiety in minutes.</p>
              </CardContent>
              <CardFooter>
                <Link href="/breathing" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Breathing <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Mind Games</CardTitle>
                  <Brain className="h-6 w-6 text-purple-500" />
                </div>
                <CardDescription>Engaging activities to distract and relax</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Simple yet engaging games designed to shift focus away from anxious thoughts.</p>
              </CardContent>
              <CardFooter>
                <Link href="/games" className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Play Games <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Professional Help</CardTitle>
                  <Phone className="h-6 w-6 text-red-500" />
                </div>
                <CardDescription>Connect with mental health professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <p>One-click access to licensed therapists and counselors when you need to talk.</p>
              </CardContent>
              <CardFooter>
                <Link href="/connect" className="w-full">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Connect Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Mood Journal</CardTitle>
                  <Users className="h-6 w-6 text-amber-500" />
                </div>
                <CardDescription>Track your emotional wellbeing</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Record your daily moods and identify patterns to better manage your mental health.</p>
              </CardContent>
              <CardFooter>
                <Link href="/journal" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Start Journal <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Community Support</CardTitle>
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <CardDescription>Connect with others on similar journeys</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Join moderated support groups where you can share experiences and coping strategies.</p>
              </CardContent>
              <CardFooter>
                <Link href="/community" className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Join Community <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
