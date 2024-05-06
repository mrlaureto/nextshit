'use client'

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { urlFor } from "../lib/sanity";
import { PostPeek } from "../lib/interface";
import { getCategoryColor } from "../utils";

import { motion } from "framer-motion"


interface BlogCardProps {
  post: PostPeek;
  idx: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, idx }) => {
  return (
    <Card key={idx} className={`flex ${idx === 0 ? 'flex-col' : 'flex-row'} ${idx === 0 ? 'lg:row-span-2' : ''} gap-[24px]`}>
      <Image className={`${idx === 0 ? 'w-full h-[250px]' : 'w-[300px] h-[200px]'}`} style={{objectFit: 'cover'}} src={urlFor(post.titleImage).url()} alt="image" width={100} height={500} quality={100} unoptimized={true}/>
      <CardContent className={`flex flex-col gap-[12px] items-start justify-center`}>
        <Link href={`/blog/${post.currentSlug}`}>
        <motion.h3 
          whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(255, 165, 0)" }}
          transition={{ type: "spring", stiffness: 300 }}
        className="text-[24px] tracking-tight line-clamp-2 font-bold ">{post.title}</motion.h3>
        </Link>
        <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-300">{post.smallDescription}</p>

        <div className="flex gap-[12px]">
          {post.categories.map((category, key) => (
            <span key={key} className={`${getCategoryColor(category.title)} rounded-full py-[4px] px-[12px] text-[14px] tracking-[-.01em] font-medium`}>{category.title}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
