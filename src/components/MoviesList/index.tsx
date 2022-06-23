import { useEffect } from "react";
import { useSelector } from "react-redux";
import useSearch from "../../hooks/useSearch";
import { SearchMovieItem } from "../../typings/api";
import { SearchSelector } from "../../typings/search";

import { Container, List, ListItem } from "./styles";

export default function MoviesList() {
  const { setInitData } = useSearch();
  const searchDataResults = useSelector<SearchSelector, SearchMovieItem[]>(
    (state) => state.search.data?.results || []
  );

  useEffect(() => {
    setInitData(true);
  }, [setInitData]);

  // useEffect(() => {
  //   console.log("searchDataResults", searchDataResults);
  // }, [searchDataResults]);

  return (
    <Container data-testid="movies-list">
      <List data-testid="movies-list-content">
        {searchDataResults.map(({ id, title }) => {
          return (
            <ListItem key={id} data-testid="movies-list-item">
              {title}
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}
