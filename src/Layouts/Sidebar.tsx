import { CiSettings } from "react-icons/ci";
import { Icons } from "../Constants/Icons";

export const Sidebar = () => {
  return (
    <>
      <div className="bg-[#1d1f1f] border-r-[0.1px] border-[#3d3d3d] w-fit h-[100vh] flex flex-col justify-between p-4">
        <div className="flex flex-col gap-3">
          {Icons?.map((el, index: number) => (
            <div key={index}>
              <i>{el.icon}</i>
            </div>
          ))}
        </div>

        <div>
          <div className="flex flex-col items-center justify-center gap-3">
            <i>
              <CiSettings size={28} color="white" />
            </i>

            <img
              src="/96368389-e1cd-47d4-8e5f-3ac1084f3a83.jpeg"
              alt="Personal-Image.png"
              className="w-9 h-9 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
