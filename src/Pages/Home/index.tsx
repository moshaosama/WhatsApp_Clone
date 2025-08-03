import DownloadApp from "../../Components/DownloadApp";
import OpenAddContactModelProvider from "../../Context/useOpenAddContactModel";
import AddContactModel from "../../Features/AddContact/Components/AddContactModel";
import Chat from "../../Features/Chats/Components/Chat";
import HeaderChat from "../../Features/Chats/Components/HeaderChat";
import Header from "../../Features/Users/Components/Header";
import User from "../../Features/Users/Components/User";
import useGetUsers from "../../Features/Users/Hooks/useGetusers";

const Home = () => {
  const { UserById } = useGetUsers();
  return (
    <>
      <div className="flex w-full">
        <OpenAddContactModelProvider>
          <div className="bg-[#141414] text-white border-r-[0.5px] w-[35pc] p-4 relative border-[#3d3d3d]">
            <Header />
            <User />
            <AddContactModel />
          </div>
        </OpenAddContactModelProvider>

        {UserById === null ? (
          <DownloadApp />
        ) : (
          <div>
            <HeaderChat />
            <Chat />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
