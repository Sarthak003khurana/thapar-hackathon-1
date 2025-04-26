"use client"

import { useState } from "react"
import { Brain, Dices, Puzzle, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GamesPage() {
  return (
    <div className="container py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Mind Games</h1>
        <p className="text-muted-foreground">
          Simple games to distract your mind from anxious thoughts and promote relaxation
        </p>
      </div>

      <Tabs defaultValue="color" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="color">Color Breathing</TabsTrigger>
          <TabsTrigger value="memory">Memory Match</TabsTrigger>
          <TabsTrigger value="puzzle">Zen Puzzle</TabsTrigger>
          <TabsTrigger value="focus">Focus Dot</TabsTrigger>
        </TabsList>

        <TabsContent value="color" className="mt-6">
          <ColorBreathingGame />
        </TabsContent>

        <TabsContent value="memory" className="mt-6">
          <MemoryMatchGame />
        </TabsContent>

        <TabsContent value="puzzle" className="mt-6">
          <div className="text-center py-12">
            <Puzzle className="h-16 w-16 mx-auto mb-4 text-purple-500" />
            <h2 className="text-2xl font-bold mb-2">Zen Puzzle</h2>
            <p className="text-muted-foreground mb-6">A relaxing puzzle game with no time pressure</p>
            <Button className="bg-purple-600 hover:bg-purple-700">Start Game</Button>
          </div>
        </TabsContent>

        <TabsContent value="focus" className="mt-6">
          <div className="text-center py-12">
            <Zap className="h-16 w-16 mx-auto mb-4 text-amber-500" />
            <h2 className="text-2xl font-bold mb-2">Focus Dot</h2>
            <p className="text-muted-foreground mb-6">A simple meditation aid to help focus your attention</p>
            <Button className="bg-amber-600 hover:bg-amber-700">Start Game</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">How Games Help with Anxiety</h2>
        <p className="mb-4">Simple games can be powerful tools for managing anxiety because they:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redirect attention away from anxious thoughts</li>
          <li>Engage the mind in a pleasant, low-stress activity</li>
          <li>Provide a sense of control and accomplishment</li>
          <li>Activate the brain's reward system, releasing dopamine</li>
          <li>Create a mindful state of flow and present-moment awareness</li>
        </ul>
      </div>
    </div>
  )
}

function ColorBreathingGame() {
  const [currentColor, setCurrentColor] = useState("#4ade80") // Green
  const [isBreathing, setIsBreathing] = useState(false)

  const colors = [
    { name: "Green", hex: "#4ade80", emotion: "Calm" },
    { name: "Blue", hex: "#60a5fa", emotion: "Peace" },
    { name: "Purple", hex: "#a78bfa", emotion: "Wisdom" },
    { name: "Pink", hex: "#f472b6", emotion: "Love" },
    { name: "Yellow", hex: "#facc15", emotion: "Joy" },
  ]

  const startBreathing = (color: string) => {
    setCurrentColor(color)
    setIsBreathing(true)
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Color Breathing</CardTitle>
          <CardDescription>Visualize breathing in colors associated with positive emotions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Select a color below to begin. As you breathe in, imagine drawing in that color and its associated emotion.
            As you breathe out, imagine releasing tension and negativity.
          </p>
          <div className="grid grid-cols-5 gap-2">
            {colors.map((color) => (
              <Button
                key={color.name}
                className="p-0 h-12 w-full"
                style={{ backgroundColor: color.hex }}
                onClick={() => startBreathing(color.hex)}
              >
                <span className="sr-only">{color.name}</span>
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-2 mt-1">
            {colors.map((color) => (
              <div key={color.name} className="text-center text-xs">
                {color.emotion}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Color therapy has been used for centuries to influence mood and promote healing.
          </p>
        </CardFooter>
      </Card>

      <div className="flex items-center justify-center">
        <div
          className="w-64 h-64 rounded-full transition-all duration-500 flex items-center justify-center text-white text-xl font-medium"
          style={{
            backgroundColor: currentColor,
            animation: isBreathing ? "pulse 8s infinite ease-in-out" : "none",
          }}
        >
          {isBreathing ? "Breathe with the circle" : "Select a color"}
        </div>
      </div>
    </div>
  )
}

function MemoryMatchGame() {
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <div className="space-y-6">
      {!gameStarted ? (
        <div className="text-center py-12">
          <Brain className="h-16 w-16 mx-auto mb-4 text-blue-500" />
          <h2 className="text-2xl font-bold mb-2">Memory Match</h2>
          <p className="text-muted-foreground mb-6">Find matching pairs of cards to complete the game</p>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setGameStarted(true)}>
            Start Game
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-medium">Moves:</span> 0
            </div>
            <Button variant="outline" size="sm" onClick={() => setGameStarted(false)}>
              Reset Game
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-muted rounded-md flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors"
              >
                <Dices className="h-8 w-8 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
