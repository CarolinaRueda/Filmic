"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Result } from "../types";

const Banner: FC<{ result: Result }> = ({ result }) => {
  const { title, id, poster_path, release_date, name, first_air_date } = result;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const pathname = usePathname();
  const search = pathname.includes("series") ? "series" : "movies";

  return (
    <div className="m-4">
      <Link href={`/${search}/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={200}
          height={250}
          alt={title || name}
          className="rounded-2xl cursor-pointer"
        />
      </Link>
      <h3 className="font-semibold text-[#000561] text-md">{title || name}</h3>
      <h2 className="text-[#000561] font-normal text-sm">
        {release_date ? release_date.toString() : first_air_date.toString()}
      </h2>
    </div>
  );
};

export default Banner;
