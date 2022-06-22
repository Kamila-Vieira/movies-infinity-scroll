import { Container, Form, Input, Button } from "./styles";

export default function SearchBar() {
  return (
    <Container data-testid="search-bar">
      <Form data-testid="search-bar-form">
        <Input type="text" data-testid="search-bar-input" />
        <Button type="submit" data-testid="search-bar-button">
          Buscar
        </Button>
      </Form>
    </Container>
  );
}
