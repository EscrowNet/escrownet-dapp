"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { WordsPullUp } from "../animations/typography/words-pull-up";
import { TextFade } from "../animations/typography/text-fade";
import { ShineButton } from "@/animations/shine-button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  const router = useRouter();

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center py-9 md:py-[35px] bg-[#F5F5F5] px-4 bg-hero-bg bg-contain bg-no-repeat bg-center text-center"
    >
      <motion.div
        variants={fadeUp}
        className="max-w-[659px] mb-6"
      >
        <WordsPullUp
          text="Secure Crypto Transactions Made Simple"
          className="text-xl md:text-4xl lg:text-5xl font-inter text-primaryColor font-bold mb-2 lg:mb-6 leading-tight lg:leading-[58px]"
        />
        <TextFade
          direction="up"
          className="text-xs md:text-base font-bold text-[#64537B]"
        >
          Integrate Escrow Directly Into Your dApps with Our StarkNet SDK
        </TextFade>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 sm:gap-x-6 text-sm md:text-base text-white"
      >
        <ShineButton variant="accent" className="text-center w-[180px]">
          Download SDK
        </ShineButton>
        <ShineButton
          variant="default"
          className="text-center w-[180px]"
          onClick={() => router.push("/dashboard")}
        >
          Launch App
        </ShineButton>
      </motion.div>

      <motion.img
        src="/escrow-illus.svg"
        alt=""
        variants={fadeUp}
        className="mt-6 md:mt-[56px] w-[250px] md:w-[470px]"
      />
    </motion.section>
  );
};

export default Hero;
