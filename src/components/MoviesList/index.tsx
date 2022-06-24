import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInfinityScroll from "../../hooks/useInfinityScroll";
import useSearch from "../../hooks/useSearch";
import {
  searchRequest,
  searchReset,
  searchUpdatePage,
} from "../../store/modules/search/actions";
import { SearchMovieItem } from "../../typings/api";
import { SearchSelector, SearchState } from "../../typings/search";
import InfinityScroll from "../InfinityScroll";

import { Container, List, ListItem } from "./styles";

export default function MoviesList() {
  const dispatch = useDispatch();
  const state = useSelector<SearchSelector, SearchState>(
    (state) => state.search
  );
  // const { debouncedFetchResults, loadingFetch } = useInfinityScroll();

  // useEffect(() => {
  //   console.log("movies", state.data?.results);
  // }, [state.data?.results]);

  useEffect(() => {
    console.log("chamando 1");
    dispatch(searchRequest({ isInitial: true, page: 1 }));

    return () => {
      dispatch(searchReset());
    };
  }, [dispatch]);

  return (
    <Container data-testid="movies-list">
      <List data-testid="movies-list-content">
        {state.data?.results.map(({ id, title }) => {
          return (
            <ListItem key={id} data-testid="movies-list-item">
              {title}
            </ListItem>
          );
        })}
        {/*   {loadingFetch && <strong>IS FETCHING...</strong>}

        <InfinityScroll fetchMore={debouncedFetchResults} /> */}
      </List>
    </Container>
  );
}
