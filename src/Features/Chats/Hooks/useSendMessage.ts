import { useForm } from "react-hook-form";
import { socket } from "../../../ConnectSocket/Socket";
import { useEffect, useState } from "react";
import useGetUsers from "../../Users/Hooks/useGetusers";

const useSendMessage = () => {
  const { register, handleSubmit } = useForm();
  const { UserById } = useGetUsers();
  const [Message, setMessage] = useState<string>("");
  const [sendMessage, setSendMessage] = useState<{ message: string } | null>(
    null
  );

  const handleSendMessage = (data: any) => {
    socket.emit("send-message-client", {
      message: data.message,
      receiverId: UserById?.[0]?.user_id as string,
    });
    setSendMessage(data);
  };

  useEffect(() => {
    socket.on("send-message-server", (data: string) => {
      setMessage(data);
    });
  }, [Message]);

  return { handleSendMessage, register, handleSubmit, Message, sendMessage };
};

export default useSendMessage;
