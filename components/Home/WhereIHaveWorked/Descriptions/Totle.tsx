import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Totle() {
  const tasks = [
    {
      text: "Mainly worked in P2E mini games frontend in React + Typescript.",
      keywords: ["About Company"],
    },
    {
      text: "Implemented Web3 frontend interacting with Blockchain smart contract.",
      keywords: ["Next.js/React", "AWS", "Vercel"],
    },
    {
      text: "Built Admin tool UI and integrating with Backend Api.",
      keywords: [],
    },
    {
      text: "Built some of Backend api in Serverless approach in AWS.",
      keywords: [],
    },
    {
      text: "Worked on Google Analytics.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Frontend Developer
            <span className="text-AAsecondary"> @ Block Tackle</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Dec 2022 - May 2023
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
