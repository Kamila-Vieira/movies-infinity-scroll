import { Route, Routes as BrowserRoutes } from "react-router-dom";
import Movie from "../pages/Movie";
import Movies from "../pages/Movies";

export default function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie/:id/:title" element={<Movie />} />
    </BrowserRoutes>
  );
}
