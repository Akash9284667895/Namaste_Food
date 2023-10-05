import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByRole("button");

  const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a cart 0 items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("🛒-(0 Items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a cart ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //it will check that cart is present or not in header component
  const cartItems = screen.getByText(/🛒/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on Click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //it will check that cart is present or not in header component
 const loginButton = screen.getByRole("button",{name:"Login"})

 fireEvent.click(loginButton);

 const logoutButton = screen.getByRole("button",{name:"Logout"})

  expect(logoutButton).toBeInTheDocument();
});
