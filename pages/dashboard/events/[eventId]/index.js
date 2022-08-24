import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Event() {

  const router = useRouter()

  const event = {
    title: 'lorem ipsum',
    slug: 'lorem-ipsum',
    sessions: [
      {
        id: 'tAGnKpE4NCI',
        title: 'Metallica',
        description: 'Nothing Else Matters (Official Music Video)',
        starts_at: Date.now()
      }
    ]
  }

  // if there is an ongoing session, redirect to it
  if (event.sessions[0].starts_at <= Date.now()) {
    router.push(`/dashboard/events/lorem-ipsum/session/${event.sessions[0].id}`)
  }


  return <h1>event</h1>
}