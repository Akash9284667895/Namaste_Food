import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should load contact us component",()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test ("Name should be load on contact component",()=>{
    render(<Contact/>);
    const name = screen.getByText("Akash Lande");

    expect(name).toBeInTheDocument();
})