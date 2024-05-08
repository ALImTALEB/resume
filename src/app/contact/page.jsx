"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoader(true)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setLoader(false)
        },
        (error) => {
          setError(true);
          setLoader(false)
        }
      );
  };

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER  */}
        <div className="h-1/3 lg:h-full lg:w-1/2 text-black flex flex-row items-center justify-center text-4xl md:text-6xl">
          <div className="flex gap-2 items-center">
            {text.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              >
                {" "}
                {letter}{" "}
              </motion.span>
            ))}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
              color={"#4AC4E2"}
              fill={"none"}
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 8C15 8 14 9 14 10C14.75 9 16.25 9 17 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00897 9H8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* FORM CONTAINER  */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-2/3 lg:h-full lg:w-1/2 bg-blue-50 text-black rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Ali,</span>
          <textarea
          rows={6}
            placeholder="Enter your message..."
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My email is:</span>
          <input
            name="user_email"
            placeholder="Enter your email address"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Best Regards</span>
          <button
            type="submit"
            className="bg-blue-100 rounded font-semibold text-gray-600"
          >
            {loader ? "Sending.." : "Send"}
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message was delivered successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something has gone wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
