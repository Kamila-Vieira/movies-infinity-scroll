import debouce from "lodash.debounce";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchRequest,
  searchUpdateLoading,
} from "../store/modules/search/actions";
import { DEBOUNCE_LOADING_TIMEOUT } from "../constants";
import { SearchSelector } from "../typings/search";

export default function useSearch() {
  const dispatch = useDispatch();
  const page = useSelector<SearchSelector, number>(
    (state) => state.search?.page || 1
  );

  const [initData, setInitData] = useState(false);

  useEffect(() => {
    if (initData) {
      dispatch(searchRequest({ isInitial: true, page }));
    }
  }, [dispatch, initData, page]);

  const inputSearchInit = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      dispatch(searchUpdateLoading({ loading: true }));

      if (!value || !value.trim()) {
        setInitData(true);
        return;
      }

      setInitData(false);
      dispatch(searchRequest({ query: value, isInitial: false, page }));
    },
    [dispatch, page]
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

  return { handleChangeInputSearch, setInitData };
}
