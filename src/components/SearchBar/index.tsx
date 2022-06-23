import useSearch from "../../hooks/useSearch";
import { Container, InputSearch } from "./styles";

export default function SearchBar() {
  const { handleChangeInputSearch } = useSearch();

  return (
    <Container data-testid="search-bar">
      <InputSearch
        type="text"
        data-testid="search-bar-input"
        onChange={handleChangeInputSearch}
      />
    </Container>
  );
}
