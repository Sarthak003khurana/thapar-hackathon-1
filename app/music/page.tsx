import { Headphones, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MusicPage() {
  return (
    <div className="container py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Music Therapy</h1>
        <p className="text-muted-foreground">
          Discover curated playlists designed to reduce anxiety and promote relaxation
        </p>
      </div>

      <Tabs defaultValue="relax" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="relax">Relaxation</TabsTrigger>
          <TabsTrigger value="focus">Focus</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
          <TabsTrigger value="meditation">Meditation</TabsTrigger>
        </TabsList>

        <TabsContent value="relax" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relaxationPlaylists.map((playlist) => (
              <MusicCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="focus" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusPlaylists.map((playlist) => (
              <MusicCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sleep" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sleepPlaylists.map((playlist) => (
              <MusicCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="meditation" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {meditationPlaylists.map((playlist) => (
              <MusicCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">How Music Therapy Works</h2>
        <p className="mb-4">Music has a profound effect on our brain chemistry. Listening to calming music can:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Lower cortisol levels (stress hormone)</li>
          <li>Increase dopamine production (feel-good hormone)</li>
          <li>Slow heart rate and breathing</li>
          <li>Distract from anxious thoughts</li>
          <li>Create a sense of safety and comfort</li>
        </ul>
      </div>
    </div>
  )
}

interface Playlist {
  id: string
  title: string
  description: string
  duration: string
  image: string
}

function MusicCard({ playlist }: { playlist: Playlist }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <img src={playlist.image || "/placeholder.svg"} alt={playlist.title} className="object-cover w-full h-full" />
        <Button size="icon" className="absolute bottom-4 right-4 rounded-full bg-white/90 hover:bg-white text-black">
          <Play className="h-6 w-6" />
          <span className="sr-only">Play</span>
        </Button>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{playlist.title}</CardTitle>
          <Headphones className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>{playlist.description}</CardDescription>
      </CardHeader>
      <CardFooter className="text-sm text-muted-foreground">{playlist.duration}</CardFooter>
    </Card>
  )
}

const relaxationPlaylists: Playlist[] = [
  {
    id: "relax-1",
    title: "Calm Waters",
    description: "Gentle ocean waves and soft piano melodies",
    duration: "45 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "relax-2",
    title: "Forest Serenity",
    description: "Immerse yourself in peaceful woodland sounds",
    duration: "60 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "relax-3",
    title: "Ambient Calm",
    description: "Soft ambient tones to soothe your mind",
    duration: "90 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const focusPlaylists: Playlist[] = [
  {
    id: "focus-1",
    title: "Deep Focus",
    description: "Instrumental tracks to enhance concentration",
    duration: "120 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "focus-2",
    title: "Productivity Boost",
    description: "Upbeat yet non-distracting music for work",
    duration: "75 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "focus-3",
    title: "Study Session",
    description: "Classical compositions for mental clarity",
    duration: "90 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const sleepPlaylists: Playlist[] = [
  {
    id: "sleep-1",
    title: "Night Whispers",
    description: "Ultra-soft melodies to help you drift off",
    duration: "480 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "sleep-2",
    title: "Dream Journey",
    description: "Gentle soundscapes for deep sleep",
    duration: "360 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "sleep-3",
    title: "Starlight Lullaby",
    description: "Peaceful tones to combat insomnia",
    duration: "480 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const meditationPlaylists: Playlist[] = [
  {
    id: "med-1",
    title: "Mindful Moments",
    description: "Gentle guidance for present-moment awareness",
    duration: "30 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "med-2",
    title: "Inner Peace",
    description: "Binaural beats for deep meditation",
    duration: "45 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "med-3",
    title: "Chakra Harmony",
    description: "Frequencies aligned with energy centers",
    duration: "60 minutes",
    image: "/placeholder.svg?height=300&width=300",
  },
]
