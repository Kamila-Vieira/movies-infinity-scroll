import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchData, SearchMovieItem } from "../../typings/api";
import { SearchSelector, SearchTypes } from "../../typings/search";
import searchData from "../../mocks/searchData";
import { Container, List, ListItem } from "./styles";
import { searchSuccess } from "../../store/modules/search/actions";

export default function MoviesList() {
  const dispatch = useDispatch();
  const searchDataResults = useSelector<SearchSelector, SearchMovieItem[]>(
    (state) => state.search.data?.results || []
  );

  useEffect(() => {
    dispatch(searchSuccess({ data: searchData }));
  }, []);

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
