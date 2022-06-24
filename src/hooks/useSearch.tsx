import debouce from "lodash.debounce";
import { ChangeEvent, useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  searchRequest,
  searchUpdateLoading,
} from "../store/modules/search/actions";
import { DEBOUNCE_LOADING_TIMEOUT } from "../constants";

export default function useSearch() {
  const dispatch = useDispatch();

  const inputSearchInit = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      dispatch(searchUpdateLoading({ loading: true }));

      if (!value || !value.trim()) {
        dispatch(searchRequest({ isInitial: true, page: 1 }));
        return;
      }

      dispatch(searchRequest({ query: value, isInitial: false, page: 1 }));
    },
    [dispatch]
  );

  const handleChangeInputSearch = useMemo(() => {
    dispatch(searchUpdateLoading({ loading: true }));
    return debouce(inputSearchInit, DEBOUNCE_LOADING_TIMEOUT);
  }, [dispatch, inputSearchInit]);

  useEffect(() => {
    return () => {
      handleChangeInputSearch.cancel();
    };
  });

  return { handleChangeInputSearch };
}
