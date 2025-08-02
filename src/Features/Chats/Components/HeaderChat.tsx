import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import useGetUsers from "../../Users/Hooks/useGetusers";

const HeaderChat = () => {
  const { UserById } = useGetUsers();

  return (
    <>
      <div className="bg-[#141414] flex justify-between items-center text-white w-[80pc] p-4">
        <div className="flex gap-4 items-center">
          <img
            src="/96368389-e1cd-47d4-8e5f-3ac1084f3a83.jpeg"
            alt="userImg.png"
            className="w-12 rounded-full h-12 object-cover"
          />
          <h1 className="font-bold">{UserById?.[0]?.userName}</h1>
        </div>

        <div className="flex gap-6">
          <IoSearch size={25} />
          <HiMiniEllipsisVertical size={25} />
        </div>
      </div>
    </>
  );
};

export default HeaderChat;
