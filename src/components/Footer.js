import React from "react";
import {Fagithub, FaTwitter, FaLinkendin} from "react-icons/fa";

const Footer   = () =>{
    return (
        <footer
           className="bg-white border-t p-4 text-sm text-center text-gray-600 mt-auto">
            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black flex items-center space-x-1" 
              >
              <Fagithub/>
              <span>Github</span>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black flex items-center space-x-1" 
              >
              <FaTwitter/>
              <span>Twitter</span>
              </a>

              <a
                href="https://Linkendin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black flex items-center space-x-1" 
              >
              <FaLinkendin/>
              <span>Linkendin</span>
              </a>
            </div>

            <p className="mt-2">
                &copy; {new Date().getFullYear()} Task Manager. All Rights Reserved.
            </p>
           </footer>
    )
}