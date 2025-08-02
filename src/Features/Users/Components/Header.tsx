import { CiSearch } from "react-icons/ci";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { IoAddCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mo4aAPP</h1>
          <div className="flex items-center gap-5">
            <i>
              <IoAddCircleOutline size={30} />
            </i>
            <i>
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
