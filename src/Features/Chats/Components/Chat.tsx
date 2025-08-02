import { IoSend } from "react-icons/io5";

const Chat = () => {
  return (
    <>
      <div className="relative">
        <img
          src="/ts7vuoswhwf41.jpg"
          alt="chatImage.png"
          className="object-cover h-[91vh] w-full"
        />

        <form className="absolute bottom-3 left-5 w-[77.5pc]">
          <input
            type="text"
            className="bg-[#303030] px-2 text-white w-full py-3 rounded-full"
          />

          <p className="absolute bottom-2 right-3">
            <button className="bg-green-500 hover:bg-green-800 transition-all duration-300 cursor-pointer p-[10px] rounded-full ">
              <IoSend color="white" />
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Chat;
