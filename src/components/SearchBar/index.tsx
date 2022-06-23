import debouce from "lodash.debounce";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchSelector } from "../../typings/search";
import { Container, InputSearch } from "./styles";
import {
  searchRequest,
  searchUpdateLoading,
} from "../../store/modules/search/actions";
import { DEBOUNCE_LOADING_TIMEOUT } from "../../constants";
export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const query = useSelector<SearchSelector, string>(
    (state) => state.search.query
  );
  const loading = useSelector<SearchSelector, boolean>(
    (state) => state.search.loading
  );

  const handleChangeInputSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      //dispatch(searchUpdateLoading({ loading: true }));
      setInputValue(event.target.value);
      dispatch(
        searchRequest({ query: event.target.value, isInitial: false, page: 1 })
      );
    },
    [dispatch]
  );

  const debouncedMoviesResults = useMemo(() => {
    // dispatch(searchUpdateLoading({ loading: true }));
    return debouce(handleChangeInputSearch, DEBOUNCE_LOADING_TIMEOUT);
  }, [handleChangeInputSearch]);

  useEffect(() => {
    return () => {
      debouncedMoviesResults.cancel();
    };
  });

  useEffect(() => {
    console.log("loading", loading);
  }, [inputValue]);

  return (
    <Container data-testid="search-bar">
      <InputSearch
        type="text"
        data-testid="search-bar-input"
        onChange={debouncedMoviesResults}
      />
    </Container>
  );
}
