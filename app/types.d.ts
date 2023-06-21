export interface Res {
  page: number;
  results: Result[];
  totalPages: number;
  totalResults: number;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: BelongsToCollection;
  budget?: number;
  created_by?: any[];
  episode_run_time?: number[];
  first_air_date?: Date;
  genres: Genre[];
  homepage: string;
  id: number;
  imdbID?: string;
  original_language?: string;
  original_title?: string;
  in_production?: boolean;
  languages?: string;
  last_air_date?: Date;
  last_episode_to_air?: TEpisodeToAir;
  name?: string;
  next_episode_to_air?: TEpisodeToAir;
  networks?: ProductionCompany[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: OriginalLanguage;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons?: Season[];
  release_date?: Date;
  revenue?: number | undefined;
  runtime?: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title?: string;
  video?: boolean;
  type?: string;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  De = "de",
  En = "en",
  Fi = "fi",
  Pl = "pl",
}

export interface BelongsToCollection {
  id: number;
  name: string;
  posterPath: string;
  backdropPath: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso639_1: string;
  name: string;
}

export interface TEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
  airDate: Date;
  episodeNumber: number;
  productionCode: string;
  runtime: number;
  seasonNumber: number;
  showID: number;
  stillPath: null | string;
}

export interface Season {
  airDate: Date;
  episodeCount: number;
  id: number;
  name: string;
  overview: string;
  posterPath: string;
  seasonNumber: number;
}
