"use client"

import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, Edit, Save, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JournalPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [entries, setEntries] = useState<JournalEntry[]>([])

  const [currentEntry, setCurrentEntry] = useState<JournalEntry>({
    id: Date.now(),
    date: new Date(),
    content: "",
    mood: "neutral",
  })

  const moodOptions = [
    { value: "great", label: "Great" },
    { value: "good", label: "Good" },
    { value: "neutral", label: "Neutral" },
    { value: "low", label: "Low" },
    { value: "bad", label: "Bad" },
  ]

  const handleSaveEntry = () => {
    if (!currentEntry.content.trim()) return

    setEntries((prev) => {
      const existingEntryIndex = prev.findIndex((entry) => entry.id === currentEntry.id)

      if (existingEntryIndex >= 0) {
        const updatedEntries = [...prev]
        updatedEntries[existingEntryIndex] = currentEntry
        return updatedEntries
      } else {
        return [...prev, currentEntry]
      }
    })

    setCurrentEntry({
      id: Date.now(),
      date: new Date(),
      content: "",
      mood: "neutral",
    })
  }

  return (
    <div className="container py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Mood Journal</h1>
        <p className="text-muted-foreground">
          Track your emotions and thoughts to better understand your mental health patterns
        </p>
      </div>

      <Tabs defaultValue="write" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="write">Write Entry</TabsTrigger>
          <TabsTrigger value="history">Entry History</TabsTrigger>
        </TabsList>

        <TabsContent value="write" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>New Journal Entry</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {currentEntry.date.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
              <CardDescription>Write freely about your thoughts, feelings, and experiences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="mood" className="text-sm font-medium">
                    How are you feeling today?
                  </label>
                  <Select
                    value={currentEntry.mood}
                    onValueChange={(value) => setCurrentEntry({ ...currentEntry, mood: value })}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select mood" />
                    </SelectTrigger>
                    <SelectContent>
                      {moodOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Textarea
                placeholder="What's on your mind today?"
                className="min-h-[200px]"
                value={currentEntry.content}
                onChange={(e) => setCurrentEntry({ ...currentEntry, content: e.target.value })}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Clear</Button>
              <Button
                onClick={handleSaveEntry}
                disabled={!currentEntry.content.trim()}
                className="bg-amber-600 hover:bg-amber-700"
              >
                <Save className="mr-2 h-4 w-4" /> Save Entry
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Journal History</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="text-sm">
                    {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </div>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardDescription>Review your past entries to track your emotional patterns</CardDescription>
            </CardHeader>
            <CardContent>
              {entries.length > 0 ? (
                <div className="space-y-4">
                  {entries.map((entry) => (
                    <div key={entry.id} className="border rounded-md p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 ${
                              entry.mood === "great"
                                ? "bg-green-500"
                                : entry.mood === "good"
                                  ? "bg-teal-500"
                                  : entry.mood === "neutral"
                                    ? "bg-blue-500"
                                    : entry.mood === "low"
                                      ? "bg-amber-500"
                                      : "bg-red-500"
                            }`}
                          />
                          <span className="text-sm font-medium capitalize">{entry.mood}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{entry.date.toLocaleDateString()}</span>
                      </div>
                      <p className="text-sm">{entry.content}</p>
                      <div className="flex justify-end space-x-2 mt-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No journal entries yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Benefits of Journaling</h2>
        <p className="mb-4">Regular journaling can have significant positive effects on your mental health:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Helps identify triggers and patterns in your emotions</li>
          <li>Provides an outlet for processing difficult feelings</li>
          <li>Reduces stress by externalizing thoughts</li>
          <li>Improves self-awareness and emotional intelligence</li>
          <li>Creates a record of progress over time</li>
        </ul>
      </div>
    </div>
  )
}

interface JournalEntry {
  id: number
  date: Date
  content: string
  mood: string
}
