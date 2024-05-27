//@ts-nocheck
"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function SponsoredBy() {
  console.log("aaa");
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          ЗА ПІДТРИМКИ
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="w-60">
            <Image
              width={1600}
              height={1600}
              src={"/logos/logo1.jpg"}
              alt="logo"
              className="w-full"
            />
          </div>
          <div className="w-60">
            <Image
              width={1600}
              height={1600}
              src={"/logos/logo.png"}
              alt="logo"
              className="w-full bg-black p-4 rounded-lg"
            />
          </div>
          <div className="w-40 ml-6">
            <Image
              width={1600}
              height={1600}
              src={"/logos/logo2.png"}
              alt="logo"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
