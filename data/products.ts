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

/** Live production sites — Next Transport + resume / portfolio highlights */
export const liveProductsData: ProductItem[] = [
    {
        name: "NextTransport",
        slug: "next-transport",
        url: "next-transport-one.vercel.app",
        description:
            "Australia-wide vehicle transport platform—instant quotes, secure booking, live tracking, and registration support. Cars, light commercials, and motorbikes.",
        longDescription:
            "NextTransport.com.au-style experience: a full-funnel flow from quote to delivery with transparent pricing, digital-first booking (no unnecessary phone calls), real-time shipment tracking, and paperwork help for registration. Positioned for dealers, fleets, and private customers across Australia—with trust signals like reviews, insurance, and clear service tiers for passenger cars, LCVs, and bikes.",
        features: [
            "Instant quote flow with pickup/delivery locations and upfront pricing",
            "Secure online booking & payments—digital end-to-end",
            "Live tracking from pickup through to delivery with status updates",
            "Registration & paperwork support baked into the journey",
            "Service pages for cars, light commercial vehicles, and motorbikes",
            "Trust & credibility: reviews, insurance, nationwide coverage messaging",
        ],
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        tags: ["Next.js", "Booking", "Logistics", "Live"],
    },
    {
        name: "AAITek",
        slug: "aaitek",
        url: "www.aaitek.com",
        description:
            "Corporate web presence for a technology services brand—modern layout, crisp messaging, and a fast, mobile-friendly experience.",
        longDescription:
            "A production marketing site emphasizing services and credibility. Built with maintainable front-end patterns so teams can iterate on content while keeping performance and responsiveness high across devices.",
        features: [
            "Service-led information architecture",
            "Responsive, mobile-first UI",
            "Performance-conscious implementation",
            "Easy to extend for CMS or headless content later",
        ],
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        tags: ["Corporate", "Web", "Live"],
    },
    {
        name: "Tasmania Mental Health Directory",
        slug: "tasmania-mental-health-directory",
        url: "www.tasmentalhealthdirectory.com.au",
        description:
            "Public directory helping people find mental health resources in Tasmania—clear navigation and trustworthy presentation.",
        longDescription:
            "A directory-focused product prioritizing discoverability: structured listings, calm visual design, and patterns suited to healthcare information. Built to scale as listings and categories grow.",
        features: [
            "Directory search & browse patterns",
            "Accessible, readable UI",
            "SEO-friendly public pages",
            "Backend-ready for dynamic data",
        ],
        techStack: ["React", "Node.js", "MongoDB", "REST APIs"],
        tags: ["Directory", "Healthcare", "Live"],
    },
    {
        name: "Aromatales",
        slug: "aromatales",
        url: "www.aromatales.shop",
        description:
            "Shopify eCommerce storefront—brand-forward product pages, smooth checkout, and integrations for real sales operations.",
        longDescription:
            "Full Shopify implementation: theme customization, catalog structure, apps for payments and marketing, and iterative UX improvements to lift conversion on mobile and desktop.",
        features: [
            "Shopify theme & section customization",
            "Payments & checkout tuning",
            "Apps & integrations for operations",
            "Ongoing performance improvements",
        ],
        techStack: ["Shopify", "Liquid", "JavaScript", "eCommerce"],
        tags: ["Shopify", "eCommerce", "Live"],
    },
];
