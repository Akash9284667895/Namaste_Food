import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestroMenu from "../RestroMenu";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  Promise.reslove({
    json: () => Promise.reslove(MOCK_DATA),
  });
});

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        {" "}
        <Provide store={appStore}>
          <Header />
          <RestroMenu />
          <Cart />
        </Provide>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Biryani (5)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
});
