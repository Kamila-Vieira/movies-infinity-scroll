import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";
import store from "./store";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
