"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-50"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black z-40 rounded-b-[100px]"
          animate={{ height: "0vh" }}
          exit={{ height: "120vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 right-0 left-0 text-white text-6xl md:text-8xl cursor-default z-50 w-fit h-fit"
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        > {pathName.substring(1)} </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black z-40 rounded-t-[100px] bottom-0"
          initial={{ height: "120vh" }}
          animate={{ height: "0vh", transition: {delay: 0.5 } }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
