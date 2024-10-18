import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono">
        <div className="w-full h-14 flex px-6 font-normal border-b border-b-[#f2f2f2] items-center sticky top-0 bg-white z-50">
          <Link href="/" className="font-semibold text-xl">
            Logo
          </Link>
          <div className="ml-4 w-60 rounded-[20px] bg-[#f9f9f9] flex items-center">
            <div className="mx-3 text-[#6b6b6b]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              className="text-[#242424] placeholder:text-[#6b6b6b] py-[10px] pr-[20px] bg-transparent outline-none border-none text-sm"
              placeholder="Search"
              type="text"
            />
          </div>
          <div className="flex-grow" />
          <Link
            href="/"
            className="mr-8 flex items-center text-[#6b6b6b] text-sm hover:text-[#191919]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Write"
            >
              <path
                fill="currentColor"
                d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
              ></path>
              <path
                stroke="currentColor"
                d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
              ></path>
            </svg>
            <div className="ml-2">Write</div>
            <div></div>
          </Link>
          <Link href="/">
            <div className="rounded-full w-8 h-8 relative">
              <Image src="/avatar.png" alt="avatar" fill />
              <div className="rounded-full w-8 h-8 absolute hover:bg-black hover:opacity-10 top-0" />
            </div>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
