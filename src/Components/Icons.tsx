import { Icons } from "../Constants/Icons";

const Icons_Render = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        {Icons?.map((el, index: number) => (
          <div
            key={index}
            className="p-2 rounded-full hover:bg-[#363636] cursor-pointer"
          >
            <i>{el.icon}</i>
          </div>
        ))}
      </div>
    </>
  );
};

export default Icons_Render;
