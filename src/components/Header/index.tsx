import SearchBar from "../SearchBar";
import { Container, NavBar, Title, LogoTMDB } from "./styles";

export default function Header() {
  return (
    <Container>
      <NavBar>
        <LogoTMDB />
        <Title>Filmes TMDB</Title>
      </NavBar>
      <SearchBar />
    </Container>
  );
}
