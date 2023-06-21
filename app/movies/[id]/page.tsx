import Image from "next/image";
import { FC } from "react";
import { Genre, Res, Result } from "../../types";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res: Res = await data.json();
  return res.results.map((movie) => ({
    movie: movie.id.toString(),
  }));
}

function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
}

const MovieDetail: FC<{ params: Result }> = async ({ params }) => {
  const { id } = params;

  const imagePath = "https://image.tmdb.org/t/p/original/";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const res: Result = await data.json();

  return (
    <div className="flex flex-col">
      <div
        style={{ backgroundImage: `url(${imagePath + res.backdrop_path})` }}
        className="flex bg-cover p-10 flex-row items-center"
        id="contInfo"
      >
        <Image
          src={imagePath + res.poster_path}
          width={335}
          height={503}
          alt="poster movie"
          className="rounded-2xl relative z-10"
        />
        <div className="text-white mx-4 ml-8 relative z-10">
          <h2 className="text-2xl font-bold">{res.title}</h2>
          <h2 className="text-lg">{res.release_date}</h2>
          <div className="flex">
            {res.genres.map((g: Genre) => (
              <h2 className="mr-1 underline decoration-2"> {g.name} </h2>
            ))}
          </div>
          <h2>
            Runtime: <strong>{toHoursAndMinutes(res.runtime || 0)}</strong>
          </h2>
          <h2 className="py-9 italic">{res.tagline}</h2>
          <h2 className="font-bold text-lg py-3">Overview</h2>
          <p>{res.overview}</p>
        </div>
      </div>
      <div className="flex justify-around bg-[#D2D4FF] py-10">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[#000561]">Status</h2>
          <p className="text-[#4D55FF]">{res.status}</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[#000561]">Original Language</h2>
          <p className="text-[#4D55FF]">
            {res.original_language?.toUpperCase()}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[#000561]">Budget</h2>
          <p className="text-[#4D55FF]">
            {res.budget === 0
              ? "Not Available"
              : `$${Number(res.budget).toLocaleString("en-US")}`}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[#000561]">Revenue</h2>
          <p className="text-[#4D55FF]">
            {res.revenue === 0
              ? "Not Available"
              : `$${Number(res.revenue).toLocaleString("en-US")}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
