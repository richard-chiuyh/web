"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
interface BlogCard {
  id: number;
  coverImage: string;
  authorAvatarUrl: string;
  authorName: string;
  description: string;
  likes: number;
}

interface HttpResponse {
  code: number;
  data: Data;
}

interface Data {
  blogCards: BlogCard[];
  cursor: number;
}

export default function Home() {
  const [blogCards, setBlogCards] = useState<BlogCard[]>([]);
  const [cursor, setCursor] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const fetchData = async (cursorNum: number) => {
    const data = await fetch(
      `http://127.0.0.1:4523/m1/5299266-4968637-default/posts?cursor=${cursorNum}`,
      { cache: "no-store" }
    );
    const res: HttpResponse = await data.json();
    console.log(res);
    if (res.code === 0) {
      if (res.data.blogCards.length === 0) {
        setHasMore(false);
      } else {
        setBlogCards((prev) => [...prev, ...res.data.blogCards]);
        setCursor(res.data.cursor);
      }
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 300 &&
      hasMore
    ) {
      fetchData(cursor);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchData(cursor);
  }, []);

  return (
    <div className="flex flex-wrap justify-center max-w-[1200px] mx-auto">
      {blogCards.map((blogCard: BlogCard) => (
        <div
          key={blogCard.id}
          className="w-[400px] h-[400px] p-2 flex-grow-0 hover:scale-105 transition-all"
        >
          <Link href="/" className="flex w-full h-full flex-col shadow-lg">
            <div className="w-full basis-2/3 relative">
              <Image
                src={blogCard.coverImage}
                alt={blogCard.description}
                fill
                unoptimized={true}
                className="object-cover"
              />
            </div>
            <div className="p-4">{blogCard.description}</div>
            <div className="flex-grow"></div>
            <div className="flex p-4 items-center">
              <object>
                <Link
                  href="/"
                  className="flex items-center text-[#6b6b6b] hover:text-black"
                >
                  <Image
                    src={blogCard.authorAvatarUrl}
                    alt="avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="ml-2">{blogCard.authorName}</div>
                </Link>
              </object>
              <div className="flex-grow" />
              <div>{blogCard.likes}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
