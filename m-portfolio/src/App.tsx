import React from "react";
import "./App.css";
import Atlantic from "./components/Atlantic/Atlantic";
import Banana from "./components/Banana/Banana";

import WidthLayout from "./components/WidthLayout";
import Opebi from "./components/Opebi/Opebi";

function App() {
  return (
    <WidthLayout>
      <div className="flex flex-col justify-center min-h-screen gap-2 pt-20 space-y-8">
        <div>
          <div className="text-white text-pb md:text-2xl">
            Hi, I am{" "}
            <h5 className="text-3xl text-white md:text-6xl ">
              Engr Akinjare Mayowa,
            </h5>
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
          </div>
        </div>
      </div>
    </WidthLayout>
  );
}

export default App;
