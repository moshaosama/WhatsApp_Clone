import type { ReactElement } from "react";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { LiaRocketchat } from "react-icons/lia";

interface IconsType {
  icon: ReactElement;
}

export const Icons: IconsType[] = [
  {
    icon: <IoChatboxEllipsesSharp size={28} color="white" />,
  },
  {
    icon: <HiOutlineStatusOnline size={28} color="white" />,
  },
  {
    icon: <LiaRocketchat size={28} color="white" />,
  },

  {
    icon: <HiMiniUserGroup size={28} color="white" />,
  },
];
