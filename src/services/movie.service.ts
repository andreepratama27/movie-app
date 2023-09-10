import { ApiToken, ApiUrl } from "../lib/constant";

export async function fetchAllMovie({
  page,
}: {
  page: number;
}): Promise<ApiResponse> {
  try {
    const response = await fetch(
      `${ApiUrl}/discover/movie?adult=false&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${ApiToken}`,
        },
      }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function fetchMovieDetail({
  id,
}: {
  id: number;
}): Promise<MovieDetail> {
  try {
    const response = await fetch(`${ApiUrl}/movie/${id}?adult=false`, {
      headers: {
        Authorization: `Bearer ${ApiToken}`,
      },
    });
    const result = response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function searchMovie({
  query,
}: {
  query: string;
}): Promise<ApiResponse> {
  try {
    const response = await fetch(
      `${ApiUrl}/search/movie?adult=false&query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${ApiToken}`,
        },
      }
    );
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
