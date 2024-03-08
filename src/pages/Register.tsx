import React from "react";
import Add from "@/assets/add.png";
type Props = {};

export default function Register({}: Props) {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lam Chag</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="Your  name" />
          <input type="email" placeholder=" name" />
          <input type="password" placeholder="password" />
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            placeholder="display name"
          />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an Login</p>
      </div>
    </div>
  );
}
