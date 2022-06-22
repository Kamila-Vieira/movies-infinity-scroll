import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import SearchBar from "../components/SearchBar";
import store from "../store";
import { SearchTypes } from "../typings/search";

describe("When handle search movies", () => {
  it("should have a search bar form", () => {
    render(<SearchBar />);

    const searchBarContainer = screen.getByTestId("search-bar");
    const searchBarForm = screen.getByTestId("search-bar-form");
    const searchBarInput = screen.getByTestId("search-bar-input");
    const searchBarButton = screen.getByTestId("search-bar-button");
    expect(searchBarContainer).toBeInTheDocument();
    expect(searchBarContainer).toContainElement(searchBarForm);
    expect(searchBarForm).toContainElement(searchBarInput);
    expect(searchBarForm).toContainElement(searchBarButton);
  });

  it("should update context query", () => {
    const query = "batman";
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchBarInput = screen.getByTestId("search-bar-input");

    fireEvent.input(searchBarInput, { target: { value: query } });

    store.dispatch({
      type: SearchTypes.SEARCH_REQUEST,
      payload: { query, page: 1, isInitial: false },
    });

    const state = store.getState();
    expect(state.search.query).toBe(query);
  });
});
