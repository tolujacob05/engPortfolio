import WidthLayout from "../WidthLayout";
import React from "react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";

const Opebi = () => {
  const opebiImg = [
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815493/EngMayowa/Opebi/11_vxlfo2.jpg",
      project: "Opebi Ikeja",
      description: "Opebi Ikeja Project",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815488/EngMayowa/Opebi/10_jnhfhp.jpg",
      project: "Opebi Ikeja",
      description: "Opebi Ikeja Project",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815482/EngMayowa/Opebi/9_guvdan.jpg",
      project: "Opebi Ikeja",
      description: "Opebi Ikeja Project",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815476/EngMayowa/Opebi/8_g6d8eb.jpg",
      project: "Opebi Ikeja",
      description: "Opebi Ikeja Project",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815469/EngMayowa/Opebi/7_mqfgut.jpg",
      project: "Opebi Ikeja",
      description: "Opebi Ikeja Project",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815464/EngMayowa/Opebi/6_t0xmoo.jpg",
      project: "Opebi Ikeja",
      description: "Opebi Ikeja Project",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815458/EngMayowa/Opebi/5_mccjnn.jpg",
      project: "Opebi Ikeja",
      description: "Opebi Ikeja Project",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815452/EngMayowa/Opebi/4_lyblgp.jpg",
      project: "Opebi Ikeja",
      description: "Opebi Ikeja Project",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815446/EngMayowa/Opebi/3_sompny.jpg",
      project: "Opebi Ikeja",
      description: "Opebi Ikeja Project",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815439/EngMayowa/Opebi/2_rle600.jpg",
      project: "Opebi Ikeja",
      description: "Opebi Ikeja Project",
    },
  ];

  return (
    // <WidthLayout>
    <div className="flex items-center justify-between w-full pt-2">
      <div>
        <p className="text-white text-pb md:text-2xl">Opebi Project</p>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          {/* <button className="relative text-white cursor-pointer py-2 px-4 rounded-md perspective-8 text-pb md:text-xl font-medium tracking-wider shadow-[inset_0px_0px_0.5em_0px_var(--glow-color),_0px_0px_0.5em_0px_var(--glow-color)] md:hover:shadow-[inset_0px_0px_0.5em_0px_var(--glow-color),_0px_0px_0.5em_0px_var(--glow-color)] hover:animate-[border-flicker_2s_linear_infinite] hover:text-[#A3B6D9] hover:border-[#18298B]">
            <span className="relative inline-block mr-[-0.2em] text-shadow-[0_0_0.125em_hsla(0,0%,100%,0.3),_0_0_0.45em_var(--[#ecedf3])] hover:animate-[text-flicker_3s_linear_infinite]">
              open
            </span>
          </button> */}
          <div className="flex flex-col items-center w-[100px] md:h-[50px] cont">
            <button className="button">
              <div className="w-8 blob">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 310 350"
                >
                  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
                </svg>
              </div>
              <div className="line"></div>
              <div className="absolute text top-[10px] md:top-[15px]">
                <h5>O</h5>
                <h5>P</h5>
                <h5>E</h5>
                <h5>N</h5>
                <h5>!</h5>
              </div>
            </button>
          </div>
        </DialogTrigger>

        <DialogContent className="bg-[#161822] border-[#161822] pt-20">
          <div className="grid grid-cols-1 gap-8">
            <WidthLayout>
              <h4 className="mb-4 text-white md:text-4xl text-pb">
                Opebi Ikeja Project
              </h4>
              {opebiImg.map((img, i) => (
                <div className="relative mb-4 overflow-hidden shadow-lg group rounded-xl md:mb-8">
                  <div className="relative w-full">
                    <img
                      key={i}
                      src={img.source}
                      alt=""
                      className="w-full h-full rounded-xl transition-transform duration-500 ease-in brightness-100 group-hover:brightness-75 group-hover:-top-[10%]"
                    />
                  </div>
                  <div className="absolute bottom-[-40%] left-0 p-4 text-white transition-all duration-500 ease-in group-hover:bottom-0">
                    <h2 className="font-light">{img.project}</h2>
                    <p className="font-light">{img.description}</p>
                  </div>
                </div>
              ))}
            </WidthLayout>
          </div>

          <DialogClose asChild>
            <div className="hidden md:block">
              <Button
                type="button"
                variant="outline"
                className="bg-[#E6E7E8] text-6xl float-right rounded-xl"
              >
                Close <span className="ml-1 text-black">X</span>
              </Button>
            </div>
          </DialogClose>

          <DialogFooter>
            <div className="flex flex-col items-center w-full gap-3 px-4 py-3 pt-5 md:flex-row md:justify-end">
              <div className="w-full md:hidden">
                <DialogClose asChild>
                  <Button
                    type="submit"
                    className="h-14 text-base text-[#dadce4] md:text-lg w-full"
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    // </WidthLayout>
  );
};

export default Opebi;
