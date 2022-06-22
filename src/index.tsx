import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import MoviesList from "./components/MoviesList";
import Routes from "./routes";
import store from "./store";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
      <MoviesList />
    </Provider>
  </React.StrictMode>
);
