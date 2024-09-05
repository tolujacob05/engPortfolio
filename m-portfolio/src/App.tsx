import React from "react";
import "./App.css";
import Atlantic from "./components/Atlantic/Atlantic";
import Banana from "./components/Banana/Banana";

import WidthLayout from "./components/WidthLayout";
import Opebi from "./components/Opebi/Opebi";
import Punuka from "components/Punuka/Punuka";

function App() {
  return (
    <WidthLayout>
      <div className="flex flex-col justify-center min-h-screen gap-2 py-16 space-y-8">
        <div>
          <div className="">
            <a
              href="https://www.linkedin.com/in/mayowa-akinjare-2baab1244/"
              className="flex items-center justify-end gap-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <rect width="256" height="256" fill="#fff" rx="60" />
                  <rect width="256" height="256" fill="#0a66c2" rx="60" />
                  <path
                    fill="#fff"
                    d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                  />
                </g>
              </svg>
              Linkedln
            </a>
          </div>
          <div className="text-white text-pb md:text-2xl">
            Hi, I am{" "}
            <h4 className="text-3xl text-white md:text-6xl">
              Engr Akinjare Mayowa,
            </h4>
          </div>

          <p className="text-white text-pb md:text-2xl">
            a{" "}
            <span className="text-[#0ECF7A] text-pb md:text-2xl">
              prominent and consistent
            </span>{" "}
            engineer with eye-for-detail and willingness for continous learning.{" "}
          </p>

          <div className="pt-4" style={{ aspectRatio: "16 / 9" }}>
            <img
              src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1724833853/EngMayowa/1_vocku6.jpg"
              alt="Juno"
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-10">
          <div className="space-y-4">
            <h1 className="text-3xl text-white md:text-6xl drop-shadow-2xl">
              Portfolio of work
            </h1>
            <p className="text-base text-white md:text-2xl">
              Some of the works I have involved, participated, supervised and
              learnt from
            </p>
          </div>

          <div>
            <Atlantic />
            <Banana />
            <Opebi />
            <Punuka />
          </div>
        </div>
      </div>
    </WidthLayout>
  );
}

export default App;
