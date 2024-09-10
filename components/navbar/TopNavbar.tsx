"use client";
import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

const TopNavbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="flex justify-between place-items-center bg-[#1b1f20] p-8">
      <h1 className="text-2xl font-bold">Category Name</h1>
      <div className="flex gap-2">
        <button className="rounded-full bg-cyan-500 w-[120px] flex justify-center place-items-center py-2">
          Add
          <IoIosAdd />
        </button>
        <div className="flex justify-center">
          <button onClick={() => setShowOptions(!showOptions)}>
            <BsThreeDotsVertical size={"1.25rem"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
