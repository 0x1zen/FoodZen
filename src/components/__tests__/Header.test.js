import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header.js";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";
import "@testing-library/jest-dom";

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextDecoder, TextEncoder });

test("Should load Header Component With A Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const loginButton = screen.getByRole("button", { name: /Login/ });
  expect(loginButton).toBeInTheDocument();
});

test("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const loginButton = screen.getByRole("button", { name: /Login/ });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: /Logout/ });
  expect(logoutButton).toBeInTheDocument();
});
