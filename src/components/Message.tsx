import React from "react";

export default function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/20147039/pexels-photo-20147039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
      </div>
    </div>
  );
}
