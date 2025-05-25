import type { IconType } from "react-icons"

export interface Stat {
  icon: IconType
  heading: string
  subheading?: string
  subtitle: string
}

export interface Track {
  title: string
  description: string
  icon?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface TeamMember {
  name: string
  title: string
  profile: string
}

export interface TeamData {
  teams: {
    name: string
    executives: TeamMember[]
  }[]
}

