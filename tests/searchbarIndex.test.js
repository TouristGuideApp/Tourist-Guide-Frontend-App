import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
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
});
