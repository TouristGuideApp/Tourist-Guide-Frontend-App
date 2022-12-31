import "@testing-library/jest-dom";
import { fireEvent, queryByTestId, render, screen } from "@testing-library/react";
import SearchBarIndexComp from "../components/searchBarIndex";
import user from "@testing-library/user-event";

describe("Search Bar And Search Button", () => {
    test("Renders TextBox Component correctly when Search Button is NOT clicked", () => {
        render(<SearchBarIndexComp />);

        expect(screen.getByText("Enter A City Name")).toBeInTheDocument();
    });
    test("Renders Button Component correctly when Search Button is NOT clicked", () => {
        render(<SearchBarIndexComp />);

        expect(screen.getByText("Search City")).toBeInTheDocument();
    });
    test("Renders TextBox Component correctly when Search Button is clicked", () => {
        render(<SearchBarIndexComp />);

        const buttonElement = screen.getByTestId("search-button");
        user.click(buttonElement);

        expect(screen.getByText("Enter A City Name")).toBeInTheDocument();
    });
    test("Renders Button Component correctly when Search Button is clicked", () => {
        render(<SearchBarIndexComp />);

        const buttonElement = screen.getByTestId("search-button");
        user.click(buttonElement);

        expect(screen.getByText("Search City")).toBeInTheDocument();
    });
    test("Search Field Input is empty", () => {
        render(<SearchBarIndexComp />);

        const searchInputElement = screen.getByPlaceholderText("Search...");

        expect(searchInputElement.value).toBe("");
    });
    test("Search Field Input works correctly", () => {
        render(<SearchBarIndexComp />);

        const searchInputElement = screen.getByPlaceholderText("Search...");
        const testValue = "Testcity";
        fireEvent.change(searchInputElement, { target: { value: testValue } });

        expect(searchInputElement).toBeInTheDocument();
        expect(searchInputElement.value).toBe("Testcity");
    });
});
