export type ProgramCardProps = {
  name: string;
  url: string;
  svgicon: string;
  tagline: string;
  description: string;
};

export type TeamMember = {
  name: string;
  title: string;
  category: string;
  imageUrl: string;
  linkedinUrl?: string;
  slug: string;
};