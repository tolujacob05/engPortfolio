import WidthLayout from "../WidthLayout";
import React from "react";
import vid1 from "../../vid/vid1.mp4";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";

const Banana = () => {
  const bananaImg = [
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815387/EngMayowa/Banana/5_vobt0u.jpg",
      project: "Banana Island, Lagos state",
      description: "Peer Review Banana Island Lagos",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815371/EngMayowa/Banana/3_rtr1dd.jpg",
      project: "Banana Island, Lagos state",
      description: "Peer Review Banana Island Lagos",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815364/EngMayowa/Banana/2_g5sg9v.jpg",
      project: "Banana Island, Lagos state",
      description: "Peer Review Banana Island Lagos",
    },
    {
      source:
        "https://res.cloudinary.com/dno5bo4bx/image/upload/v1724815357/EngMayowa/Banana/1_a14vxn.jpg",
      project: "Banana Island, Lagos state",
      description: "Peer Review Banana Island",
    },
  ];

  return (
    // <WidthLayout>
    <div className="flex justify-between w-full pt-2">
      <p className="text-white text-pb md:text-2xl">Banana Island Project</p>

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
                Banana Island Project
              </h4>
              {bananaImg.map((img, i) => (
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

              <video
                src={vid1}
                controls
                autoPlay={false} // Auto-plays the video when the page loads (optional)
                loop={false} // Repeats the video when it ends (optional)
                muted={false}
                className="w-full"
              />
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

export default Banana;
