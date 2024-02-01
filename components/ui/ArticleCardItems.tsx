import buisness from "../../public/Buisness.png"
import economy from "../../public/Economy.png"
import politics from "../../public/Politics.png"


export interface ArticleItems {
  title: string;
  topic: string;
  writer: string;
  isPublished: true;
  tags: string[];
  image: string;
}
export const ArticleItems = [
  {
    topic: "Business",
    title: "7 Rules of Effective Branding",

    writer: "John Doe",
    isPublished: false,
    tags: ["Branding", "Communication"],
    image: buisness,
  },
  {
    topic: "Economy",
    title: "Research on Biodiversity",

    writer: "Maria Doe",
    isPublished: true,
    tags: ["World", "Population"],
    image: economy
  },
  {
    topic: "Politics",
    title: "Close and historical ties to h...",

    writer: "Maria Doe",
    isPublished: true,
    tags: ["Politics", "Defense"],
    image: politics
  },

];
