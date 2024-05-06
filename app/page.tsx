import {client} from "./lib/sanity"
import { PostPeek } from "./lib/interface";

import BlogCard from "./components/BlogCard";

import HeroHeading from "./components/HeroHeading";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
      "categories": categories[]->{
        title
      }
  }
  `;

  const data = await client.fetch(query)

  return data; 
}


export default async function Home() {
  const data : PostPeek[] = await getData();

  console.log(data)


  return (
    <div className="flex justify-center px-[100px]">
      <div className="flex flex-col w-full max-w-[1440px]">
        <HeroHeading/>
        <div className="mt-[44px]">
          <h2 className="text-[24px] font-bold tracking-tight">Read recent articles</h2>
        </div>
        <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-2 mt-[24px] items-stretch pb-[10rem]">
          {data.map((post, idx) => (
            <BlogCard key={post.currentSlug} post={post} idx={idx} />
          
          ))}
        </div>
      </div>
    </div>
  );
}
