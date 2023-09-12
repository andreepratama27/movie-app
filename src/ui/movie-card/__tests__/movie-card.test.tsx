import MovieCard from "..";
import { render, screen } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";

const mockMovie: Movie = {
  adult: false,
  backdrop_path: "/axIU0Ay88ZSfZHL5AlsQm64Bcb8.jpg",
  genre_ids: [16, 878, 28, 12],
  id: 1121575,
  original_language: "en",
  original_title: "Babylon 5: The Road Home",
  overview:
    "Travel across the galaxy with John Sheridan as he unexpectedly finds himself transported through multiple timelines and alternate realities in a quest to find his way back home. Along the way he reunites with some familiar faces, while discovering cosmic new revelations about the history, purpose, and meaning of the Universe.",
  popularity: 394.731,
  poster_path: "/qlXLiFKf2kvJ4K2VDBC5Z048vm3.jpg",
  release_date: "2023-08-15",
  title: "Babylon 5: The Road Home",
  video: false,
  vote_average: 6.8,
  vote_count: 48,
};

describe("<MovieCard /> component", () => {
  it(`should render "${mockMovie.original_title}" title`, async () => {
    render(
      <StaticRouter location="#">
        <MovieCard movie={mockMovie} />
      </StaticRouter>
    );

    const movieCardTitle = await screen.findByTestId("movie-title");

    expect(movieCardTitle).toBeInTheDocument();
    expect(movieCardTitle.textContent).toEqual(mockMovie.original_title);
  });
});
