import MovieList from "..";
import { render, screen } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";

const movieListMock: Movie[] = [
  {
    adult: false,
    backdrop_path: "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
    genre_ids: [28, 878, 27],
    id: 615656,
    original_language: "en",
    original_title: "Meg 2: The Trench",
    overview:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    popularity: 5133.953,
    poster_path: "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
    release_date: "2023-08-02",
    title: "Meg 2: The Trench",
    video: false,
    vote_average: 7,
    vote_count: 1595,
  },
];

describe("<MovieList /> component", () => {
  it("should render MovieList", async () => {
    render(
      <StaticRouter location="#">
        <MovieList movies={movieListMock} />
      </StaticRouter>
    );

    const findElement = await screen.findByTestId("movie-list");
    expect(findElement.childElementCount).toEqual(1);
  });

  it("should render nothing when movie data is empty", async () => {
    render(
      <StaticRouter location="#">
        <MovieList />
      </StaticRouter>
    );
  });
});
