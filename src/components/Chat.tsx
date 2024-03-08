import React from "react";
import Cam from "@/assets/cam.png";
import Add from "@/assets/add.png";
import More from "@/assets/more.png";
import Messages from "./Messages";
import Input from "./Input";
type Props = {};

export default function Chat({}: Props) {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="Cam" />
          <img src={Add} alt="Add" />
          <img src={More} alt="More" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
