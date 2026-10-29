/**
 * Janam Tattooz - Central Business Configuration
 * 
 * Keep all business details, addresses, ratings, services,
 * and contact links easily editable in this single file.
 */

export interface BranchAddress {
  id: string;
  branchName: string;
  addressLine: string;
  landmark?: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  fullAddress: string;
  googleMapsUrl: string;
  embedQuery: string;
  note?: string;
}

export interface ReviewItem {
  id: string;
  excerpt: string;
  rating: number; // 5
  source: string;
  verifiedLabel: string;
  authorLabel?: string;
}

export interface ServiceCategory {
  id: string;
  categoryTitle: string;
  categorySubtitle: string;
  iconName: string;
  items: {
    id: string;
    title: string;
    description: string;
    tag?: string;
    whatsappMessage?: string;
  }[];
}

export interface BusinessConfig {
  name: string;
  alternateName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: {
    raw: string; // 09607452040
    display: string; // +91 96074 52040
    telLink: string; // tel:+919607452040
    whatsappNumber: string; // 919607452040
  };
  whatsapp: {
    defaultEnquiryUrl: string;
    tattooBookingUrl: string;
    piercingEnquiryUrl: string;
    discussDesignUrl: string;
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
  };
  branches: BranchAddress[];
  hours: {
    reportedText: string;
    disclaimer: string;
  };
  googleReviews: {
    rating: number; // 5.0
    maxRating: number; // 5.0
    totalReviews: number; // 304
    platform: string; // Google
    ratingSubtext: string; // "Based on 304 Google reviews"
    sectionTitle: string; // "LOVED BY OUR CUSTOMERS."
    sectionSubtitle: string; // "Your stories, your art, and your trust mean everything to us."
    disclaimer: string; // Rating details supplied by business owner from Google listing.
    readAllReviewsUrl: string;
    leaveReviewUrl: string;
    reviews: ReviewItem[];
  };
  services: {
    sectionTitle: string; // "OUR SERVICES"
    sectionSubtitle: string; // "Explore tattoo artistry and piercing services at Janam Tattooz."
    notice: string;
    categories: ServiceCategory[];
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'Janam Tattooz',
  alternateName: 'Janam Tattoo Studio',
  tagline: 'Custom Tattoos | Polynesian Tribal | Precision Piercings',
  heroHeadline: 'YOUR STORY. YOUR SKIN. YOUR ART.',
  heroSubheadline: 'Explore tattoo artistry and piercing services at Janam Tattooz. Proudly serving Bengaluru with custom designs, tribal tattoo mastery, and sterile piercing craftsmanship.',
  
  phone: {
    raw: '09607452040',
    display: '+91 96074 52040',
    telLink: 'tel:+919607452040',
    whatsappNumber: '919607452040',
  },

  whatsapp: {
    defaultEnquiryUrl:
      'https://wa.me/919607452040?text=Hi%20Janam%20Tattooz%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.',
    tattooBookingUrl:
      'https://wa.me/919607452040?text=Hi%20Janam%20Tattooz%2C%20I%20would%20like%20to%20book%20a%20tattoo%20appointment.',
    piercingEnquiryUrl:
      'https://wa.me/919607452040?text=Hi%20Janam%20Tattooz%2C%20I%20would%20like%20to%20enquire%20about%20piercing%20services.',
    discussDesignUrl:
      'https://wa.me/919607452040?text=Hi%20Janam%20Tattooz%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.',
  },

  social: {
    instagramHandle: '@janam_tattooz',
    instagramUrl: 'https://www.instagram.com/',
  },

  /**
   * Dual Branch Locations:
   * Note on postal codes: The supplied brief includes two postal codes (560010 and 560055).
   * Rajajinagar is associated with 560010 (Milk Colony 2nd Stage),
   * while Basaveshwar Nagar is associated with 560055.
   * Kept configurable and distinct per project brief.
   */
  branches: [
    {
      id: 'rajajinagar',
      branchName: 'Rajajinagar Branch',
      addressLine: '559, near Girls Collection, A Block, Milk Colony, 2nd Stage',
      landmark: 'Near Girls Collection',
      area: 'Milk Colony, 2nd Stage, Rajajinagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560010',
      fullAddress:
        '559, near Girls Collection, A Block, Milk Colony, 2nd Stage, Rajajinagar, Bengaluru, Karnataka 560010',
      googleMapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Janam+Tattooz+559+Milk+Colony+Rajajinagar+Bengaluru+560010',
      embedQuery:
        'https://maps.google.com/maps?q=559+Milk+Colony+2nd+Stage+Rajajinagar+Bengaluru+Karnataka+560010&t=&z=15&ie=UTF8&iwloc=&output=embed',
      note: 'Primary studio location with custom tattoo design suite and sterile piercing facility.',
    },
    {
      id: 'basaveshwar-nagar',
      branchName: 'Basaveshwar Nagar Branch',
      addressLine: 'Basaveshwar Nagar',
      area: 'Basaveshwar Nagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560055',
      fullAddress:
        'Basaveshwar Nagar, Bengaluru, Karnataka 560055',
      googleMapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Janam+Tattooz+Basaveshwar+Nagar+Bengaluru+560055',
      embedQuery:
        'https://maps.google.com/maps?q=Basaveshwar+Nagar+Bengaluru+Karnataka+560055&t=&z=15&ie=UTF8&iwloc=&output=embed',
      note: 'Branch serving west Bengaluru. Please confirm appointments and service availability prior to arrival.',
    },
  ],

  /**
   * Business Hours
   * The provided Google listing states "Open 24 hours".
   * This is explicitly labelled as reported by the Google listing and editable.
   */
  hours: {
    reportedText: 'Open 24 hours (As reported on Google listing)',
    disclaimer:
      'Hours reported by Google listing. Appointments & consultations are scheduled via WhatsApp or phone to reserve dedicated artist time.',
  },

  /**
   * Google Reviews & Rating Details
   * Supplied directly by project brief / business owner:
   * 5.0 out of 5 stars based on 304 reviews.
   */
  googleReviews: {
    rating: 5.0,
    maxRating: 5.0,
    totalReviews: 304,
    platform: 'Google',
    ratingSubtext: 'Based on 304 Google reviews',
    sectionTitle: 'LOVED BY OUR CUSTOMERS.',
    sectionSubtitle: 'Your stories, your art, and your trust mean everything to us.',
    disclaimer:
      'Rating details supplied by the business owner from Google Reviews. The website presents these supplied customer excerpts without independent verification or live API polling.',
    readAllReviewsUrl:
      'https://www.google.com/maps/search/?api=1&query=Janam+Tattooz+Rajajinagar+Bengaluru',
    leaveReviewUrl:
      'https://www.google.com/maps/search/?api=1&query=Janam+Tattooz+Rajajinagar+Bengaluru',
    reviews: [
      {
        id: 'rev-1',
        excerpt:
          'Highly recommend for anyone looking for quality work n creative work ....',
        rating: 5,
        source: 'Google Reviews',
        verifiedLabel: 'Verified Review',
        authorLabel: 'Studio Client',
      },
      {
        id: 'rev-2',
        excerpt:
          'Best tattoo shop i experience in Bangalore good service Must try and visit 😍😍😍☺️',
        rating: 5,
        source: 'Google Reviews',
        verifiedLabel: 'Verified Review',
        authorLabel: 'Studio Client',
      },
      {
        id: 'rev-3',
        excerpt: 'They offer affordable price.',
        rating: 5,
        source: 'Google Reviews',
        verifiedLabel: 'Verified Review',
        authorLabel: 'Studio Client',
      },
    ],
  },

  /**
   * Complete Studio Services
   */
  services: {
    sectionTitle: 'OUR SERVICES',
    sectionSubtitle:
      'Explore tattoo artistry and piercing services at Janam Tattooz.',
    notice:
      'Service availability may vary between Rajajinagar and Basaveshwar Nagar branches. Connect via WhatsApp to verify specific branch scheduling.',
    categories: [
      {
        id: 'tattoos',
        categoryTitle: 'TATTOOS',
        categorySubtitle:
          'From custom concepts to large-scale tribal epics, crafted with single-use sterile equipment.',
        iconName: 'PenTool',
        items: [
          {
            id: 'svc-custom',
            title: 'Custom Tattoo Design',
            description:
              'One-of-a-kind bespoke concepts tailored to your anatomy, personal aesthetic, and narrative.',
            tag: 'Signature',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to enquire about a custom tattoo design.',
          },
          {
            id: 'svc-large-scale',
            title: 'Large-Scale & Full-Body Tattoos',
            description:
              'Sleeve work, back pieces, chest panels, and full-body compositions planned over focused sessions.',
            tag: 'Mastery',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to enquire about a large-scale or full-body tattoo project.',
          },
          {
            id: 'svc-polynesian',
            title: 'Polynesian Tribal Tattoos',
            description:
              'Intricate geometric patterns, cultural motifs, and bold tribal blackwork honoring traditional flow.',
            tag: 'Speciality',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to enquire about Polynesian tribal tattoo designs.',
          },
          {
            id: 'svc-coverups',
            title: 'Tattoo Cover-Ups & Reworkings',
            description:
              'Artistic transformations and re-inkings that seamlessly camouflage or revitalize older tattoos.',
            tag: 'Restoration',
            whatsappMessage:
              'Hi Janam Tattooz, I have an existing tattoo I would like to cover up or rework.',
          },
          {
            id: 'svc-finishing',
            title: 'Tattoo Finishing',
            description:
              'Bringing unfinished outlines to completion with refined shading, contrast packing, and detail work.',
            tag: 'Enhancement',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to enquire about finishing an incomplete tattoo.',
          },
          {
            id: 'svc-touchups',
            title: 'Tattoo Touch-Ups',
            description:
              'Color brightening, line sharpening, and pigment refreshers to preserve long-term vibrancy.',
            tag: 'Maintenance',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to enquire about a tattoo touch-up session.',
          },
          {
            id: 'svc-aftercare',
            title: 'Tattoo Aftercare',
            description:
              'Professional healing films, medical skin barriers, and detailed guidance for sterile pigment retention.',
            tag: 'Guidance',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to enquire about tattoo aftercare instructions and products.',
          },
        ],
      },
      {
        id: 'piercings',
        categoryTitle: 'PIERCINGS',
        categorySubtitle:
          'Precise anatomical placement using sterile, single-use surgical needles and skin-safe jewelry.',
        iconName: 'Sparkles',
        items: [
          {
            id: 'svc-ear-piercing',
            title: 'Ear Piercing',
            description:
              'Lobe, helix, tragus, conch, daith, industrial, and curated ear styling done with surgical precision.',
            tag: 'Popular',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to enquire about ear piercing services.',
          },
          {
            id: 'svc-eyebrow-piercing',
            title: 'Eyebrow Piercing',
            description:
              'Vertical and horizontal eyebrow piercings aligned cleanly to facial symmetry and anatomy.',
            tag: 'Facial',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to enquire about eyebrow piercing services.',
          },
          {
            id: 'svc-nose-piercing',
            title: 'Nose Piercing',
            description:
              'Nostril and septum piercings fitted with hypoallergenic titanium and surgical steel studs or rings.',
            tag: 'Classic',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to enquire about nostril and septum nose piercings.',
          },
          {
            id: 'svc-other-piercings',
            title: 'Other Piercing Services',
            description:
              'Lip, navel, surface, and custom body piercings executed under clinical hygiene conditions.',
            tag: 'Specialized',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to enquire about body piercing options.',
          },
        ],
      },
      {
        id: 'general-enquiries',
        categoryTitle: 'GENERAL ENQUIRIES',
        categorySubtitle:
          'Personal consultations and appointment scheduling directly with our artists.',
        iconName: 'CalendarCheck',
        items: [
          {
            id: 'svc-tattoo-apt',
            title: 'Tattoo Appointments',
            description:
              'Secure your dedicated bench time and discuss preferred branch, session length, and dates.',
            tag: 'Scheduling',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to schedule a tattoo appointment.',
          },
          {
            id: 'svc-piercing-apt',
            title: 'Piercing Appointments',
            description:
              'Book quick, gentle piercing sessions with proper jewelry fitting and aftercare demonstration.',
            tag: 'Scheduling',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to schedule a piercing appointment.',
          },
          {
            id: 'svc-design-consult',
            title: 'Tattoo Design Consultations',
            description:
              'One-on-one concept discussions, reference sharing, sizing mockups, and stencil placement advice.',
            tag: 'Consultation',
            whatsappMessage:
              'Hi Janam Tattooz, I would like to book a tattoo design consultation.',
          },
        ],
      },
    ],
  },
};

/**
 * Generate a WhatsApp click-to-chat link with custom message
 */
export function getWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(
    message || 'Hi Janam Tattooz, I would like to enquire about your services.'
  );
  return `https://wa.me/${BUSINESS_CONFIG.phone.whatsappNumber}?text=${text}`;
}
