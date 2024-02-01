import { SectionCardList } from "../components/ui/SectionCardList";
import { ArticleCard, SectionCard } from "../components/ui/Card";
import Greeting from "../components/ui/Greeting";
import { ArticleItems } from "../components/ui/ArticleCardItems";
import { StoriesList } from "@/components/ui/StoriesList";
import { StoriesCard } from "@/components/ui/StoriesCard";
import { AdList } from "@/components/ui/AdList";
import AdCard from "@/components/ui/AdCard";
import Navbar from "@/components/NavBar";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <nav className="max-w-full">
        <Navbar />
      </nav>
      <div className="mr-4">
        <Greeting />
        <section className="flex flex-wrap justify-center gap-6">
          {SectionCardList.map((el) => {
            return (
              <SectionCard
                key={el.title}
                title={el.title}
                total={el.total}
                icon={el.icon}
              />
            );
          })}
        </section>

        <section className="flex flex-col sm:flex-wrap pt-4   ">
          <div className="flex flex-row justify-between items-center p-4 pt-8 font-semibold ">
            <h2 className=" text-lg "> Top Articles </h2>
            <Link href={""}>
              <h3 className="text-[#9058FF]">See all</h3>
            </Link>
          </div>

          <div className=" flex flex-wrap flex-row justify-center">
            {ArticleItems.map((el) => {
              return <ArticleCard key={el.title} it={el} />;
            })}
          </div>
        </section>

        <section className="flex flex-col  pt-4 pr-6    ">
          <div className="flex flex-row justify-between items-center p-4 pt-8 font-semibold ">
            <h2 className=" text-lg "> Top Stories </h2>
            <Link href={""}>
              <h3 className="text-[#9058FF]">See all</h3>
            </Link>
          </div>

          <div className="flex flex-row flex-wrap justify-center lg:flex-nowrap lg:overflow-x-scroll lg:justify-start lg:pb-4 gap-4 ">
            {StoriesList.map((it, index) => {
              return <StoriesCard key={index} it={it} />;
            })}
          </div>
        </section>

        <section className="flex flex-col  justify-start md:justify-center pt-4   ">
          <div className="flex flex-row justify-between items-center p-4 pt-8 font-semibold ">
            <h2 className=" text-lg "> Top Ads </h2>
            <Link href={""}>
              <h3 className="text-[#9058FF]">See all</h3>
            </Link>
          </div>

          <div className="flex  flex-wrap justify-center  lg:justify-start lg:flex-nowrap lg:overflow-x-scroll   flex-row    gap-4  ">
            {AdList.map((it, index) => {
              return <AdCard key={index} it={it} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
