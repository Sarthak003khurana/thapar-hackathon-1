"use client"

import { useState } from "react"
import { Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function QuickRelief() {
  const [isBreathingActive, setIsBreathingActive] = useState(false)

  return (
    <section id="quick-relief" className="container py-12 space-y-6">
      <h2 className="text-2xl font-bold text-center">Need Relief Right Now?</h2>

      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-medium">4-7-8 Breathing Exercise</h3>
            <p className="text-center text-muted-foreground">
              A simple breathing technique to quickly calm your nervous system
            </p>

            <div className="relative w-48 h-48 my-4">
              <div
                className={`absolute inset-0 rounded-full border-4 border-teal-500 ${
                  isBreathingActive ? "animate-pulse" : ""
                }`}
                style={{
                  animation: isBreathingActive ? "breathe 19s infinite ease-in-out" : "none",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-lg font-medium">
                {isBreathingActive ? "Follow the circle" : "Press play to start"}
              </div>
            </div>

            <Button
              onClick={() => setIsBreathingActive(!isBreathingActive)}
              className="bg-teal-600 hover:bg-teal-700"
              size="lg"
            >
              {isBreathingActive ? (
                <>
                  <Pause className="mr-2 h-4 w-4" /> Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> Start
                </>
              )}
            </Button>

            {isBreathingActive && (
              <p className="text-center animate-fade-in">
                Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
