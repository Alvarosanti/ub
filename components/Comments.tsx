"use client";
import React from "react";
import { styles } from "../app/styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../app/motion";
import { testimonials } from "@/constants";

type CardFeedback = {
  index: number;
  testimonial: string;
  name: string;
  image: string;
};

const variants = {
  initial: (x: number) => {
    return {
      x: x,
    };
  },
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
    },
  },
};

const FeedbackCard = ({
  index,
  testimonial,
  name,
  image,
}: CardFeedback) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-slate-300 p-10 rounded-3xl xs:w-[300px] w-full"
  >
    <p className="text-black font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-black tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-black font-medium text-[16px]">
            <span className="blue-text-gradient">@</span>
            {name}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Comments = () => {
  return (
    <motion.section
      id="comments"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <section className="max-container padding-container flex flex-col gap-20 py-24 pb-2 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <div className="mt-12 bg-slate-900 rounded-[20px]">
            <div
              className={`${styles.padding} bg-gray-400 rounded-2xl min-h-[300px]`}
            >
              <motion.div variants={variants}>
                <p className={styles.sectionSubText}>
                  <span className="text-[#ffffff]"> Lo que dicen sobre </span>{" "}
                  <span className="text-[#13213d]">Uniformes Bertha</span>
                </p>
                <h2 className={styles.sectionHeadText}>Comentarios.</h2>
              </motion.div>
            </div>
            <div
              className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}
            >
              {testimonials.map((testimonial, index) => (
                <FeedbackCard
                  key={testimonial.name}
                  index={index}
                  {...testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Comments;
