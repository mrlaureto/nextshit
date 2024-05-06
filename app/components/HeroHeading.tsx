'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroHeading() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link href={""}>
            <div style={{ position: 'relative' }} className="border-y">
                {/* Static Stroke Text */}
                <motion.h1
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute text-[88px] md:text-[160px] xl:text-[16.5rem] tracking-tighter font-bold block dark:hidden"
                    style={{ 
                        color: 'transparent', 
                        WebkitTextStroke: `2px black`, // Dynamic stroke color based on theme
                        textShadow: 'none'
                    }}
                >
                    THE BLOG
                </motion.h1>
                <motion.h1
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute text-[88px] md:text-[160px] xl:text-[16.5rem] tracking-tighter font-bold hidden dark:block"
                    style={{ 
                        color: 'transparent', 
                        WebkitTextStroke: `2px white`, // Dynamic stroke color based on theme
                        textShadow: 'none'
                    }}
                >
                    THE BLOG
                </motion.h1>
                {/* Animated Fill Text on Hover */}
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    whileHover={{ x: 20, y: -20 }} // Move position slightly on hover to mimic shadow
                    className="text-[88px] md:text-[160px] xl:text-[16.5rem] tracking-tighter font-bold"
                    style={{
                        position: 'relative'  // This ensures it's on top of the absolute positioned stroke text
                    }}
                >
                    THE BLOG
                </motion.h1>
            </div>
            </Link>
        </div>
    );
}
