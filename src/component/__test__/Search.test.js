import { fireEvent, render,screen } from "@testing-library/react";
import {act} from "react-dom/test-utils"
import Body from "../Body";
import MOCK_DATA from "../mocks/ResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
return Promise.resolve({
    json:()=>{
        return Promise.resolve(MOCK_DATA);
    }
})
});

it("Should Search Res List for burger text input", async()=>{
    await act(async()=>render
    (
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    expect (cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button",{name:"Search"});

    const searchInput = screen.getById("searchInput");

    fireEvent.change(searchInput,{Target:{value:"burger"}});

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(4);

})

it("Should filter top rated restaurant", async()=>{
    await act(async()=>render
    (
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    expect (cardsBeforeSearch.length).toBe(20);

    const TopRatedBtn = screen.getByRole("button",{name:"All Restaurants"})

    fireEvent.click(TopRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(15);

});