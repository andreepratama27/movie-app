import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

/* Route Collections */
import App from "./App.tsx";
import MovieDetail from "./pages/movie-detail.tsx";
import SearchMovie from "./pages/search.tsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/movie/:id", element: <MovieDetail /> },
  { path: "/movie/search", element: <SearchMovie /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
