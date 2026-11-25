export type ProductPreview = {
  slug: string
  name: string
  category: string
  label: string
  description: string
}

export const products: ProductPreview[] = [
  { slug: 'lords-lounge', name: 'Lord’s Lounge', category: 'NCU / ART PRINT', label: '01', description: 'A print concept from the Nartstudio comic-world catalogue. Final format and availability have not been announced.' },
  { slug: 'unliving-sage', name: 'The Unliving Sage', category: 'NCU / ART PRINT', label: '02', description: 'An art-print concept from the Nartstudio comic-world catalogue. Final format and availability have not been announced.' },
  { slug: 'holo-host', name: 'Holo Host', category: 'DIGITAL / ART PACK', label: '03', description: 'A digital-pack concept from the Nartstudio catalogue. Contents and availability have not been announced.' },
]

export const collections = [
  { name: 'NCU Worlds', description: 'Print and edition concepts inspired by original comic universes.', category: 'NCU / ART PRINT' },
  { name: 'Oubyt', description: 'Motion-led objects and apparel concepts.', category: 'MOTION / OBJECTS' },
  { name: 'Pylothouse', description: 'Ideas for reader and creator collections.', category: 'STORIES / COMMUNITY' },
  { name: 'Digital', description: 'Digital art-pack concepts; formats are not yet confirmed.', category: 'DIGITAL / ART' },
]
