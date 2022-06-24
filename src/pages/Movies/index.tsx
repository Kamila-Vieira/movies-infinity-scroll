import { useEffect } from "react";
import { useSelector } from "react-redux";
import MoviesList from "../../components/MoviesList";
import { SearchSelector, SearchState } from "../../typings/search";

export default function Movies() {
  const state = useSelector<SearchSelector, SearchState>(
    (state) => state.search
  );
  // const { debouncedFetchResults, loadingFetch } = useInfinityScroll();

  useEffect(() => {
    console.log("movies", state.data?.results);
  }, [state.data?.results]);

  return <MoviesList />;
}
