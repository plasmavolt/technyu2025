import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder(client)

/**
 * Generate optimized image URLs from Sanity image references
 * @param source - Sanity image source object
 * @returns Image URL builder with optimization options
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Example usage:
 * urlFor(imageRef).width(400).height(300).url()
 * urlFor(imageRef).auto('format').url()
 */
