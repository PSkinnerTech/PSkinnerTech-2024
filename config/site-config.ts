export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@PSkinnerTech",
    description:
      "I've been an educator for 15 years.  I enjoy building, but I love to build and teach others to build even more.  So, let's go build Web3 together.",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/@PSkinnerTech",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Blog",
    icon: "hashnode",
    username: "@PSkinnerTech",
    buttonTitle: "Read Blog",
    buttonLink: "https://blog.patrickskinner.tech",
    color: "#3b82f6",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@PSkinnerTech",
    buttonTitle: "Follow",
    buttonSecondaryText: "65",
    buttonLink: "https://github.com/pskinnertech",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Video Equipment",
    image: "/equipment.png",
    equipments: [
      {
        title: "Sony A7RIII",
        link: "https://amzn.to/3BO6MEM",
      },
      {
        title: "Sony 70-200 f2.8 GM Lens",
        link: "https://amzn.to/48q53Sp",
      },
      {
        title: "DJI Mic 1",
        link: "https://amzn.to/3Yr7TmK",
      },
      {
        title: "VICTIV 80in. Camera Tripod",
        link: "https://amzn.to/3BMTMz5",
      },
      {
        title: "SHIRTAL 37in.Softbox Lighting Kit",
        link: "https://amzn.to/3BY7pve",
      },
      {
        title: "Papeaso 4K Video Capture Card",
        link: "https://amzn.to/3BJfIel",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter | X",
    icon: "twitter",
    username: "@PSkinnerTech",
    buttonTitle: "Follow",
    buttonLink: "https://x.com/pskinnertech",
    buttonSecondaryText: "3867",
    color: "#000000",
    description:
      "🥑 Lead DevRel @fwdresearch / @ArweaveEco | 🧑‍🎓 @DevRelUni Cohort #1 | 🚀 @Developer_DAO Member | 🪖 Prev Paratrooper Medic @USArmy",
  },
  {
    layout: "2x1",
    type: "project",
    title: "streamr-starter-kit",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/PSkinnerTech/streamr-starter-kit",
    stars: 0,
  },
  {
    layout: "2x1",
    type: "project",
    title: "Wallet Connect Expo Starter Kit",
    icon: "github",
    stars: 1,
    color: "#070707",
    buttonLink: "https://github.com/PSkinnerTech/walletconnect-w3m-expo-kit",
  },
];

export const siteConfig = {
  creator: "Patrick Skinner",
  title: "Software Engineer | DevRel",
  bio: "I used to jump out of perfectly good airplanes for a living.  Now I build cool web3 products and teach others how to do it, too.",
  location: "Dallas, Texas, USA",
  locationLink: "https://maps.app.goo.gl/B567q7WbLMU4Js6U6",
  email: "me@patrickskinner.tech",
  items: GridItems,
} as const;
