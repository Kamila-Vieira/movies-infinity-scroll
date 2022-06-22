import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import MoviesList from "../components/MoviesList";
import searchData from "../mocks/searchData";
import store from "../store";
import { searchSuccess } from "../store/modules/search/actions";

describe("When show movies list", () => {
  it("should have a movie list content", () => {
    render(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );

    const moviesListContainer = screen.getByTestId("movies-list");
    const moviesListContent = screen.getByTestId("movies-list-content");
    expect(moviesListContainer).toBeInTheDocument();
    expect(moviesListContainer).toContainElement(moviesListContent);
  });

  it("should render movies at list", () => {
    render(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );

    store.dispatch(searchSuccess({ data: searchData }));

    const resultList = store.getState().search.data?.results || [];

    const moviesListContent = screen.getByTestId("movies-list-content");
    const moviesListContentItems = screen.getAllByTestId("movies-list-item");

    moviesListContentItems.forEach((moviesListContentItem) => {
      expect(moviesListContent).toContainElement(moviesListContentItem);
    });

    expect(moviesListContentItems.length).toBe(resultList.length);
  });
});
