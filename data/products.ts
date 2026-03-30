export interface ProductItem {
    name: string;
    slug: string;
    url: string;
    description: string;
    longDescription: string;
    features: string[];
    techStack: string[];
    tags: string[];
}

/** Live production sites: Next Transport + resume / portfolio highlights */
export const liveProductsData: ProductItem[] = [
    {
        name: "NextTransport",
        slug: "next-transport",
        url: "next-transport-one.vercel.app",
        description:
            "Australia-wide vehicle transport platform with instant quotes, secure booking, live tracking, and registration support. PostgreSQL on Supabase holds quotes, bookings, and operational data; Resend sends confirmations and status emails. Cars, light commercials, and motorbikes.",
        longDescription:
            "NextTransport.com.au-style experience: a full-funnel flow from quote to delivery with transparent pricing, digital-first booking (no unnecessary phone calls), real-time shipment tracking, and paperwork help for registration. A relational data model on Supabase keeps jobs, customers, and shipment state consistent; Resend delivers reliable transactional mail for booking and tracking events. Positioned for dealers, fleets, and private customers across Australia, with trust signals like reviews, insurance, and clear service tiers for passenger cars, LCVs, and bikes.",
        features: [
            "Instant quote flow with pickup/delivery locations and upfront pricing",
            "Secure online booking & payments, digital end-to-end",
            "Live tracking from pickup through to delivery with status updates",
            "Registration & paperwork support baked into the journey",
            "Service pages for cars, light commercial vehicles, and motorbikes",
            "Trust & credibility: reviews, insurance, nationwide coverage messaging",
            "Database layer: Supabase (PostgreSQL) for structured transport and booking data",
            "Email: Resend for transactional messages (confirmations, updates)",
        ],
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Resend", "Vercel"],
        tags: ["Next.js", "Supabase", "Resend", "Booking", "Logistics", "Live"],
    },
    {
        name: "AAITek",
        slug: "aaitek",
        url: "www.aaitek.com",
        description:
            "Corporate web presence for a technology services brand: Strapi as the headless CMS for pages and assets, Supabase (PostgreSQL) for app data, and Resend for contact and notification email. Modern layout, crisp messaging, and a fast, mobile-friendly experience.",
        longDescription:
            "A production marketing site emphasizing services and credibility. Content editors work in Strapi; the front end consumes a clean API while staying fast on every device. Supabase backs structured data where the marketing site needs more than static copy, and Resend handles outbound email with high deliverability. Maintainable Next.js patterns so teams can iterate without sacrificing performance.",
        features: [
            "Service-led information architecture",
            "Strapi headless CMS for flexible content and media",
            "Responsive, mobile-first UI",
            "Performance-conscious implementation",
            "Supabase (PostgreSQL) for relational app and directory-style data",
            "Resend for transactional email (forms, alerts, follow-ups)",
        ],
        techStack: ["Next.js", "Strapi", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Resend"],
        tags: ["Corporate", "Strapi", "Supabase", "Resend", "Live"],
    },
    {
        name: "Tasmania Mental Health Directory",
        slug: "tasmania-mental-health-directory",
        url: "www.tasmentalhealthdirectory.com.au",
        description:
            "Public directory helping people find mental health resources in Tasmania. Listings and metadata live in Supabase (PostgreSQL); Resend powers inquiry and update emails. Clear navigation and trustworthy presentation.",
        longDescription:
            "A directory-focused product prioritizing discoverability: structured listings, calm visual design, and patterns suited to healthcare information. PostgreSQL on Supabase models organizations, categories, and search-friendly fields so the directory stays accurate as it grows; Resend sends dependable email when users reach out or when content workflows need notifications. Built to scale as listings and categories expand.",
        features: [
            "Directory search & browse patterns",
            "Accessible, readable UI",
            "SEO-friendly public pages",
            "Supabase (PostgreSQL) for listings, taxonomy, and queryable directory data",
            "Resend for contact and operational email",
        ],
        techStack: ["React", "Node.js", "Supabase", "PostgreSQL", "Resend", "REST APIs"],
        tags: ["Directory", "Supabase", "Resend", "Healthcare", "Live"],
    },
    {
        name: "Aromatales",
        slug: "aromatales",
        url: "www.aromatales.shop",
        description:
            "Shopify eCommerce storefront: brand-forward product pages, smooth checkout, and integrations for real sales operations. Supabase stores complementary app and analytics-friendly data; Resend handles lifecycle and transactional email beyond the theme.",
        longDescription:
            "Full Shopify implementation: theme customization, catalog structure, apps for payments and marketing, and iterative UX improvements to lift conversion on mobile and desktop. Where custom flows or synced data need a real database, PostgreSQL on Supabase provides a typed, scalable backing store; Resend delivers branded email (back-in-stock, receipts, or custom campaigns) with strong deliverability alongside Shopify’s native tooling.",
        features: [
            "Shopify theme & section customization",
            "Payments & checkout tuning",
            "Apps & integrations for operations",
            "Ongoing performance improvements",
            "Supabase (PostgreSQL) for custom or synced data outside the core catalog",
            "Resend for transactional and lifecycle email",
        ],
        techStack: ["Shopify", "Liquid", "JavaScript", "Supabase", "PostgreSQL", "Resend", "eCommerce"],
        tags: ["Shopify", "Supabase", "Resend", "eCommerce", "Live"],
    },
];
