import React from 'react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  organization?: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-800 last:border-transparent">
          {/* Timeline dot */}
          <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-white" />
          
          {/* Content */}
          <div className="space-y-2">
            <p className="text-sm text-gray-500 font-medium">{event.year}</p>
            <h3 className="text-xl font-bold text-white">{event.title}</h3>
            {event.organization && (
              <p className="text-base text-gray-400">{event.organization}</p>
            )}
            <p className="text-base text-gray-300 leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

// Example boilerplate data
export const exampleTimelineData: TimelineEvent[] = [
  {
    year: '2024',
    title: 'E-Board Member',
    organization: 'Tech@NYU',
    description: 'Joined the executive board to help lead and grow the Tech@NYU community.',
  },
  {
    year: '2023',
    title: 'Active Member',
    organization: 'Tech@NYU',
    description: 'Participated in various programs including Dev Team and Mentorship initiatives.',
  },
  {
    year: '2022',
    title: 'Started at NYU',
    organization: 'New York University',
    description: 'Began undergraduate studies in Computer Science and joined Tech@NYU.',
  },
]
