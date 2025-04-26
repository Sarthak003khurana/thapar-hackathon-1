import { MessageSquare, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function CommunityPage() {
  return (
    <div className="container py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Community Support</h1>
        <p className="text-muted-foreground">
          Connect with others on similar journeys and share experiences in a safe, moderated environment
        </p>
      </div>

      <Tabs defaultValue="groups" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="groups">Support Groups</TabsTrigger>
          <TabsTrigger value="forums">Discussion Forums</TabsTrigger>
        </TabsList>

        <TabsContent value="groups" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportGroups.map((group) => (
              <Card key={group.id} className="overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-green-400 to-teal-500" />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{group.name}</CardTitle>
                    <Badge variant="outline">{group.members} members</Badge>
                  </div>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex -space-x-2 overflow-hidden">
                    {[1, 2, 3, 4].map((i) => (
                      <Avatar key={i} className="border-2 border-background">
                        <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-xs">
                      +{group.members - 4}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Users className="mr-2 h-4 w-4" /> Join Group
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="forums" className="mt-6">
          <div className="space-y-6">
            {forumTopics.map((topic) => (
              <Card key={topic.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{topic.title}</CardTitle>
                    <Badge variant="secondary">{topic.category}</Badge>
                  </div>
                  <CardDescription>
                    Started by {topic.author} • {topic.date} • {topic.replies} replies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2">{topic.preview}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    Last reply {topic.lastReply}
                  </div>
                  <Button variant="outline">View Discussion</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Community Guidelines</h2>
        <p className="mb-4">To ensure a safe and supportive environment for all members:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Be respectful and kind to other community members</li>
          <li>Maintain confidentiality - what's shared here stays here</li>
          <li>Avoid giving medical advice - share experiences instead</li>
          <li>Use content warnings for potentially triggering topics</li>
          <li>Report any concerning content to our moderators</li>
        </ul>
      </div>
    </div>
  )
}

const supportGroups = [
  {
    id: 1,
    name: "Anxiety Support",
    description: "A safe space to discuss anxiety management strategies and experiences",
    members: 245,
    category: "Anxiety",
  },
  {
    id: 2,
    name: "Stress Relief",
    description: "Share and learn effective techniques for managing daily stress",
    members: 189,
    category: "Stress",
  },
  {
    id: 3,
    name: "Mindfulness Practice",
    description: "Group focused on incorporating mindfulness into daily routines",
    members: 156,
    category: "Mindfulness",
  },
  {
    id: 4,
    name: "Work-Life Balance",
    description: "Discussions on managing professional stress and maintaining wellbeing",
    members: 132,
    category: "Work Stress",
  },
  {
    id: 5,
    name: "Sleep Improvement",
    description: "Support for those struggling with sleep issues related to anxiety",
    members: 98,
    category: "Sleep",
  },
  {
    id: 6,
    name: "Social Anxiety",
    description: "Connect with others experiencing social anxiety and share coping strategies",
    members: 176,
    category: "Social Anxiety",
  },
]

const forumTopics = [
  {
    id: 1,
    title: "How do you handle anxiety in public settings?",
    category: "Coping Strategies",
    author: "AnxietyWarrior",
    date: "2 days ago",
    replies: 24,
    lastReply: "3 hours ago",
    preview:
      "I've been struggling with anxiety in crowded places lately. Does anyone have techniques they use in the moment when feeling overwhelmed in public?",
  },
  {
    id: 2,
    title: "Breathing techniques that actually work",
    category: "Techniques",
    author: "CalmBreather",
    date: "5 days ago",
    replies: 42,
    lastReply: "Yesterday",
    preview:
      "I've tried many breathing exercises over the years, but only a few have consistently helped during anxiety attacks. I wanted to share what's worked for me and hear what's worked for others.",
  },
  {
    id: 3,
    title: "Work stress is affecting my sleep",
    category: "Work Stress",
    author: "TiredWorker",
    date: "1 week ago",
    replies: 18,
    lastReply: "2 days ago",
    preview:
      "I can't seem to disconnect from work stress when I get home, and it's affecting my sleep quality. I'm constantly thinking about deadlines and emails even as I try to fall asleep.",
  },
  {
    id: 4,
    title: "Success story: How I reduced my panic attacks",
    category: "Success Stories",
    author: "HopefulJourney",
    date: "2 weeks ago",
    replies: 36,
    lastReply: "4 days ago",
    preview:
      "After struggling with frequent panic attacks for years, I've managed to reduce them significantly in the past few months. I wanted to share my journey and what helped me in case it might help someone else.",
  },
]
