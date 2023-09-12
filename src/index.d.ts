interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface MovieDetail extends Movie {
  genres: Array<{ id: number; name: string }>;
  tagline: string;
  overview: string;
  homepage: string;
  budget: number;
  popularity: number;
  production_companies: ProductionCompany[];
}

interface BaseResponse<T> {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}

interface ApiResponse extends BaseResponse<Movie[]> {}
