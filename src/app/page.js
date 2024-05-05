"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{duration: 1}}
    >
    <div className="h-full flex flex-col lg:gap-20 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* image container */}
      <div className="h-1/3 md:h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/portf.png" alt="" fill className="object-contain" />
      </div>
      {/* text container */}
      <div className="h-2/3 md:h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 items-center justify-center text-black">
            {/* title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          Creating Virtual Worlds, Imagining the Future,
        </h1>
            {/* desc */}
        <p className="md:text-xl">
          Welcome to my digital canvas, a place where creativity and innovation
          come together. Having a strong sense of design and being an expert
          programmer, my portfolio features a wide range of projects that
          demonstrate my dedication to quality work.
        </p>
            {/* buttons */}
        <div className="w-full flex gap-4">
        <Link href="/portfolio" >
          <button className="p-4 ring-1 ring-black bg-black text-white">
            View My Work
          </button>
        </Link>
        <Link href="/contact" >
          <button className="p-4 ring-1 ring-black">Contact Me</button>
        </Link>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default HomePage;
