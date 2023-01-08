import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import SearchBarSingleImage from "../components/searchBarSingleImage";
import Specific from "../pages/image/[id]";

describe("Single City Page",() => {
    test("Renders Searchbar Textbox Component when user is on single page",() =>{
        render(<SearchBarSingleImage/>)

        expect(screen.getByText("Enter A City Name")).toBeInTheDocument
    })
    test("Renders Searchbar button Component when user is on single page",() =>{
        render(<SearchBarSingleImage/>)

        expect(screen.getByText("Search City")).toBeInTheDocument();
    })
    test("Renders Searchbar button Component when user is on single page",() =>{
        render(<SearchBarSingleImage/>)

        expect(screen.getByText("Search City")).toBeInTheDocument();
    })
    test("Renders Searchbar TextBox Component correctly when Search Button is clicked", () => {
        render(<SearchBarSingleImage />);

        const buttonElement = screen.getByTestId("search-button");
        user.click(buttonElement);

        expect(screen.getByText("Enter A City Name")).toBeInTheDocument();
    });
    test("Renders Searchbar Button Component correctly when Search Button is clicked", () => {
        render(<SearchBarSingleImage />);

        const buttonElement = screen.getByTestId("search-button");
        user.click(buttonElement);

        expect(screen.getByText("Search City")).toBeInTheDocument();
    });
    test("Search Field Input is empty", () => {
        render(<SearchBarSingleImage />);

        const searchInputElement = screen.getByPlaceholderText("Search...");
        
        expect(searchInputElement.value).toBe("");
    });
    test("Search Field Input works correctly", () => {
        render(<SearchBarSingleImage />);

        const searchInputElement = screen.getByPlaceholderText("Search...");
        const testValue = "Testcity";
        fireEvent.change(searchInputElement, { target: { value: testValue } });

        expect(searchInputElement).toBeInTheDocument();
        expect(searchInputElement.value).toBe("Testcity");
    });
})