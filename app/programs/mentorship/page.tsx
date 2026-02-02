import DynamicProgramPage from '@/components/sections/programs/DynamicProgramPage'

// Revalidate every hour (3600 seconds) - adjust as needed
export const revalidate = 3600

export default function MentorshipPage() {
  return <DynamicProgramPage slug="mentorship" />
}
