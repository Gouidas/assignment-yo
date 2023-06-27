import { Genre } from "./Genre";
import { ProductionCompany } from "./ProductionCompany";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  overview: string;
  homepage: string;
  genres: Genre[];
  production_companies: ProductionCompany[];
  popularity: number;
  imdb_id: string;
}
