import { CiSearch } from "react-icons/ci";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { IoAddCircleOutline } from "react-icons/io5";
import { useOpenAddContactModelContext } from "../../../Context/useOpenAddContactModel";

const Header = () => {
  const { handleTriggerOpen } = useOpenAddContactModelContext();
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mo4aAPP</h1>
          <div className="flex items-center gap-5">
            <i
              className="p-2 rounded-full hover:bg-[#363636] cursor-pointer"
              onClick={handleTriggerOpen}
            >
              <IoAddCircleOutline size={30} />
            </i>
            <i className="p-2 rounded-full hover:bg-[#363636] cursor-pointer">
              <HiMiniEllipsisVertical size={25} />
            </i>
          </div>
        </div>

        <form action="" className="mt-10 relative">
          <i className="absolute top-[12px] left-5">
            <CiSearch size={17} />
          </i>
          <input
            type="text"
            className="bg-[#5252528f] w-full py-2 px-12 focus:outline-0 focus:border-2 focus:border-green-600 focus:bg-transparent rounded-full"
            placeholder="Search or start a new chat"
          />
        </form>
      </div>
    </>
  );
};

export default Header;
