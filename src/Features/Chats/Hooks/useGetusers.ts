import { useEffect, useState } from "react";
import { socket } from "../../../ConnectSocket/Socket";

const useGetUsers = () => {
  const [Users, setUsers] = useState<{ id: string; userName: string }[]>([]);
  useEffect(() => {
    socket.on("get-sockets", (data) => {
      setUsers(data);
    });
  }, [Users]);

  return { Users };
};

export default useGetUsers;
