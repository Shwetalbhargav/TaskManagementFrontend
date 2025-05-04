'use client'

import React from "react";
import {FaBars, FaUserCircle} from "react-icons/fa";

const Header = ({onToggle}) =>{
    return(
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm p-4">
      <div className="flex justify-between items-center">
        <button
          onClick={onToggle}
          className="text-gray-600 hover:text-black text-xl transition"
          aria-label="Toggle sidebar"
        >
          <FaBars />
        </button>
        <h1 className="text-xl font-semibold">Task Manager</h1>
        <FaUserCircle className="text-2xl text-gray-500" />
      </div>
    </header>
    );
};

export default Header