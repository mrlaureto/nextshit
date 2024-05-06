import { Post } from "@/app/lib/interface";
import {client, urlFor} from "@/app/lib/sanity"
import { PortableText } from "next-sanity";
import { Image } from "next-sanity/image";

export const revalidate = 30;

async function getData(slug: string) {
    const query =  `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage,
        "categories": categories[]->{
            title
          }
      }[0]`

      const data = await client.fetch(query);
      return data;
}



export default async function BlogArticle({params} : {params: {slug: string}}) {
    const data : Post = await getData(params.slug);
    
    return(
        <div className="mt-8">
            <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-[44px] font-bold tracking-tighter">{data.title}</h1>
            <Image className="rounded-xl mt-8 border" priority src={urlFor(data.titleImage).url()} alt="blog-main-image" width={800} height={400}/>
            <div className="prose prose-blue prose-xl dark:prose-invert prose-code:bg-black">
                <PortableText value={data.content}/>
            </div>
            </div>
        </div>
    )
} 
