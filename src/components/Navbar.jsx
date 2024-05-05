"use client";
import React, { useState } from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
      transition: {
        delay: 0.1,
      },
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
      transition: {
        delay: 0.2,
      },
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
      transition: {
        delay: 0.1,
      },
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
      transition: {
        delay: 0.4,
      },
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:gap-2 text-xl">
      {/* links */}
      <div className="hidden text-black md:flex gap-4 lg:w-1/3">
        {links.map((link, i) => (
          <NavLink link={link} key={i} />
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex lg:w-1/3 justify-center ">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1 w-8 flex items-center justify-center">
            Ali
          </span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            Taleb
          </span>
        </Link>
      </div>
      {/* social */}
      <div className="hidden md:flex items-center justify-center gap-4 lg:w-1/3 lg:justify-end ">
        <Link className="text-black" href="https://github.com/ALImTALEB">
          <GitHubIcon sx={{ fontSize: 40 }} />
        </Link>
        <Link
          className="text-black"
          href="https://www.linkedin.com/in/ali-taleb-9a6345160/"
        >
          <LinkedInIcon sx={{ fontSize: 47 }} />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black z-40 text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {/* social */}
            <div className="flex items-center justify-center gap-2">
              <Link className="text-white" href="https://github.com/ALImTALEB">
                <GitHubIcon sx={{ fontSize: 40 }} />
              </Link>
              <Link
                className="text-white"
                href="https://www.linkedin.com/in/ali-taleb-9a6345160/"
              >
                <LinkedInIcon sx={{ fontSize: 47 }} />
              </Link>
            </div>

            {links.map((link, i) => (
              <motion.div variants={listItemVariants} className="">
                <Link key={i} href={link.url}>
                  {" "}
                  <button>{link.title}</button>{" "}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar