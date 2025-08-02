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
        </form>
      </div>
    </>
  );
};

export default Chat;
