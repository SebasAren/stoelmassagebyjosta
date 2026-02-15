import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const siteSettings = defineCollection({
  loader: glob({ base: "./src/content/site-settings", pattern: "**/*.md" }),
  schema: z.object({
    siteTitle: z.string(),
    siteDescription: z.string(),
    businessName: z.string(),
    tagline: z.string(),
    linkedin: z.string().optional(),
  }),
});

const heroContent = defineCollection({
  loader: glob({ base: "./src/content/hero", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      headline: z.string(),
      description: z.string(),
      image: image().optional(),
    }),
});

const stoelmassageContent = defineCollection({
  loader: glob({ base: "./src/content/stoelmassage", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    whatIs: z.string(),
    benefits: z.string(),
    practicalInfo: z.string(),
  }),
});

const contactInfo = defineCollection({
  loader: glob({ base: "./src/content/contact", pattern: "**/*.md" }),
  schema: z.object({
    phone: z.string(),
    email: z.string(),
    website: z.string(),
    address: z.string(),
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
    order: z.number().default(0),
  }),
});

const aboutContent = defineCollection({
  loader: glob({ base: "./src/content/about", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      professionalName: z.string(),
      professionalPhoto: image().optional(),
      journeyTitle: z.string(),
      journeyContent: z.string(),
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
      ctaTitle: z.string().optional(),
      ctaDescription: z.string().optional(),
      ctaButtonText: z.string().optional(),
    }),
});

const benefits = defineCollection({
  loader: glob({ base: "./src/content/benefits", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
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
  heroContent,
  stoelmassageContent,
  contactInfo,
  testimonials,
  aboutContent,
  benefits,
  navigation,
};
