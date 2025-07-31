import useGetUsers from "../Hooks/useGetusers";

const User = () => {
  const { Users } = useGetUsers();
  console.log(Users);

  return (
    <>
      {Users?.map((el, index: number) => (
        <div
          key={index}
          className="flex gap-5 mt-7 hover:bg-[#353535b6] p-3 rounded-xl cursor-pointer"
        >
          <div>
            <img
              src="/96368389-e1cd-47d4-8e5f-3ac1084f3a83.jpeg"
              alt="UserProfile.png"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>

          <div>
            <h1>{el.userName}</h1>
            <p className="text-[#808080bd]">Last Message</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default User;
