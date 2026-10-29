export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
  enquiryMessage: string;
}

export const TATTOO_GALLERY: GalleryItem[] = [
  {
    id: 'tat-1',
    title: 'Polynesian & Tribal Sleeve',
    category: 'Tribal / Blackwork',
    image: '/images/tattoos/jt1.jpg',
    alt: 'Custom Polynesian Tribal Tattoo by Janam Tattooz',
    description:
      'Bold geometric patterns and intricate line flow honoring tribal heritage with high-contrast ink saturation.',
    tags: ['Polynesian', 'Tribal', 'Blackwork', 'Sleeve'],
    enquiryMessage:
      'Hi Janam Tattooz, I am interested in a tribal / Polynesian tattoo design similar to Portfolio Piece 1.',
  },
  {
    id: 'tat-2',
    title: 'Custom Mythological Composition',
    category: 'Custom Art',
    image: '/images/tattoos/jt2.jpg',
    alt: 'Detailed custom mythological tattoo by Janam Tattooz',
    description:
      'Expressive symbolic piece created with smooth tonal gradients, crisp contours, and customized anatomical placement.',
    tags: ['Custom Design', 'Symbolic', 'Shading', 'Bengaluru'],
    enquiryMessage:
      'Hi Janam Tattooz, I saw Portfolio Piece 2 and would like to discuss a custom design concept.',
  },
  {
    id: 'tat-3',
    title: 'Fine-Line Spiritual Art',
    category: 'Fine Line',
    image: '/images/tattoos/jt3.jpg',
    alt: 'Spiritual fine-line tattoo craftsmanship at Janam Tattooz',
    description:
      'Delicate single-needle lines, micro-accents, and spiritual harmony crafted with steady precision.',
    tags: ['Fine Line', 'Spiritual', 'Minimalist', 'Detailed'],
    enquiryMessage:
      'Hi Janam Tattooz, I am looking to get a fine-line tattoo inspired by Portfolio Piece 3.',
  },
  {
    id: 'tat-4',
    title: 'Bold Illustrative Forearm Piece',
    category: 'Illustrative',
    image: '/images/tattoos/jt4.jpg',
    alt: 'Bold illustrative tattoo work by Janam Tattooz Bengaluru',
    description:
      'Rich contrast with solid black fills, crisp linework, and dynamic framing designed for enduring impact.',
    tags: ['Illustrative', 'Forearm', 'Custom Art', 'Black & Grey'],
    enquiryMessage:
      'Hi Janam Tattooz, I would like to enquire about getting an illustrative piece like Portfolio Piece 4.',
  },
  {
    id: 'tat-5',
    title: 'Precision Cover-Up & Rework',
    category: 'Cover-Up & Rework',
    image: '/images/tattoos/jt5.jpg',
    alt: 'Expert cover-up and rework tattoo by Janam Tattooz',
    description:
      'Strategic depth manipulation and pigment blending that transforms previous ink into a renewed masterpiece.',
    tags: ['Cover-Up', 'Rework', 'Restoration', 'Precision'],
    enquiryMessage:
      'Hi Janam Tattooz, I have an existing tattoo and would like to consult on a cover-up like Portfolio Piece 5.',
  },
];

export const PIERCING_GALLERY: GalleryItem[] = [
  {
    id: 'prc-1',
    title: 'Curated Helix & Ear Piercing',
    category: 'Ear Piercing',
    image: '/images/piercings/jt6.jpg',
    alt: 'Sterile ear cartilage helix piercing at Janam Tattooz',
    description:
      'Clean cartilage placement with medical-grade hypoallergenic jewelry for effortless healing and visual elegance.',
    tags: ['Ear Piercing', 'Helix', 'Titanium Jewelry', 'Sterile'],
    enquiryMessage:
      'Hi Janam Tattooz, I would like to book an appointment for an ear helix piercing.',
  },
  {
    id: 'prc-2',
    title: 'Precision Nose Stud Piercing',
    category: 'Nose Piercing',
    image: '/images/piercings/jt7.jpg',
    alt: 'Nostril piercing with surgical precision by Janam Tattooz',
    description:
      'Anatomically measured nostril placement using single-use surgical needle protocols for minimal discomfort.',
    tags: ['Nose Piercing', 'Nostril', 'Surgical Steel', 'Safe'],
    enquiryMessage:
      'Hi Janam Tattooz, I would like to enquire about getting a nostril nose piercing.',
  },
  {
    id: 'prc-3',
    title: 'Symmetrical Eyebrow Piercing',
    category: 'Eyebrow Piercing',
    image: '/images/piercings/jt8.jpg',
    alt: 'Facial eyebrow piercing craftsmanship at Janam Tattooz',
    description:
      'Carefully aligned eyebrow piercing complementing facial contours with lightweight curved barbell jewelry.',
    tags: ['Eyebrow', 'Facial Piercing', 'Custom Jewelry', 'Gentle'],
    enquiryMessage:
      'Hi Janam Tattooz, I would like to enquire about getting an eyebrow piercing.',
  },
  {
    id: 'prc-4',
    title: 'Tragus & Multi-Lobe Combination',
    category: 'Ear Piercing',
    image: '/images/piercings/jt9.jpg',
    alt: 'Curated multi-piercing ear project at Janam Tattooz',
    description:
      'Balanced multi-piercing layout designed to flatter individual ear anatomy with hypoallergenic studs.',
    tags: ['Tragus', 'Multi Piercing', 'Curated Ear', 'Clean'],
    enquiryMessage:
      'Hi Janam Tattooz, I would like to plan a curated multi-piercing appointment.',
  },
  {
    id: 'prc-5',
    title: 'Specialized Body Piercing',
    category: 'Body Piercing',
    image: '/images/piercings/jt10.webp',
    alt: 'Professional body piercing procedure by Janam Tattooz Bengaluru',
    description:
      'Hospital-standard sterilization with pre-sterilized clamps and medical aftercare instruction.',
    tags: ['Body Piercing', 'Sterile Technique', 'Safe Healing', 'Bengaluru'],
    enquiryMessage:
      'Hi Janam Tattooz, I would like to enquire about body piercing options and healing care.',
  },
];
