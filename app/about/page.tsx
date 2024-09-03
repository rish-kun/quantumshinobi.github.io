import { ContainerScroll } from "@/components/ui/ContainerScroll";
import { hash } from "crypto";
import Image from "next/image";
import React from "react";

const AboutPage = async () => {
  //   const img = await fetch(
  //     "https://firebasestorage.googleapis.com/v0/b/discord-uploads.appspot.com/o/SCR-20240903-ohax.png?alt=media&token=148641c9-e910-4ee2-a605-4f1ba40c8d60"
  //   );
  return (
    <div>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Projects I&apos;ve worked on <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Welcome to my Github
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/static/img1.png`}
          alt="Pic of github"
          width={1400}
          height={720}
          draggable={false}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
        ></Image>
      </ContainerScroll>
    </div>
  );
};

export default AboutPage;
