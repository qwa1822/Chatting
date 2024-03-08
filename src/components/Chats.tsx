import React from "react";

type Props = {};

export default function Chats({}: Props) {
  return (
    <>
      <div className="userchat">
        <img
          src="https://images.pexels.com/photos/20299478/pexels-photo-20299478.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userchat">
        <img
          src="https://images.pexels.com/photos/20299478/pexels-photo-20299478.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userchat">
        <img
          src="https://images.pexels.com/photos/20299478/pexels-photo-20299478.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </>
  );
}
