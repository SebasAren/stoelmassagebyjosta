import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const siteSettings = defineCollection({
  loader: glob({ base: "./src/content/site-settings", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      siteTitle: z.string(),
      siteDescription: z.string(),
      businessName: z.string(),
      tagline: z.string(),
      heroHeadline: z.string(),
      heroDescription: z.string(),
      heroImage: image().optional(),
      phone: z.string(),
      email: z.string(),
      address: z.string(),
      website: z.string(),
      weekdaysHours: z.string(),
      saturdayHours: z.string(),
      sundayHours: z.string(),
      lastAppointmentNote: z.string().optional(),
      emergencyNote: z.string().optional(),
    }),
});

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      duration: z.string(),
      price: z.string(),
      featured: z.boolean().default(false),
      image: image().optional(),
      order: z.number().default(0),
    }),
});

const testimonials = defineCollection({
  loader: glob({ base: "./src/content/testimonials", pattern: "**/*.md" }),
  schema: z.object({
    name: z.string(),
    text: z.string(),
    service: z.string(),
    date: z.string(),
    rating: z.number().min(1).max(5),
    featured: z.boolean().default(false),
  }),
});

const aboutContent = defineCollection({
  loader: glob({ base: "./src/content/about", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      professionalName: z.string(),
      journeyTitle: z.string(),
      journeyContent: z.string(),
      philosophyTitle: z.string(),
      philosophyItems: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      ),
      educationItems: z.array(
        z.object({
          degree: z.string(),
          institution: z.string(),
          year: z.string(),
        }),
      ),
      certificationItems: z.array(
        z.object({
          certification: z.string(),
        }),
      ),
      membershipItems: z.array(
        z.object({
          membership: z.string(),
        }),
      ),
      specializationItems: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      ),
      professionalPhoto: image().optional(),
    }),
});

const benefits = defineCollection({
  loader: glob({ base: "./src/content/benefits", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number().default(0),
  }),
});

const faq = defineCollection({
  loader: glob({ base: "./src/content/faq", pattern: "**/*.md" }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.enum(["general", "booking", "payment", "services"]),
    order: z.number().default(0),
  }),
});

const navigation = defineCollection({
  loader: glob({ base: "./src/content/navigation", pattern: "**/*.md" }),
  schema: z.object({
    label: z.string(),
    url: z.string(),
    isButton: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  siteSettings,
  services,
  testimonials,
  aboutContent,
  benefits,
  faq,
  navigation,
};
