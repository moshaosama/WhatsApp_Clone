import { IoSend } from "react-icons/io5";
import useSendMessage from "../Hooks/useSendMessage";
import cn from "../../../Utils/cn";

const Chat = () => {
  const { handleSendMessage, handleSubmit, register, Message, sendMessage } =
    useSendMessage();

  return (
    <>
      <div className="relative">
        <img
          src="/ts7vuoswhwf41.jpg"
          alt="chatImage.png"
          className="object-cover h-[91vh] w-full"
        />

        <div className={cn("flex flex-col absolute top-4  w-full gap-3")}>
          {Message && (
            <div className="w-[76pc] flex  justify-start">
              <div className="text-white rounded-xl  p-3 bg-[#2c2c2c]">
                <h1 className="text-xl font-bold">{Message}</h1>
              </div>
            </div>
          )}

          {sendMessage && (
            <div className="w-full flex justify-end">
              <div className="text-white text-end  rounded-xl p-3 bg-green-600">
                <h1 className="text-xl font-bold">{sendMessage?.message}</h1>
              </div>
            </div>
          )}
        </div>

        <form
          className="absolute bottom-3 left-5 w-[77.5pc]"
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <input
            type="text"
            className="bg-[#303030] px-2 text-white w-full py-3 rounded-full"
            {...register("message", { required: true })}
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
