import { defineQuery } from 'next-sanity'
import { client } from './client'
import { TeamMember, SanityProgram } from '../types'

// GROQ query for team members
const teamMembersQuery = `
  *[_type == "teamMember"]
  | order(order asc)
  {
    name,
    title,
    category,
    "slug": slug.current,
    "linkedinUrl": linkedinUrl,
    "imageUrl": imageUrl.asset->url,
    "fadeIn": select(
      defined(fadeInImage.asset) => fadeInImage.asset->url,
      null
    )
  }
`

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const members = await client.fetch(teamMembersQuery)
    return members
  } catch (error) {
    console.error('Error fetching team members from Sanity:', error)
    return []
  }
}

// GROQ query for individual e-board bio
const eboardBioQuery = `
  *[_type == "eboardBio" && slug == $slug][0]{
    name,
    slug,
    shortDescription,
    "profileImage": {
      "url": profileImage.asset->url,
      "alt": profileImage.alt
    },
    "position": *[_type == "teamMember" && slug.current == ^.slug][0].title,
    "category": *[_type == "teamMember" && slug.current == ^.slug][0].category,
    "linkedinUrl": *[_type == "teamMember" && slug.current == ^.slug][0].linkedinUrl,
    timeline[]{
      year,
      title,
      order
    } | order(year desc, order asc),
    qa[]{
      question,
      answer,
      "media": select(
        defined(media.asset) => {
          "url": media.asset->url,
          "alt": media.alt
        },
        null
      )
    }
  }
`

export async function getEboardBio(slug: string) {
  try {
    const bio = await client.fetch(eboardBioQuery, { slug })
    return bio
  } catch (error) {
    console.error('Error fetching e-board bio from Sanity:', error)
    return null
  }
}

// ===== Program Queries =====

// Full program query with all sections expanded
const programBySlugQuery = `
  *[_type == "program" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    tagline,
    order,
    hero {
      title,
      body,
      "logoImageUrl": logoImage.asset->url,
      "heroImageUrl": heroImage.asset->url
    },
    apply {
      status,
      link,
      ctaLabel,
      statusText
    },
    sections[]{
      _key,
      _type,
      // textSection fields
      _type == "textSection" => {
        heading,
        body
      },
      // stickyScrollSection fields
      _type == "stickyScrollSection" => {
        heading,
        showUnderline,
        items[]{
          _key,
          title,
          description,
          "imageUrl": image.asset->url,
          "mobileImageUrl": mobileImage.asset->url
        }
      },
      // rolesSection fields
      _type == "rolesSection" => {
        heading,
        intro,
        preRolesContent[]{
          _key,
          type,
          text,
          link
        },
        rolesIntro,
        roles[]{
          _key,
          title,
          description,
          benefits,
          buttonText,
          color,
          applicationLink
        },
        footer,
        footerContact {
          label,
          href
        }
      },
      // faqSection fields
      _type == "faqSection" => {
        heading,
        showUnderline,
        items[]{
          _key,
          question,
          answer
        }
      },
      // logoSliderSection fields
      _type == "logoSliderSection" => {
        heading,
        body,
        logos[]{
          _key,
          alt,
          "imageUrl": image.asset->url,
          width,
          height
        },
        speed
      },
      // ctaSection fields
      _type == "ctaSection" => {
        heading,
        body,
        applyOverride {
          status,
          link,
          buttonText
        }
      }
    },
    contacts[]{
      _key,
      label,
      href
    },
    externalSite,
    descriptionSmall,
    descriptionLarge,
    "desktopImageUrl": desktopImage.asset->url
  }
`

export async function getProgramBySlug(slug: string): Promise<SanityProgram | null> {
  try {
    const program = await client.fetch(programBySlugQuery, { slug })
    return program
  } catch (error) {
    console.error('Error fetching program from Sanity:', error)
    return null
  }
}

// Get all programs for listings
const allProgramsQuery = `
  *[_type == "program"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    tagline,
    order,
    descriptionSmall,
    descriptionLarge,
    "svgIconUrl": hero.logoImage.asset->url,
    "desktopImageUrl": desktopImage.asset->url,
    apply {
      status,
      link
    }
  }
`

export type ProgramListItem = {
  _id: string;
  name: string;
  slug: string;
  tagline?: string;
  order?: number;
  descriptionSmall?: string;
  descriptionLarge?: string;
  svgIconUrl?: string;
  desktopImageUrl?: string;
  apply?: {
    status?: boolean;
    link?: string;
  };
};

export async function getAllPrograms(): Promise<ProgramListItem[]> {
  try {
    const programs = await client.fetch(allProgramsQuery)
    return programs
  } catch (error) {
    console.error('Error fetching programs from Sanity:', error)
    return []
  }
}
