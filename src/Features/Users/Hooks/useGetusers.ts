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
  const [UserById, setUserById] = useState<
    | {
        id: string;
        userName: string;
        user_id: string;
      }[]
    | null
  >(null);

  useEffect(() => {
    socket.emit("get-sockets");

    socket.on("get-sockets", (data: any) => {
      const users = Array.isArray(data)
        ? data.filter((el) => el.user_id !== socket.id)
        : [];

      setUsers(users);
    });

    return () => {
      socket.off("get-sockets");
    };
  }, []);

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
