"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Top({ children }) {
  return (
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="xl:text-6xl text-4xl font-semibold xl:w-1/2 w-full capitalize"
    >
      {children}
    </motion.div>
  );
}
