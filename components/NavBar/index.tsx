import DateCard from "./Date";
import Profile from "./Profile";
import Search from "./search";

export default function Navbar() {
  return (
    <div className="h-[70px] flex justify-between gap-4 px-4 py-4 rounded-xl bg-white ">
      <Search />
      <div className="flex flex-row gap-4 items-center">
        <DateCard />
        <Profile />
      </div>
    </div>
  );
}
