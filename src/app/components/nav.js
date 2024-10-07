"use client";

import { useState } from "react";

import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdGolfCourse } from "react-icons/md";
import { TbTournament } from "react-icons/tb";
import { MdEmojiPeople } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";


const routes = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "Courses", href: "/courses", icon: <MdGolfCourse /> },
    { name: "Tournaments", href: "/tournaments", icon: <TbTournament /> },
    { name: "Players", href: "/players", icon: <MdEmojiPeople /> },
    {name: "Leaderboard", href: "/leaderboard", icon: <FaPeopleLine />}

]

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
      <div className="flex justify-start z-50 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="menu-btn"
          className={`z-50 ${isOpen ? "text-green-500" : "text-brown-500"} p-4`}
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <nav
        className={` fixed top-0 left-0 h-svh w-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <ul className="flex flex-col items-start justify-center h-full space-y-6 bg-white">
          {routes.map(({ name, href, icon }) => (
            <li
              onClick={() => setIsOpen(!open)}
              className="text-green-500 p-4 flex"
              key={href}
            >
            
              <Link className="flex items-center gap-2" href={href}> {icon} {name}</Link>
             
            </li>
          ))}
          
          
        </ul>
      </nav>
    </>
    )
}
