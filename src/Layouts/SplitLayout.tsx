import Home from "../Pages/Home";
import { Sidebar } from "./Sidebar";

const SplitLayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Home />
      </div>
    </>
  );
};

export default SplitLayout;
