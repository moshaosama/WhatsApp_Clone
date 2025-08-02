import Chat from "../../Features/Chats/Components/Chat";
import HeaderChat from "../../Features/Chats/Components/HeaderChat";
import Header from "../../Features/Users/Components/Header";
import User from "../../Features/Users/Components/User";

const Home = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="bg-[#141414] text-white border-r-[0.5px] w-[35pc] p-4 border-[#3d3d3d]">
          <Header />
          <User />
        </div>

        <div>
          <HeaderChat />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Home;
