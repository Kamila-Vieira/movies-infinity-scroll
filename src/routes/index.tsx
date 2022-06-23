import { Route, Routes as BrowserRoutes } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import Movie from "../pages/Movie";

export default function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<MoviesList />} />
      <Route path="/movie/:id/:title" element={<Movie />} />
    </BrowserRoutes>
  );
}
