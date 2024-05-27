//@ts-nocheck
"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "150+",
    title: "Учасників",
  },
  {
    count: "7",
    title: "Потужних промовців",
  },
  {
    count: "8",
    title: "Гуртів прославлення",
  },
  {
    count: "5",
    title: "Повних днів",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography variant="h6" color="orange" className="mb-6 font-medium">
          Трішки статистики
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
        >
          Приємні бонуси фестивалю
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
        >
          5 екстра насичених днів принесуть тобі духовне збагачення, дозволять
          глибше усвідомити сенс свого життя та покликання, а також спрямують до
          практичної реалізації власної віри в повсякденному житті
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
