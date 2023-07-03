import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.4,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.4,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, My name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Alberto Mira.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        I am Full Stack Developer.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I am a full-stack web developer specializing in developing full-stack web applications using practical frameworks.
        I am passionate about solving problems for others.
        A good solution for me usually takes a bit more creativity to adapt and take more effort to be perfect.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="mt-12"
      >
      </motion.div>
    </div>
  );
}
