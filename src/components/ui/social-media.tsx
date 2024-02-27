"use client";

import { Badge } from "@/components/ui/badge";
import { Github, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "./separator";

const SocialMediaIcons = () => {
  const [isHoveredGit, setIsHoveredGit] = useState(false);
  const [isHoveredLink, setIsHoveredLink] = useState(false);
  const [isHoveredInsta, setIsHoveredInsta] = useState(false);

  return (
    <div className="fixed bottom-7 left-6 z-50 h-[300px] w-fit space-y-4">
      <div className="hidden flex-col space-y-8 sm:flex">
        <Badge
          className="relative w-fit cursor-pointer overflow-visible bg-transparent hover:bg-transparent"
          onMouseEnter={() => setIsHoveredGit(true)}
          onMouseLeave={() => setIsHoveredGit(false)}
        >
          <Github className="h-6 w-6 text-text_primary hover:-translate-y-1 hover:text-[#5FF1D0]" />
          {isHoveredGit && (
            <motion.div
              className="absolute left-12 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-base font-semibold text-white">Github</span>
            </motion.div>
          )}
        </Badge>

        <Badge
          className="relative w-fit cursor-pointer overflow-visible bg-transparent hover:bg-transparent"
          onMouseEnter={() => setIsHoveredLink(true)}
          onMouseLeave={() => setIsHoveredLink(false)}
        >
          <Linkedin className="h-6 w-6 text-text_primary hover:-translate-y-1 hover:text-[#5FF1D0]" />
          {isHoveredLink && (
            <motion.div
              className="absolute left-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-base font-semibold text-white">
                Linkdin
              </span>
            </motion.div>
          )}
        </Badge>

        <Badge
          className="relative w-fit cursor-pointer overflow-visible bg-transparent hover:bg-transparent"
          onMouseEnter={() => setIsHoveredInsta(true)}
          onMouseLeave={() => setIsHoveredInsta(false)}
        >
          <Instagram className="h-6 w-6 text-text_primary hover:-translate-y-1 hover:text-[#5FF1D0]" />
          {isHoveredInsta && (
            <motion.div
              className="absolute left-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-base font-semibold text-white">
                Instagram
              </span>
            </motion.div>
          )}
        </Badge>
      </div>

      <Separator
        orientation="vertical"
        className="absolute left-6 mt-6 hidden h-[50%] bg-text_secondary sm:block md:block lg:block"
      />
    </div>
  );
};

export default SocialMediaIcons;
