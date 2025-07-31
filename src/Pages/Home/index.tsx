import Header from "../../Features/Chats/Components/Header";
import User from "../../Features/Chats/Components/User";

const Home = () => {
  return (
    <>
      <div className="bg-[#141414] text-white border-r-[0.5px] w-[35pc] p-4 border-[#3d3d3d]">
        <Header />
        <User />
      </div>
    </>
  );
};

export default Home;
