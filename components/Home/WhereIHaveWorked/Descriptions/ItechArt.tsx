import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function ItechArt() {
  const tasks = [
    {
      text: "I have been working on the P2E game ecosystem and it's protocol and leading the dev team in technical matter.",
      keywords: ["About Company"],
    },
    {
      text: "P2E NFT game system on binance",
      keywords: ["VivaTech2022 event"],
    },
    {
      text: "Internal marketplace of various NFTs",
      keywords: ["blockchain & Smart Contracts"],
    },
    {
      text: "Presale smart contract and IDO etc",
      keywords: ["blockchain & Smart Contracts"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Lead Blockchain Developer
            <span className="text-AAsecondary">@ Crypto Game Agency</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 2022 - Dec 2022
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
