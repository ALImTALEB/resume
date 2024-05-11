"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [

  {
    id: 0,
    color: "from-blue-600 to-blue-300",
    title: "MERN Booking App",
    desc: "Experience seamless hotel bookings with our user-friendly app. Discover and reserve your ideal accommodations effortlessly. Your next adventure starts here!",
    img: "/zervi.png",
    link: "https://mern-booking-app-t0zh.onrender.com/",
    git: "https://github.com/ALImTALEB/mern-booking-app",
  },
  
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Expense App",
    desc: "Track expenses effortlessly with our React-based app. Easily manage budgets, and stay on top of your finances. Simplify expense tracking and take control of your financial goals.",
    img: "/exp.png",
    link: "https://expense-app-mu.vercel.app",
    git: "https://github.com/ALImTALEB/Expense-App",
  },
  {
    id: 1,
    color: "from-yellow-100 to-blue-300",
    title: "RSVP App",
    desc: "Empower your event planning with our intuitive RSVP app built with React. Seamlessly manage guest lists, track responses, and send event updates, all in one place. With a user-friendly interface and real-time updates, organizing your event has never been easier.",
    img: "/rsvp.png",
    link: "https://rsvp-chi.vercel.app",
    git: "https://github.com/ALImTALEB/RSVP",
  },
  {
    id: 3,
    color: "from-violet-300 to-blue-300",
    title: "SCOREBOARD",
    desc: "Elevate your game with our React-based scoreboard app. Keep track of scores, time in real-time. Streamline competition management and make every match memorable.",
    img: "/score.png",
    link: "https://pexa-scoreboard.netlify.app",
  git: "https://github.com/ALImTALEB/React-scoreBoardApp",

  },
  {
    id: 4,
    color: "from-gray-100 to-red-200",
    title: "Flashcards App",
    desc: "Study smarter with our simple flashcard app! Enhance your learning experience with quick quizzes tailored to your needs.",
    img: "/flash.png",
    link: "https://pink-shy-catfish.cyclic.app",
  git: "https://github.com/ALImTALEB/Flashcards-app"
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-5rem)] text-black flex flex-col gap-16 items-center justify-center text-6xl md:text-8xl text-center">
          My Works
          {/* scroll svg */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>

        <div className="sticky top-0 -mt-[16px] flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[300px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:text-lg lg:w-[500px]">
                    {item.desc}
                  </p>
                  <div className="flex gap-4 justify-end">
                    <Link className="" href={item.link}>
                      {" "}
                      <button className=" bg-white text-gray-600 font-semibold text-sm p-2 md:p-4 md:text-md rounded  lg:text-lg ">
                        See Demo
                      </button>{" "}
                    </Link>
                    <Link href={item.git}>
                      {" "}
                      <button className=" bg-white text-gray-600 font-semibold  text-sm p-2 md:p-4 md:text-md rounded  lg:text-lg ">
                        See Code
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
