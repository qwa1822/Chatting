import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="navbar">
      <span className="logo">Lam Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/20299478/pexels-photo-20299478.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <span>John</span>
        <button>LogOut</button>
      </div>
    </div>
  );
}
