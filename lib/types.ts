export type ProgramCardProps = {
  name: string;
  url: string;
  appOpen: boolean;
  svgicon: string;
  tagline: string;
  description_small: string;
  description_large: string;
  desktopImage: string;
};

export type TeamMember = {
  name: string;
  title: string;
  category: string;
  imageUrl: string;
  linkedinUrl?: string;
  slug: string;
  fadeIn?: string; // Optional second image URL to fade in on hover
};

export type ValueCardProps = {
  name: string;
  svgicon: string;
  description: string;
};

export type EboardBio = {
  name: string;
  slug: string;
  position?: string;
  category?: string;
  shortDescription?: string;
  linkedinUrl?: string;
  profileImage: {
    url: string;
    alt?: string;
  };
  qa?: {
    question: string;
    answer: string;
    media?: {
      url: string;
      alt?: string;
    } | null;
  }[];
};
