"use client";
import React, { useState } from "react";

const SideNavbar = () => {
  const [toggleBoard, setToggleBoard] = useState("board-1");
  return (
    <div className="flex flex-col gap-4 py-8 w-[440px] pr-4 border-r-[#353d3f] border-r-[1px] bg-[#1b1f20] h-screen">
      <h1 className="px-8">Kanban Watch</h1>
      <div className="flex flex-col place-items-left">
        <span className="px-8 py-3 text-neutral-400 text-xs tracking-widest">
          ALL CATEGORIES (#)
        </span>
        <button
          onClick={() => setToggleBoard("board-1")}
          className={`px-8 text-left py-3 font-semibold ${
            toggleBoard === "board-1"
              ? "bg-cyan-500 rounded-e-full"
              : "text-neutral-400"
          }`}
        >
          Anime
        </button>
        <button
          onClick={() => setToggleBoard("board-2")}
          className={`px-8 text-left py-3 font-semibold ${
            toggleBoard === "board-2"
              ? "bg-cyan-500 rounded-e-full"
              : "text-neutral-400"
          }`}
        >
          Kdrama
        </button>
        <button
          onClick={() => setToggleBoard("board-3")}
          className={`px-8 text-left py-3 font-semibold ${
            toggleBoard === "board-3"
              ? "bg-cyan-500 rounded-e-full"
              : "text-neutral-400"
          }`}
        >
          American
        </button>

        <button className="px-8 text-left py-3 text-[#0591aa]  font-semibold">
          + Create New Category
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;
