import Image from "next/image";
import { FC } from "react";
import { Genre, Res, Result } from "../../types";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`
  );
  const res: Res = await data.json();
  return res.results.map((movie) => ({
    movie: movie.id.toString(),
  }));
}

const SerieDetail: FC<{ params: Result }> = async ({ params }) => {
  const { id } = params;

  const imagePath = "https://image.tmdb.org/t/p/original/";
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`
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
          <h2 className="text-2xl font-bold">{res.name}</h2>
          <div className="flex">
            {res.genres.map((g: Genre) => (
              <h2 className="mr-1 underline decoration-2"> {g.name} </h2>
            ))}
          </div>
          <h2>
            Total Seasons: <strong>{res.number_of_seasons}</strong>
          </h2>
          <h2>
            Total Episodes: <strong>{res.number_of_episodes}</strong>
          </h2>
          <h2 className="font-bold text-lg py-3">Overview</h2>
          <p>{res.overview}</p>
          {res.created_by?.length && (
            <h2 className="font-bold text-lg py-3">Created by</h2>
          )}
          <div className="flex">
            {res.created_by?.length &&
              res.created_by.map((a) => <p className="mr-1">{a.name}</p>)}
          </div>
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
          <h2 className="font-bold text-[#000561]">First Air Date</h2>
          <p className="text-[#4D55FF]">{res.first_air_date}</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[#000561]">Last Air Date</h2>
          <p className="text-[#4D55FF]">{res.last_air_date}</p>
        </div>
      </div>
    </div>
  );
};

export default SerieDetail;
