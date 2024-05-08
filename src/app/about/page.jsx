"use client";
import Brain from "@/components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef);

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef);

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-y-scroll lg:flex" ref={containerRef}>
        {/* text container */}
        <div className="p-2 text-black sm:p-8 md:p-12 lg:p-20 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-60 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* bio */}
          <div className="flex  flex-col gap-12 justify-center">
            {/* bio title */}
            <h1 className="font-bold  text-2xl">BIOGRAPHY</h1>
            {/* details bio */}
            <p className="text-lg">
              <strong>Hi, I'm Ali Taleb, a Junior Full Stack JS Web Developer.</strong><br />
              Passionate about crafting user-centric web applications with
              JavaScript. Eager to learn, grow, and make an impact. Let's build
              something awesome together!
            </p>
            {/* quote  */}
            <span className="italic ">
            "Code with passion, build with purpose"
            </span>
            {/* signature sign svg*/}
            <div className="self-end -mt-24">
              <svg fill="none" width={200} height={200} viewBox="0 0 300 300">
                <path
                  d="M9.92509,136.32959c-4.86434,8.5126-9.87091,32.41507,2.99625,36.70412c11.03432,3.67811,20.97378-7.41131,20.97378-17.22846c0-3.75363-.13197-7.5334-.74906-11.23595-.20931-1.25584-.17969-4.88407-.74906-3.74532-6.34838,12.69678,1.49813,35.19099,1.49813,48.68914"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="0.6"
                />
                <path
                  d="M39.88764,191.01124c19.46145-14.59608,28.97094-70.11078,5.24345-56.92884-4.71211,2.61784-2.69438,51.77708,3.74532,56.92884c6.3938,5.11504,16.55951,2.9047,21.72285-2.99625c1.109-1.26743,3.39656-5.74683,3.74532-7.49064.24484-1.2242,0-4.99376,0-3.74532c0,7.56222-1.40886,14.98127,8.2397,14.98127"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="0.6"
                />
                <path
                  d="M75.09363,162.54682c-.99875.74906-1.9975,1.49813-2.99625,2.24719"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="0.6"
                />
                <path
                  d="M93.07116,192.50936c-.49938-1.49813-2.20435-3.08193-1.49813-4.49438c1.6974-3.39479,4.25194,10.99351-3.74532,2.99625"
                  transform="translate(.000001 0.000001)"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="0.6"
                />
                <path
                  d="M105.80524,194.00749c15.18447-11.38835,16.35171-33.72493,13.48315-50.93633"
                  transform="translate(.000001 0)"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="0.6"
                />
                <path
                  d="M109.55056,156.55431c6.28896,0,12.40706.74906,18.72659.74906"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="0.6"
                />
                <path
                  d="M117.79026,176.77903c-3.59288,8.98221,2.90982,14.06511,11.23596,15.73034"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="0.6"
                />
                <path
                  d="M134.26966,149.06367c-.97537,5.85222-2.29525,11.99911-1.49813,17.97753c3.6326,27.24448,29.41422-6.88061,20.22472-14.23221-1.13688-.9095-2.87177,1.08246-3.74532,2.24719-5.72019,7.62692-1.49813,31.70546-1.49813,41.1985"
                  transform="translate(.000001 0)"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="0.6"
                />
                <path
                  d="M153.74532,194.00749c8.3764-5.58427,38.28469-49.21892,16.4794-53.18352-11.90875-2.16523-4.99793,52.07822-1.49813,57.6779c8.41949,13.47119,39.52272-19.68032,25.46817-28.46442-8.24883-5.15552-19.50384,30.24697,12.73408,26.21723"
                  transform="translate(0 0.000001)"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="0.6"
                />
                <path
                  d="M209.17603,134.0824c0,12.7374,1.49813,25.38075,1.49813,38.20225c0,5.51397,1.82271,10.21203,2.24719,15.73034.09575,1.24476.39479,4.92969,0,3.74532-2.31167-6.93503,4.8864-35.24802,16.4794-21.72285c13.61457,15.88366-14.08682,45.52539-19.47565,23.97004-1.36213-5.44853.74906-9.59341.74906-14.98127"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="0.6"
                />
              </svg>
            </div>
            {/* scroll svgg */}
            <div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
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
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* skills */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* skill title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* skill list */}
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQLite
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Mongoose
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Sequelize
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
            </motion.div>
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
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* experience */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={experienceRef}
          >
            {/* experince title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCES
            </motion.h1>
            {/* experiences list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className=""
            >
              {/* experiences list item */}
              <div className="flex justify-between">
                {/* left */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Full Stack Developer Intern
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">
                    In order to create an improved version 2.0, I conducted a
                    thorough examination of the current public profile solution
                    during my employment. In order to improve the functionality
                    of the solution, I proposed and included additional features
                    that made use of external APIs and headless WordPress APIs.
                    Furthermore, I used Figma to carefully design the updated
                    version, giving special attention to creating an
                    aesthetically pleasing and user-friendly interface. In
                    addition, I used ReactJS to create a scalable frontend
                    application that offers a fluid and responsive user
                    interface.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Feb 2023 – Aug 2023
                  </div>
                  {/* company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    AT Worthy Technology, Inc
                  </div>
                </div>

                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 bg-gray-600 rounded relative h-full">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
              {/* experiences list item */}
              <div className="flex justify-between">
                {/* left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 bg-gray-600 rounded relative h-full">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Full Stack JS Developer Intern
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">
                    I led the development of an e-commerce web application. This
                    entailed using MongoDB, Express.js, React.js, Redux, and
                    Node.js to develop a dynamic and efficient web platform
                    tailored to the company's requirements.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Jan 2022 – Mar 2022
                  </div>
                  {/* company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Echebbi Informatique
                  </div>
                </div>
              </div>
              {/* experiences list item */}
              <div className="flex justify-between">
                {/* left */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Trainee
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">
                    During my time as a trainee, I received significant
                    experience performing a variety of office chores, such as
                    preparing reports in Word and fulfilling desk-related
                    obligations based on client needs. In addition, I
                    participated in a front-end technology training program,
                    where I worked on projects to apply what I learned.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Jul 2021 – Aug 2021
                  </div>
                  {/* company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit mb-4">
                    GENIUS SOFT
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 bg-gray-600 rounded relative h-full">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
