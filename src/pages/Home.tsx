import Chat from "@/components/Chat";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
