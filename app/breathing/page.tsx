"use client"

import { useState } from "react"
import { Info, Play, Pause, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function BreathingPage() {
  return (
    <div className="container py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Breathing Exercises</h1>
        <p className="text-muted-foreground">
          Guided breathing techniques to help reduce anxiety and stress in minutes
        </p>
      </div>

      <Tabs defaultValue="478" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="478">4-7-8 Technique</TabsTrigger>
          <TabsTrigger value="box">Box Breathing</TabsTrigger>
          <TabsTrigger value="diaphragmatic">Diaphragmatic</TabsTrigger>
        </TabsList>

        <TabsContent value="478" className="mt-6">
          <BreathingExercise
            title="4-7-8 Breathing Technique"
            description="Developed by Dr. Andrew Weil, this technique acts as a natural tranquilizer for the nervous system"
            instructions={[
              "Inhale quietly through your nose for 4 seconds",
              "Hold your breath for 7 seconds",
              "Exhale completely through your mouth for 8 seconds",
              "Repeat the cycle 3-4 times",
            ]}
            inhaleTime={4}
            holdTime={7}
            exhaleTime={8}
            benefits={[
              "Helps reduce anxiety",
              "Helps manage food cravings",
              "Controls emotional responses",
              "Assists with falling asleep",
            ]}
          />
        </TabsContent>

        <TabsContent value="box" className="mt-6">
          <BreathingExercise
            title="Box Breathing"
            description="Also known as square breathing, this technique is used by Navy SEALs to stay calm and focused"
            instructions={[
              "Inhale slowly through your nose for 4 seconds",
              "Hold your breath for 4 seconds",
              "Exhale slowly through your mouth for 4 seconds",
              "Hold your breath for 4 seconds",
              "Repeat the cycle",
            ]}
            inhaleTime={4}
            holdTime={4}
            exhaleTime={4}
            holdAfterExhale={4}
            benefits={["Reduces stress", "Improves concentration", "Regulates blood pressure", "Clears the mind"]}
          />
        </TabsContent>

        <TabsContent value="diaphragmatic" className="mt-6">
          <BreathingExercise
            title="Diaphragmatic Breathing"
            description="Also called belly breathing, this technique focuses on using your diaphragm properly"
            instructions={[
              "Place one hand on your chest and the other on your belly",
              "Breathe in slowly through your nose, feeling your belly expand",
              "Exhale slowly through pursed lips, feeling your belly contract",
              "Focus on the movement of your belly rather than your chest",
            ]}
            inhaleTime={4}
            holdTime={0}
            exhaleTime={6}
            benefits={[
              "Reduces stress",
              "Lowers blood pressure",
              "Improves core muscle stability",
              "Increases oxygen supply to the blood",
            ]}
          />
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Benefits of Breathing Exercises</h2>
        <p className="mb-4">Controlled breathing exercises have been shown to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Activate the parasympathetic nervous system (rest and digest)</li>
          <li>Reduce levels of stress hormones like cortisol</li>
          <li>Lower heart rate and blood pressure</li>
          <li>Improve focus and mental clarity</li>
          <li>Help manage symptoms of anxiety, panic, and PTSD</li>
        </ul>
      </div>
    </div>
  )
}

interface BreathingExerciseProps {
  title: string
  description: string
  instructions: string[]
  inhaleTime: number
  holdTime: number
  exhaleTime: number
  holdAfterExhale?: number
  benefits: string[]
}

function BreathingExercise({
  title,
  description,
  instructions,
  inhaleTime,
  holdTime,
  exhaleTime,
  holdAfterExhale = 0,
  benefits,
}: BreathingExerciseProps) {
  const [isActive, setIsActive] = useState(false)
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale" | "holdAfterExhale">("inhale")
  const [timeLeft, setTimeLeft] = useState(inhaleTime)

  const totalCycleTime = inhaleTime + holdTime + exhaleTime + holdAfterExhale

  const startExercise = () => {
    setIsActive(true)
    setPhase("inhale")
    setTimeLeft(inhaleTime)
  }

  const pauseExercise = () => {
    setIsActive(false)
  }

  const resetExercise = () => {
    setIsActive(false)
    setPhase("inhale")
    setTimeLeft(inhaleTime)
  }

  // This would need to be implemented with useEffect in a real app
  // to handle the timer logic and phase transitions

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h3 className="font-medium">Instructions:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </CardContent>
        <CardFooter>
          <div className="space-y-2 w-full">
            <h3 className="font-medium">Benefits:</h3>
            <ul className="grid grid-cols-2 gap-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-sm">
                  <div className="h-2 w-2 rounded-full bg-teal-500 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Interactive Guide</CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Info className="h-4 w-4" />
                    <span className="sr-only">Info</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Follow the animation and instructions</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="relative w-64 h-64 mb-6">
            <div
              className={`absolute inset-0 rounded-full border-4 ${
                isActive ? "border-teal-500" : "border-muted-foreground"
              }`}
              style={{
                animation: isActive ? `breathe ${totalCycleTime}s infinite ease-in-out` : "none",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-medium">
              {isActive ? (
                <div className="text-center">
                  <div>
                    {phase === "inhale" ? "Inhale" : phase === "hold" ? "Hold" : phase === "exhale" ? "Exhale" : "Hold"}
                  </div>
                  <div className="text-4xl mt-2">{timeLeft}</div>
                </div>
              ) : (
                "Press start"
              )}
            </div>
          </div>

          <div className="flex gap-4">
            {!isActive ? (
              <Button onClick={startExercise} className="bg-teal-600 hover:bg-teal-700">
                <Play className="mr-2 h-4 w-4" /> Start
              </Button>
            ) : (
              <Button onClick={pauseExercise} variant="outline">
                <Pause className="mr-2 h-4 w-4" /> Pause
              </Button>
            )}
            <Button onClick={resetExercise} variant="outline">
              <RotateCcw className="mr-2 h-4 w-4" /> Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
