export const SITE = {
  name: "The OCIP Co.",
  legal: "Orange County Interlocking Paving Co.",
  phoneDisplay: "(714) 627-5543",
  phoneTel: "7146275543",
  email: "tyler@ocip.biz",
  license: "CA Lic. #1071389",
  originalUrl: "https://theocip.com/",
  github: "https://github.com/Novenworks/OCIP-Demo",
  demoUrl: "https://ocip-demo.vercel.app",
};

const W = (ts: string, path: string) =>
  `https://web.archive.org/web/${ts}id_/https://theocip.com/wp-content/uploads/${path}`;

export const IMG = {
  logo: "/images/logo-ocip-2024.png",
  logoH: "/images/logo-horizontal-2x.png",
  laguna: W("20240911125224", "2024/04/Copy-of-20-Laguna-1-scaled.jpg"),
  night: W(
    "20241123162302",
    "2024/04/Copy-of-98c32a55-a6aa-4a04-a39a-17bf99f3189b.jpeg"
  ),
  slider: W(
    "20240410180401",
    "2020/05/Orange-County-Interlocking-Paver-Home-Page-Slider-008.jpg"
  ),
  pool2: W("20230117123404", "2022/08/pool-deck-2.jpg"),
  pool1: W("20230117123404", "2022/01/pool-deck-1-1.jpg"),
  walk1: W("20230117123403", "2022/08/walkway-1.jpg"),
  walk4: W("20230117123403", "2022/08/walkway-4.jpg"),
};

export const NAV = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#areas", label: "Service area" },
];

export const SERVICES = [
  {
    title: "Driveways & entries",
    copy: "Interlocking paver driveways built for Orange County sun, slope, and daily use — not a thin overlay on failed concrete.",
    image: IMG.walk1,
  },
  {
    title: "Patios & walkways",
    copy: "Patterns and borders that connect the house to the yard so the hardscape feels designed, not dropped in.",
    image: IMG.walk4,
  },
  {
    title: "Pool decks & coping",
    copy: "Cooler, more stable decking around the water — coping, drainage, and the surfaces people actually stand on.",
    image: IMG.pool2,
  },
  {
    title: "Outdoor living",
    copy: "Fire features, gathering space, and lighting that turn a paved yard into the room the house was missing.",
    image: IMG.laguna,
  },
];

export const WORK = [
  {
    src: IMG.laguna,
    title: "Laguna-area outdoor living",
    note: "Published on theocip.com as 20-Laguna",
  },
  {
    src: IMG.night,
    title: "Night pool & stone coping",
    note: "First-party project photography, 2024 upload",
  },
  {
    src: IMG.slider,
    title: "Evening pool terrace",
    note: "Homepage photography from theocip.com",
  },
  {
    src: IMG.pool2,
    title: "Pool deck",
    note: "First-party pool-deck gallery",
  },
  {
    src: IMG.walk1,
    title: "Paver walkway",
    note: "First-party walkway gallery",
  },
  {
    src: IMG.pool1,
    title: "Deck & water’s edge",
    note: "First-party pool-deck gallery",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "There is too much to say…look at the pictures, they say it all! The crew works tirelessly. Meticulously. Quickly. Tyler is down to earth, easy to get along with, and loves his job! The crew he brought on was simply remarkable! Every Morning I come out and look at this stunning patio.",
    name: "Derrick R.",
    place: "Glendora, CA",
  },
  {
    quote:
      "This company installed an outdoor fire pit, which included a gas line, taking up some old brick, and building a new fire pit. They also did some additional brickwork to create a new walkway and add a drain. They are super professional, and did an excellent job for a fair price.",
    name: "Teri S.",
    place: "Newport Beach, CA",
  },
  {
    quote:
      "I made a sketch of my backyard, texted it to Tyler, and a week later my backyard/patio was transformed for a very fair price. 3.5 days of work. And for the record, I’m OCD when it comes to the fine details. Tyler and Jacob made a few suggestions which slightly improved my detailed sketch plan.",
    name: "David B.",
    place: "Irvine, CA",
  },
  {
    quote:
      "Tyler and his crew were first class! They came in with clear plans. Told us what we needed to supply and within the next 2 hours the first layer was finished and we had set a plan for the next set of work to be done. They finished within the time they said they would and we love it!",
    name: "Shanice C.",
    place: "Orange, CA",
  },
];

export const AREAS = [
  "Newport Beach",
  "Huntington Beach",
  "Irvine",
  "Costa Mesa",
  "Laguna Beach",
  "Laguna Niguel",
  "San Clemente",
  "Mission Viejo",
  "Santa Ana",
  "Orange",
  "Fullerton",
  "Yorba Linda",
  "Fountain Valley",
  "Garden Grove",
  "Lake Forest",
];
