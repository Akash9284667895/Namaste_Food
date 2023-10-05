import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom"

it("should render RestaurantCard Component with props Data",()=>{


    render(<RestaurantCard redData={MOCK_DATA}/>);

    const name = screen.getByText("Monginis");

    expect(name).toBeInTheDocument();
})