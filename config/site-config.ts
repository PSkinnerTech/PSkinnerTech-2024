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
    username: "@AGAMI-PSkinnerTech",
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
    buttonSecondaryText: "60",
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
        link: "https://www.amazon.com/Sony-a7R-Mirrorless-Camera-Interchangeable/dp/B076TGDHPT?th=1&_encoding=UTF8&tag=pskinnertech-20&linkCode=ur2&linkId=f15feae54b36a5cba604bda94a04a14f&camp=1789&creative=9325",
      },
      {
        title: "Sony FE 70-200mm f/2.8 GM OSS Lens",
        link: "https://www.amazon.com/Sony-70-200mm-2-8-OSS-Lens/dp/B01IDQEQ34/ref=sr_1_2?crid=1EVB2EOSVNTNM&amp;keywords=Sony%252Bf2.8%252B70-200%252Bgm&amp;qid=1703768569&amp;sprefix=sony%252Bf2.8%252B70-200%252Bgm%252Caps%252C212&amp;sr=8-2&amp;th=1&_encoding=UTF8&tag=pskinnertech-20&linkCode=ur2&linkId=8285eb489b62d0fd860209952ea69541&camp=1789&creative=9325",
      },
      {
        title: "Maono Microphone",
        link: "https://www.amazon.com/Microphone-MAONO-Condenser-Professional-Recording/dp/B07GQT8879/ref=sr_1_3?crid=OGRDBSH4MM8A&amp;keywords=maono%252Bmicrophone&amp;qid=1703768896&amp;sprefix=maono%252Caps%252C233&amp;sr=8-3&amp;th=1&_encoding=UTF8&tag=pskinnertech-20&linkCode=ur2&linkId=52b7f9d73b6c125ab00900503b6e0a75&camp=1789&creative=9325",
      },
      {
        title: "VICTIV 80in. Camera Tripod",
        link: "https://www.amazon.com/Aluminum-Foldable-Tripods-Monopods-Outdoor-AT40/dp/B09243T4ZJ/ref=sr_1_2_sspa?crid=3PS06PA8HEZ5J&amp;keywords=victiv%252Btripod&amp;qid=1703769139&amp;sprefix=Victiv%252B%252Caps%252C212&amp;sr=8-2-spons&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;th=1&_encoding=UTF8&tag=pskinnertech-20&linkCode=ur2&linkId=7ec49436994a48164caa03840796627a&camp=1789&creative=9325",
      },
      {
        title: "RAUBAY Dual LED Video Panel Lights",
        link: "https://www.amazon.com/dp/B09VL1J1YC?psc=1&amp;ref=ppx_yo2ov_dt_b_product_details&_encoding=UTF8&tag=pskinnertech-20&linkCode=ur2&linkId=5dade1eb1ebcb4feb43742d989c17de6&camp=1789&creative=9325",
      },
      {
        title: "Elgato 4K Video Capture Card",
        link: "https://www.amazon.com/Elgato-Cam-Link-Broadcast-Camcorder/dp/B07K3FN5MR/ref=sr_1_5?crid=V4P27MAFOS78&amp;keywords=4k+video+capture&amp;qid=1703769333&amp;sprefix=4k+video+capture%252Caps%252C192&amp;sr=8-5&_encoding=UTF8&tag=pskinnertech-20&linkCode=ur2&linkId=b513f4415dd8e95f6f9f2ec0d5ae5f92&camp=1789&creative=9325",
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
    buttonSecondaryText: "2389",
    color: "#000000",
    description:
      "Patrick Skinner | DevRel | @DevRelUniCohort #1 | @Developer_DAO Member | @POKTNetwork Socket Maintainer | Prev Paratrooper Medic @USArmy",
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
  title: "Web3 Developer | Content Creator | DevRel",
  bio: "I used to jump out of perfectly good airplanes for a living.  Now I build cool web3 products and teach others how to do it, too.",
  location: "Dallas, Texas, USA",
  locationLink: "https://maps.app.goo.gl/B567q7WbLMU4Js6U6",
  email: "me@patrickskinner.tech",
  items: GridItems,
} as const;
