"use client";

import { useState } from "react";
import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";

import {
  EVENT_CONTENT1,
  EVENT_CONTENT2,
  EVENT_CONTENT3,
  EVENT_CONTENT4,
  EVENT_CONTENT5,
} from "@/content";

export function EventContent() {
  const [value, setValue] = useState("Day1");
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96 bg-gray-400">
            <Tab
              value="Day1"
              className="font-medium"
              onClick={() => setValue("Day1")}
            >
              День 1
            </Tab>
            <Tab
              value="Day2"
              className="font-medium"
              onClick={() => setValue("Day2")}
            >
              День 2
            </Tab>
            <Tab
              value="Day3"
              className="font-medium"
              onClick={() => setValue("Day3")}
            >
              День 3
            </Tab>
            <Tab
              value="Day4"
              className="font-medium"
              onClick={() => setValue("Day4")}
            >
              День 4
            </Tab>
            <Tab
              value="Day5"
              className="font-medium"
              onClick={() => setValue("Day5")}
            >
              День 5
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <div className="mx-auto container">
        {value === "Day1" &&
          EVENT_CONTENT1.map((props, idx) => (
            <EventContentCard key={idx} {...props} />
          ))}
        {value === "Day2" &&
          EVENT_CONTENT2.map((props, idx) => (
            <EventContentCard key={idx} {...props} />
          ))}
        {value === "Day3" &&
          EVENT_CONTENT3.map((props, idx) => (
            <EventContentCard key={idx} {...props} />
          ))}
        {value === "Day4" &&
          EVENT_CONTENT4.map((props, idx) => (
            <EventContentCard key={idx} {...props} />
          ))}
        {value === "Day5" &&
          EVENT_CONTENT5.map((props, idx) => (
            <EventContentCard key={idx} {...props} />
          ))}
      </div>
    </section>
  );
}

export default EventContent;
