import React from "react";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lam Chag</span>
        <span className="title">Register</span>
        <form action="">
          <input type="email" placeholder="display name" />
          <input type="password" placeholder="display name" />
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            placeholder="display name"
          />

          <button>Sign up</button>
        </form>
        <p>you don't have an account?</p>
      </div>
    </div>
  );
}
