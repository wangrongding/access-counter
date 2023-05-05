import Image from "next/image";
import { Inter } from "next/font/google";
import { getCount, getMultipleImgList } from "./api/counter";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  countImg: string;
  imgList: string[];
}

export default function Home({ countImg, imgList }: Props) {
  const [text, setText] = useState("");
  const baseUrl = "https://access-counter.vercel.app/api/counter?name=github-username";

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-16 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          GitHub profile 访问量统计
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/wangrongding/access-counter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="Github Logo"
              className="dark:invert"
              width={20}
              height={20}
              priority
            />
            <h2 className={""}>source code</h2>
          </a>

          {/* <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`text-xl font-semibold`}>Deploy-&gt;</h2>
          </a> */}
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className=""
          src={countImg}
          alt="count img"
          width={300}
          height={50}
          priority
        />
      </div>

      {/* 点击展开查看详情 */}
      <details className="border-1 p-4 m-4">
        <summary className="cursor-pointer select-none">
          点击查看其他主题
        </summary>
        <div className="grid gap-4 grid-cols-2">
          {imgList.map((item: any, index: number) => {
            return (
              <Image
                className=""
                key={index}
                src={item}
                alt="count img"
                width={400}
                height={50}
                priority
              />
            );
          })}
        </div>
      </details>

      <div className="lg:text-left flex gap-4 flex-col">
        <h2 className=" font-bold text-xl">How to use:</h2>
        <p>
          <span className="font-bold mr-4 w-[150px] inline-block">
            SVG address:
          </span>
          <span className=" bg-slate-300 rounded p-2 w-[700px] inline-block ">
            {` ${baseUrl}?name=github-username`}
          </span>
        </p>
        <p>
          <span className="font-bold mr-4 w-[150px] inline-block">
            Img tag:
          </span>
          <span className=" bg-slate-300 rounded p-2 w-[700px] inline-block ">
            {` <img src="${baseUrl}" />`}
          </span>
        </p>
        <p>
          <span className="font-bold mr-4 w-[150px] inline-block">
            Markdown:
          </span>
          <span className=" bg-slate-300 rounded p-2 w-[700px] inline-block ">
            {`![](${baseUrl})`}
          </span>
        </p>
        <p className="bg-amber-200 rounded px-2">
          Data can access by anyone, please DO NOT enter personal information
        </p>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const countImg = await getCount({ name: "wangrongding" });
  const encodedString = btoa(countImg);
  const dataURI = `data:image/svg+xml;base64,${encodedString}`;

  const imgList = getMultipleImgList();
  // const encoder = new TextEncoder();
  // const data = encoder.encode(countImg);
  // const base64 = btoa(String.fromCharCode(...new Uint8Array(data)));
  // const dataURI = `data:image/svg+xml;base64,${base64}`;

  return {
    props: {
      countImg: dataURI,
      imgList: imgList,
    },
    revalidate: 10,
  };
};
