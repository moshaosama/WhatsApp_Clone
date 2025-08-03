import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import cn from "../../../Utils/cn";
import { useOpenAddContactModelContext } from "../../../Context/useOpenAddContactModel";
import { io } from "socket.io-client";

const AddContactModel = () => {
  const { isOpen, handleTriggerOpen } = useOpenAddContactModelContext();
  const handleClick = () => {
    const socket = io("http://localhost:3000");
    socket.on("connect", () => {
      console.log("✅ New socket connected:", socket.id);
      handleTriggerOpen();
    });
  };

  return (
    <>
      <div
        className={cn(
          "absolute top-0 left-0  bg-[#141414] h-[100vh] transition-all duration-500 z-50",
          isOpen ? "w-[27pc]" : "w-0 overflow-hidden"
        )}
      >
        <div className="flex items-center gap-5 m-5">
          <i
            onClick={handleTriggerOpen}
            className="p-2 rounded-full hover:bg-[#363636] cursor-pointer"
          >
            <IoArrowBack size={25} />
          </i>

          <h1>New Contact</h1>
        </div>

        <form action="" className="my-20 mx-5 w-full grid grid-cols-2 gap-10">
          <p className="flex items-center gap-6 col-span-3 w-full">
            <label htmlFor="FirstName">
              <FaUserAlt color="gray" />
            </label>
            <input
              type="text"
              id="FirstName"
              placeholder="FirstName"
              className=" border-b-2 w-80 border-b-[gray] py-3 focus:outline-0"
            />
          </p>

          <p className="flex items-center gap-6 col-span-3 w-full mx-10">
            <input
              type="text"
              id="LastName"
              placeholder="LastName"
              className=" border-b-2 w-80 border-b-[gray] py-3 focus:outline-0"
            />
          </p>

          <p className="flex items-center gap-6 col-span-3 w-full">
            <label htmlFor="Phone">
              <FaPhoneAlt color="gray" />
            </label>
            <input
              type="text"
              id="Phone"
              placeholder="Phone"
              className=" border-b-2 w-80 border-b-[gray] py-3 focus:outline-0"
            />
          </p>

          <div className=" h-[54vh] flex justify-end items-end col-span-2">
            <p className="bg-green-500 hover:bg-green-700 transition-all duration-300 cursor-pointer focus:outline-0 w-32 text-center py-2 rounded-xl font-bold">
              <button onClick={handleClick}>Save</button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddContactModel;
