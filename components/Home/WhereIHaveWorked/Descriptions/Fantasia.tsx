import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Fantasia() {
  const tasks = [
    {
      text: "Blockchain certicate issuing system",
      keywords: ["Windows Server 2008"],
    },
    {
      text: "React, Mui, Redux, TailwindCSS.",
      keywords: ["Migration"],
    },
    {
      text: "Vue.js , Vuex, Bootstrap.",
      keywords: ["Veeam Endpoint Backup", "SQL Server 2012"],
    },
    {
      text: "Strong working knowledge of development techniques and methodologies.",
      keywords: ["Veeam Endpoint Backup", "SQL Server 2012"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Senior Frontend Developer
          <span className="text-AAsecondary">@ BlockX / Tokenizer</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">Jun 2016 - May 2018</span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {tasks.map((item, index) => {
          return (
            <div key={index} className="flex flex-row space-x-2">
              <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
              <span
                className="text-gray-500 sm:text-sm text-xs"
                dangerouslySetInnerHTML={{
                  __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                }}
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
