import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary text-white">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href={"/"}
            className="cursor-pointer hover:!text-primary"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src={"/logo.svg"}
                alt={"HouseFul Logo"}
                width={24}
                height={24}
                className="w-6 h-6"
              ></Image>
              <div className="text-xl font-bold hover:!text-primary-300">
                HOUSE <span className="text-secondary font-light">FUL</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
