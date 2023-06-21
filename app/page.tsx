import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filmic",
};

export default function Home() {
  return (
    <main className="my-20 flex flex-col items-center justify-center p-5">
      <div className="text-center">
        <h4 className="text-2xl font-medium text-[rgb(0,5,22)]">
          Shall we watch TV or go to the cinema?
        </h4>
        <h1 className="text-8xl font-black text-[#000561]">
          Discover Amazing
          <br />
          Films And Movies
        </h1>
        <h4 className="text-2xl font-medium text-[#000516]">
          We help you find the best option for you. You can see the synopsis,
          <br />
          rating and duration.
        </h4>
        <div className="mt-8">
          <Link
            href="/theatres"
            className="bg-[#000561] px-2 py-1 rounded-lg text-[#B9BCFF] text-2xl font-medium"
          >
            In Theatres
          </Link>
        </div>
      </div>
    </main>
  );
}
