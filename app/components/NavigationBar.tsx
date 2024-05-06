'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ModeToggle } from "./ToggleTheme";

export default function NavigationBar() {

    return (
        <motion.nav 
            style={{ 
                // Slightly transparent for dark mode, opaque for light
                backdropFilter: 'blur(10px)', // Consistent blur effect
                position: 'sticky',
                top: 0,
                zIndex: 10,
                width: '100%',
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            className="flex justify-between items-center px-[100px] mx-auto py-[24px] mb-[24px]"
        >
            <p className="text-[20px] font-bold tracking-tight">Godwin Laureto</p>
            <div className="flex gap-[24px] items-center">
                <Link href="/blog">Blog</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/newsletter">Newsletter</Link>

                <ModeToggle/>
            </div>
        </motion.nav>
    );
}
