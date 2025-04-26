"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Tranquil Mind</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/music" className="text-sm font-medium transition-colors hover:text-primary">
            Music Therapy
          </Link>
          <Link href="/breathing" className="text-sm font-medium transition-colors hover:text-primary">
            Breathing Exercises
          </Link>
          <Link href="/games" className="text-sm font-medium transition-colors hover:text-primary">
            Mind Games
          </Link>
          <Link href="/journal" className="text-sm font-medium transition-colors hover:text-primary">
            Mood Journal
          </Link>
          <Link href="/community" className="text-sm font-medium transition-colors hover:text-primary">
            Community
          </Link>
          <Link href="/connect">
            <Button variant="default" className="bg-teal-600 hover:bg-teal-700">
              Talk to a Professional
            </Button>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="/music"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Music Therapy
            </Link>
            <Link
              href="/breathing"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Breathing Exercises
            </Link>
            <Link
              href="/games"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Mind Games
            </Link>
            <Link
              href="/journal"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Mood Journal
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link href="/connect" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700">
                Talk to a Professional
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
