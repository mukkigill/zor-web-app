import React, { useState } from "react";
import { RegularBodyText, SmallBodyText } from "./TextPresets";

export type TimelineEvent = {
  title: string;
  date: string;
  description: string;
}

interface TimelineProps {
  items: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [persisted, setPersisted] = useState<number | null>(null);

  const tooltip = (event: TimelineEvent, index: number) => (
    <div className={`hidden md:flex text-center text-orange absolute ${index % 2 === 0 ? "left-full ml-16" : "right-full mr-16"} lg:bottom-full lg:ml-0 lg:mr-0 lg:right-0 lg:left-0 lg:mb-2 p-2 bg-black border-orange rounded border`}>
      <SmallBodyText text={event.date + ": " + event.title} />
    </div>
  );

  return (
    <div className="relative w-full h-full text-black flex left-1/4 lg:left-0 lg:overflow-x-auto lg:custom-scrollbar lg:overflow-y-hidden lg:h-full space-x-8 py-8 lg:py-32">
      {/* Timeline line */}
      <div className="lg:pt-16">
        <div className="hidden lg:flex"
          style={{ width: "auto" }}>
          <div className="absolute translate-y-36 left-0 w-full h-1 bg-off-white" />
        </div>
        <div className="flex lg:hidden">
          <div className="absolute top-0 translate-x-24 lg:left-1/3 w-1 h-full bg-off-white" />
        </div>
        {/* Timeline events */}
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8"
          style={{ width: "100%" }}>
          {items.map((event, index) => (
            <div
              key={index}
              className={`relative flex flex-col h-full items-center w-48 md:w-64 lg:w-48 odd:translate-x-8 even:-translate-x-8 lg:odd:translate-y-16 lg:even:-translate-y-16 lg:even:translate-x-0 lg:odd:translate-x-0`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => {
                if (persisted === index) {
                  setPersisted(null); // remove persistence if clicking again
                } else {
                  setPersisted(index); // persist tooltip if clicking first time
                }
              }}
            >
              <div
                className={`p-4 bg-white rounded-lg shadow-lg border ${index % 2 === 0 ? "mb-6" : "mt-6"}` +
                  `hover:shadow-xl hover:bg-gray-100 hover:cursor-pointer transition-all duration-300`}
              >
                <div className={`z-10 m-2 md:m-4 flex items-center justify-center w-6 h-6 rounded-full ring-purple ring-4 sm:ring-8 shrink-0`}>
                  <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                {(hovered === index || persisted === index) && tooltip(event, index)}
                <RegularBodyText text={event.title} bold />
                <RegularBodyText text={event.description} />
                <div className="text-gray-600">
                  <SmallBodyText text={event.date} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
