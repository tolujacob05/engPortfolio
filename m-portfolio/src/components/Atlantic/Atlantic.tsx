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

const Atlantic = () => {
  const atlanticImg = [
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815233/EngMayowa/Atlantic/1_e9evwf.jpg",
      project: "Atlantic Hall",
      description: "Atlantic Hall school building admin",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815244/EngMayowa/Atlantic/2_odyx6v.jpg",
      project: "Atlantic Hall",
      description: "Atlantic Hall school building admin",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815252/EngMayowa/Atlantic/3_k8grs1.jpg",
      project: "Atlantic Hall",
      description: "Atlantic Hall school building admin",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815260/EngMayowa/Atlantic/4_pxbv85.jpg",
      project: "Atlantic Hall",
      description: "Atlantic Hall school building admin",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815269/EngMayowa/Atlantic/5_v664y1.jpg",
      project: "Atlantic Hall",
      description: "Atlantic Hall school building admin",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815278/EngMayowa/Atlantic/6_xxx4bj.jpg",
      project: "Atlantic Hall",
      description: "Atlantic Hall school building admin",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815286/EngMayowa/Atlantic/7_bc9xej.jpg",
      project: "Atlantic Hall",
      description: "Atlantic Hall school building admin",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815294/EngMayowa/Atlantic/8_uc1d9f.jpg",
      project: "Atlantic Hall",
      description: "Atlantic Hall school building admin",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815302/EngMayowa/Atlantic/9_dj1d9c.jpg",
      project: "Atlantic Hall",
      description: "Atlantic Hall school building admin",
    },
  ];

  return (
    // <WidthLayout>
    <div className="flex justify-between w-full pt-4">
      <p className="text-white text-pb md:text-2xl">
        Atlantic school ammin project
      </p>

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
                Atlantic school project
              </h4>
              {atlanticImg.map((img, i) => (
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

export default Atlantic;
