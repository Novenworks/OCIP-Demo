export const SITE = {
  legalName: "Watkins Real Estate Holdings Inc dba The OCIP Co.",
  shortName: "The OCIP Co.",
  displayName: "Orange County Interlocking Paving Co.",
  tagline: "Pavers, hardscape, and pool decking in Orange County.",
  urlOriginal: "https://theocip.com/",
  phoneDisplay: "(714) 627-5543",
  phoneTel: "+17146275543",
  email: "contact@ocip.biz",
  addressLine: "355 S Calle Grande",
  cityStateZip: "Orange, CA 92869",
  region: "Orange County, CA",
  licenseNumber: "1071389",
  licenseClass: "B — General Building",
  licenseStatus: "Current and active",
  licenseChecked: "2026-09-13",
  cslbUrl: "https://www.cslb.ca.gov/1071389",
  yelpUrl:
    "https://www.yelp.com/biz/the-orange-county-interlocking-paver-co-orange-3",
  facebookUrl: "https://www.facebook.com/Official.OCIP/",
  instagramUrl: "https://instagram.com/theocipco",
  youtubeUrl: "https://www.youtube.com/channel/UCMH7XOb49-iyxFPyEoXcE2w",
  contactPath: "https://theocip.com/contact-us/",
  githubRepo: "https://github.com/Novenworks/OCIP-Demo",
} as const;

export const NAV = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#estimate", label: "Estimate" },
] as const;

export type ProjectKind =
  | "driveway"
  | "patio"
  | "pool-deck"
  | "walkway"
  | "outdoor-living"
  | "other";

export const PROJECT_KINDS: { value: ProjectKind; label: string }[] = [
  { value: "driveway", label: "Paver driveway" },
  { value: "patio", label: "Patio" },
  { value: "pool-deck", label: "Pool deck" },
  { value: "walkway", label: "Walkway" },
  { value: "outdoor-living", label: "Outdoor living / kitchen" },
  { value: "other", label: "Something else" },
];

export function projectKindLabel(kind: ProjectKind): string {
  switch (kind) {
    case "driveway":
      return "Paver driveway";
    case "patio":
      return "Patio";
    case "pool-deck":
      return "Pool deck";
    case "walkway":
      return "Walkway";
    case "outdoor-living":
      return "Outdoor living / kitchen";
    case "other":
      return "Something else";
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}

export const SERVICES = [
  {
    id: "driveways",
    title: "Paver driveways",
    body: "Interlocking paver drives that set the tone for the house before anyone reaches the door.",
    image: "/images/work-snap-pool.jpg",
    alt: "Interlocking paver driveway at an Orange County home, published on theocip.com",
  },
  {
    id: "patios",
    title: "Patios & walkways",
    body: "Backyard floors and paths meant to be lived on — not just looked at from the kitchen window.",
    image: "/images/work-drone.jpg",
    alt: "Paver patio and pool deck around an Orange County backyard, published on theocip.com",
  },
  {
    id: "pool-decks",
    title: "Pool decks & coping",
    body: "Decking, coping, and the hardscape that turns a pool into a finished outdoor room.",
    image: "/images/work-laguna-14.jpg",
    alt: "Pool coping, water feature, and night lighting from an OCIP project published on theocip.com",
  },
  {
    id: "outdoor-living",
    title: "Outdoor living",
    body: "California rooms, kitchens, fireplaces, and gathering areas built around how the property is actually used.",
    image: "/images/work-snap-yard.jpg",
    alt: "Pool deck, stone veneer, and outdoor kitchen from an OCIP project published on theocip.com",
  },
] as const;

export const WORK = [
  {
    src: "/images/hero-laguna-patio.jpg",
    alt: "Twilight pool, spa, and patio lighting from a recent OCIP project published on theocip.com",
    label: "Pool & patio",
    className: "md:col-span-2",
  },
  {
    src: "/images/work-snap-pool.jpg",
    alt: "Daytime view of an interlocking paver driveway published on theocip.com",
    label: "Driveway",
    className: "",
  },
  {
    src: "/images/work-snap-yard.jpg",
    alt: "Rock waterfall pool with paver decking published on theocip.com",
    label: "Pool deck",
    className: "",
  },
  {
    src: "/images/work-drone.jpg",
    alt: "Aerial of an Orange County pool, spa, and patio published on theocip.com",
    label: "Backyard",
    className: "",
  },
  {
    src: "/images/work-snap-cover.jpg",
    alt: "Aerial of a hillside pool, waterfall, and paver deck published on theocip.com",
    label: "Hillside pool",
    className: "",
  },
  {
    src: "/images/work-laguna-14.jpg",
    alt: "Close view of pool water features and planting lights published on theocip.com",
    label: "Water feature",
    className: "md:col-span-2",
  },
] as const;

export const CAPABILITIES = [
  {
    title: "Hardscape",
    items: [
      "Interlocking pavers",
      "Concrete, stucco & resurfacing",
      "Retaining walls & demolition",
    ],
  },
  {
    title: "Pool & deck",
    items: [
      "Pool decking",
      "Pool coping",
      "Pool renovations & equipment upgrades",
    ],
  },
  {
    title: "Outdoor rooms",
    items: ["California rooms", "Kitchens & fireplaces", "Custom gathering areas"],
  },
  {
    title: "Landscape",
    items: [
      "Custom landscape design",
      "Low-voltage LED lighting",
      "Natural rock & boulders",
    ],
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Walk the property",
    body: "Call or request an estimate. Tyler and the crew start from what you actually want the yard to do — not a generic package.",
  },
  {
    step: "02",
    title: "Plan the hardscape",
    body: "Reviews describe sketches, suggestions, and a clear plan before material hits the ground.",
  },
  {
    step: "03",
    title: "Build it to live in",
    body: "Pavers, decks, and outdoor rooms installed so the property works at night as well as it photographs at dusk.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Derrick R.",
    place: "Glendora, CA",
    quote:
      "Look at the pictures, they say it all. The crew works tirelessly. Meticulously. Quickly. Tyler is down to earth… Every morning I come out and look at this stunning patio.",
    href: "https://www.yelp.com/biz/the-orange-county-interlocking-paver-co-orange?hrid=uExLWxm00jc0AJKWsHuilA",
  },
  {
    name: "Teri S.",
    place: "Newport Beach, CA",
    quote:
      "This company installed an outdoor fire pit, took up old brick, and built a new walkway and drain. Super professional, and did an excellent job for a fair price.",
    href: "https://www.yelp.com/biz/the-orange-county-interlocking-paver-co-orange-3",
  },
  {
    name: "David B.",
    place: "Irvine, CA",
    quote:
      "I made a sketch of my backyard, texted it to Tyler, and a week later my backyard/patio was transformed. Tyler and Jacob made a few suggestions which slightly improved my detailed sketch plan.",
    href: "https://www.yelp.com/biz/the-orange-county-interlocking-paver-co-orange-3",
  },
  {
    name: "Shanice C.",
    place: "Orange, CA",
    quote:
      "Tyler and his crew were first class. They came in with clear plans, finished within the time they said they would, and we love it.",
    href: "https://www.yelp.com/biz/the-orange-county-interlocking-paver-co-orange?hrid=_M9XgC41iqxz4hlf8G3SCA",
  },
] as const;

export const OWNER_QUOTE = {
  text: "Companies that last a long time tend to put their customers first. It’s no secret, but not everyone has the discipline to put their customer’s needs before their own.",
  attribution: "Tyler Watkins, The OCIP Co.",
  source: "https://theocip.com/meet-our-team/",
} as const;
