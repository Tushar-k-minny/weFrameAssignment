import { ReactElement } from "react";
import { AdIcon, ArticleIcon, CategIcon, StoryIcon } from "./Icons";

export interface SectionCardType {
  title: string;
  total: string;
  icon: ReactElement;
}

export const SectionCardList: SectionCardType[] = [
  {
    title: "Articles",
    total: "4,950",
    icon: ArticleIcon,
  },
  {
    title: "Categories",
    total: "10,275",
    icon: CategIcon,
  },
  {
    title: "Stories",
    total: "1,090",
    icon: StoryIcon,
  },
  {
    title: "Advertisements",
    total: "150",
    icon: AdIcon,
  },
];
