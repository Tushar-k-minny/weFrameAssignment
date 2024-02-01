import { StaticImageData } from "next/image";
import ad1 from "../../public/ad1.png";
import ad2 from "../../public/ad2.png";

import ad3 from "../../public/ad3.png";

export interface AdType {
  img: StaticImageData;
  title: string;
  subText: string;
}

export const AdList: AdType[] = [
  {
    img: ad1,
    title: "Build your business",
    subText:
      "Shopify has all the tools you need to start, sell, market, and manage.",
  },
  {
    img: ad2,
    title: "Libre Coffee",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    img: ad3,
    title: "KFC",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    img: ad1,
    title: "Build your business",
    subText:
      "Shopify has all the tools you need to start, sell, market, and manage.",
  },
  {
    img: ad2,
    title: "Libre Coffee",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    img: ad3,
    title: "KFC",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    img: ad1,
    title: "Build your business",
    subText:
      "Shopify has all the tools you need to start, sell, market, and manage.",
  },
  {
    img: ad2,
    title: "Libre Coffee",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    img: ad3,
    title: "KFC",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];
