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
    <div className="flex justify-between w-full pt-2">
      <p className="text-white text-pb md:text-2xl">Opebi Project</p>

      <Dialog>
        <DialogTrigger asChild>
          <div className="flex">
            <p className="text-base text-white md:text-4xl hover:bg-primary-hueOne">
              open
            </p>
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
