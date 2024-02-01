import Image from "next/image";
import ProfileImage from "../../public/ProfileImage.png";
import { downIcon } from "../ui/Icons";

function Profile() {
  return (
    <div className=" h-[60px] flex flex-row bg-white justify-start items-center gap-3 px-4 py-[4px] rounded-lg border">
      <div>
        <Image src={ProfileImage} alt="profile image" width={36} height={36} />
      </div>
      <div className="flex flex-col justify-start items-start gap-[-4px] ">
        <h3 className="text-xs mb-[-5px]">Welcome back,</h3>
        <h2 className="text-s font-medium ">Akshita Patel</h2>
      </div>
      <div>{downIcon}</div>
    </div>
  );
}

export default Profile;
