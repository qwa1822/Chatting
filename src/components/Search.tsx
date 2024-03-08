import React from "react";

type Props = {};

export default function Search({}: Props) {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a User" />
        <div className="userchat">
          <img
            src="https://images.pexels.com/photos/20299478/pexels-photo-20299478.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
          />
          <div className="userChatInfo">
            <span>Jane</span>
          </div>
        </div>
      </div>
    </div>
  );
}
