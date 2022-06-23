import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import SearchBar from "../components/SearchBar";
import { DEBOUNCE_LOADING_TIMEOUT } from "../constants";
import store from "../store";

const FAKE_QUERY = "batman";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("When handle search movies", () => {
  it("should have a search bar form", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchBarContainer = screen.getByTestId("search-bar");
    const searchBarInput = screen.getByTestId("search-bar-input");
    expect(searchBarContainer).toBeInTheDocument();
    expect(searchBarContainer).toContainElement(searchBarInput);
  });

  it("should not handle search without debouce", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchBarInput = screen.getByTestId("search-bar-input");
    fireEvent.change(searchBarInput, { target: { value: FAKE_QUERY } });

    const state = store.getState();
    expect(state.search.query).not.toBe(FAKE_QUERY);
    expect(state.search.data).toBeNull();
  });

  it("should update context properties on search", async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchBarInput = screen.getByTestId("search-bar-input");
    fireEvent.change(searchBarInput, { target: { value: FAKE_QUERY } });

    act(() => {
      jest.advanceTimersByTime(DEBOUNCE_LOADING_TIMEOUT);
    });

    const state = store.getState();
    expect(state.search.query).toBe(FAKE_QUERY);
    expect(state.search.loading).toBe(true);

    act(() => {
      jest.advanceTimersByTime(1);
    });
  });
});
