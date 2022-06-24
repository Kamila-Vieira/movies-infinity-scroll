import { useState, useMemo, useCallback } from "react";
import debouce from "lodash.debounce";
import { DEBOUNCE_LOADING_TIMEOUT } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { SearchSelector, SearchState } from "../typings/search";
import { searchUpdatePage } from "../store/modules/search/actions";

//TODO: implementar melhorias na busca infinita

export default function useInfinityScroll() {
  const dispatch = useDispatch();
  const state = useSelector<SearchSelector, SearchState>(
    (state) => state.search
  );
  const [loadingFetch, setLoadingFetch] = useState(false);

  const handleFetchMore = useCallback(() => {
    //if (state.data) dispatch(searchUpdatePage({ page: state.page + 1 }));
    // console.log("chamando 2");

    setLoadingFetch(false);
  }, []);

  const debouncedFetchResults = useMemo(() => {
    setLoadingFetch(true);
    return debouce(handleFetchMore, DEBOUNCE_LOADING_TIMEOUT);
  }, [handleFetchMore]);

  return {
    debouncedFetchResults,
    loadingFetch,
  };
}
