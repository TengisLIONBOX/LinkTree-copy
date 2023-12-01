import Image from "next/image";
import Head from "next/head";
import { GithubIcon, YtIcon, InIcon, InstaIcon } from "../components";

import React, { useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  console.log(checked);

  return (
    <div>
      <Head>
        <title>LinkMod</title>
        <meta
          name="description"
          content="LinkMod is a copy of the link tree made by Pinecone student Tengis."
          key="desc"
        />
      </Head>
      <div
        className={
          checked
            ? "bg-gradient-to-bl from-violet-600 via-slate-200 to-indigo-700"
            : "bg-gradient-to-bl from-violet-700 via-black to-indigo-800"
        }
      >
        <div className="h-screen w-screen flex justify-center items-center">
          <div className="flex justify-center items-center flex-col ">
            <div
              className={
                checked
                  ? "relative w-[120px] h-[120px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 border-black border-2"
                  : "relative w-[120px] h-[120px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 border-gray-400 border-2"
              }
            >
              <Image
                width={500}
                height={500}
                alt="a"
                className="absolute w-[120px] h-[120px] "
                src="data:image/jpeg;base64,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"
              />
            </div>

            <p
              className={
                checked ? "text-black pt-1 text-lg" : "text-white pt-1 text-lg"
              }
            >
              @bataa
            </p>
            {/* <input
            className=" mt-[2rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            // id="flexSwitchCheckDefault01"
            onChange={(e) => console.log(e.target.value)}
          /> */}

            <label className="relative inline-flex items-center cursor-pointer ">
              <input
                type="checkbox"
                value=""
                className="sr-only peer "
                onChange={handleChange}
              />

              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <div className="pt-[40px] flex flex-col gap-[13px]">
              <button
                className={
                  checked
                    ? "backdrop-blur-sm bg-black/20 backdrop-opacity-60 hover:bg-black/30 text-black font-semibold py-2 px-4 border border-gray-600 w-screen sm:w-[30rem] h-[3rem] rounded-md"
                    : "backdrop-blur-sm bg-white/20 backdrop-opacity-60 hover:bg-white/30 text-white font-semibold py-2 px-4 border border-gray-400 w-screen sm:w-[30rem] h-[3rem] rounded-md"
                }
              >
                Button
              </button>
              <button
                className={
                  checked
                    ? "backdrop-blur-sm bg-black/20 backdrop-opacity-60 hover:bg-black/30 text-black font-semibold py-2 px-4 border border-gray-600 w-screen sm:w-[30rem] h-[3rem] rounded-md"
                    : "backdrop-blur-sm bg-white/20 backdrop-opacity-60 hover:bg-white/30 text-white font-semibold py-2 px-4 border border-gray-400 w-screen sm:w-[30rem] h-[3rem] rounded-md"
                }
              >
                Button
              </button>
            </div>
            <div
              className={
                checked ? "flex gap-2 mt-[45px] invert" : "flex gap-2 mt-[45px]"
              }
            >
              <a
                href="https://github.com/TengisLIONBOX"
                target="_blank"
                aria-label="Github"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.instagram.com/tengis_lionbox/"
                target="_blank"
                aria-label="Instagram"
              >
                <InstaIcon />
              </a>
              <a
                href="https://youtube.com/LIONBOX"
                target="_blank"
                aria-label="Youtube"
              >
                <YtIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/lion-box-a520162a1/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <InIcon />
              </a>
            </div>
            <p
              className={
                checked ? "text-black mt-[50px]" : "text-white mt-[50px]"
              }
            >
              © All rights reserved 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
