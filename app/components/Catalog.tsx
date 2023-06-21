"use client";
import { FC } from "react";
import { Res } from "../types";
import { usePathname } from "next/navigation";
import Banner from "./Banner";

const Catalog: FC<{ res: Res }> = ({ res }) => {
  const { results } = res;
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="grid grid-cols-5 bg-[#B9BCFF] px-8 py-2 my-3">
      {results.map((info, idx) => (
        <Banner result={info} key={idx} />
      ))}
    </div>
  );
};

export default Catalog;
