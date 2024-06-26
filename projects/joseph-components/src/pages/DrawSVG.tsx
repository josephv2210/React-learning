import React from "react";
import Woman from "../assets/png/pexels-olly-3769021 1.png";

function DrawSVG() {
  const elements: number[] = Array.from({ length: 10 }, (_, i) => i);
  return (
    <div>
      {elements.map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={` flex justify-center items-center relative`}
            style={{ width: index * 100 + "px" }}
          >
            <div className="absolute top-0 left-0  w-[calc(48%-1px)] h-[calc(31%-1px)] border-solid border-2 border-sky-500 rounded-[1em]">
              hola
            </div>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 259 171"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inset-0"
            >
              <defs>
                <clipPath id="clip">
                  <path
                    d="M259 10C259 4.47716 254.523 0 249 0H139.5C133.977 0 129.5 4.47715 129.5 10V49C129.5 54.5228 125.023 59 119.5 59H10C4.47715 59 0 63.4772 0 69V161C0 166.523 4.47715 171 10 171H249C254.523 171 259 166.523 259 161V10Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                href={Woman}
                width="100%"
                height="100%"
                clipPath="url(#clip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default DrawSVG;
