import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import SearchBarIndexComp from "../components/searchBarIndex";

describe("Search Bar And Search Button", () => {
    test("Renders TextBox Component correctly", () => {
        render(<SearchBarIndexComp/>)

        const searchBarElement = screen.getByText("Enter A City Name");
        expect(searchBarElement).toBeInTheDocument()
    })
    test("Renders Button Component correctly", () => {
        render(<SearchBarIndexComp/>)

        const searchButtonElement = screen.getByText("Search City")
        expect(searchButtonElement).toBeInTheDocument()
    })
})
