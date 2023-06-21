import Catalog from "../components/Catalog";

const page = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="text-5xl font-bold text-[#000561] mt-12 mb-3">
          Now In Theatres
        </h2>
      </div>
      <Catalog res={res} />
    </div>
  );
};

export default page;
