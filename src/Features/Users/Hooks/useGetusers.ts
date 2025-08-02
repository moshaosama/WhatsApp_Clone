import { useEffect, useState } from "react";
import { socket } from "../../../ConnectSocket/Socket";

const useGetUsers = () => {
  const [Users, setUsers] = useState<
    {
      id: string;
      userName: string;
      user_id: string;
    }[]
  >([]);
  const [UserById, setUserById] = useState<{
    id: string;
    userName: string;
  } | null>(null);

  useEffect(() => {
    socket.on("get-sockets", (data) => {
      setUsers(data);
    });
  }, [Users]);

  const handleClickUser = (el: {
    id: string;
    userName: string;
    user_id: string;
  }) => {
    socket.emit("set-user-by-id", el.user_id);
  };

  useEffect(() => {
    socket.on("get-user-by-id", (data) => {
      setUserById(data);
    });
  }, [UserById]);

  return { Users, handleClickUser, UserById };
};

export default useGetUsers;
