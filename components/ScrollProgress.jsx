"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-primary origin-left z-50"
      style={{ scaleX }}
    />
  );
}
