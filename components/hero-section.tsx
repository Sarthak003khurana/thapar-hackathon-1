import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Find Peace in the Midst of Chaos
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Your safe space for anxiety and stress relief, with instant access to professional help when you need it
              most.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/connect">
              <Button className="bg-teal-600 hover:bg-teal-700">
                Talk to a Professional <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#quick-relief">
              <Button variant="outline">Quick Relief Techniques</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
