import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects = [
  {
    name: 'Courtyard Calm',
    description: 'A residential retreat in Coimbatore designed around an open-to-sky courtyard and passive cooling strategies.',
    demoLink: '#',
    tags: ['Residential', 'Climate-Responsive']
  },
  {
    name: 'Thinnai House',
    description: 'An urban home that reinterprets traditional South Indian street-facing thresholds with red oxide floors and laterite stone.',
    demoLink: '#',
    tags: ['Residential', 'Contextual']
  },
  {
    name: 'Lightwell Library',
    description: 'A community learning space designed with internal lightwells and shaded courtyards for diffused reading zones.',
    demoLink: '#',
    tags: ['Public', 'Community']
  },
  {
    name: 'Tulasi Garden Studio',
    description: 'A minimalist artist’s studio nestled within a tropical garden, anchored by a central tulasi altar and verandas.',
    demoLink: '#',
    tags: ['Studio', 'Minimalism']
  },
  {
    name: 'Coastal Veranda Pavilion',
    description: 'An open-air event pavilion on the Coromandel coast using reclaimed timber and terracotta with ocean ventilation paths.',
    demoLink: '#',
    tags: ['Public', 'Sustainable']
  },
  {
    name: 'Aangan School Extension',
    description: 'An educational space extension incorporating local materials and student-built brick jaali walls.',
    demoLink: '#',
    tags: ['Education', 'Participatory']
  },
  {
    name: 'Stone & Stillness',
    description: 'A hillside meditation center that blends laterite, lime plaster, and silence into spatial therapy.',
    demoLink: '#',
    tags: ['Spiritual', 'Wellness']
  },
  {
    name: 'The Listening Room',
    description: 'A home designed for an audiophile client, using acoustics, soft materials, and inward-flowing courtyards.',
    demoLink: '#',
    tags: ['Residential', 'Custom']
  },
  {
    name: 'Shade & Memory',
    description: 'Adaptive reuse of an ancestral home in Trichy, blending old red oxide with new steel insertions.',
    demoLink: '#',
    tags: ['Conservation', 'Modern Heritage']
  },
  {
    name: 'Skyline Retreat',
    description: 'A small vacation home in the Nilgiris built around stargazing, thermal mass, and cedar wood.',
    demoLink: '#',
    tags: ['Residential', 'Retreat']
  },
  {
    name: 'Crafted Corner',
    description: 'An interiors project exploring handmade tiles, reclaimed wood, and layered textures for a family apartment.',
    demoLink: '#',
    tags: ['Interior', 'Material-Led']
  },
  {
    name: 'Rain Harvest House',
    description: 'A compact home near Madurai designed around rainwater collection, daylight zoning, and mud block walls.',
    demoLink: '#',
    tags: ['Sustainable', 'Water']
  }
];