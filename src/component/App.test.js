import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
//import App from "../components/App"; // Adjust import based on file structure
import App from "./App";
import "@testing-library/jest-dom"; // Include for toHaveTextContent

describe("App Component", () => {
  it("renders the Display and ButtonPanel components", () => {
    render(<App />);

    // Check that the display initially shows '0'
    expect(screen.getByTestId("display")).toHaveTextContent("0");

    // Check if all necessary buttons are rendered using getByRole
    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
    expect(screen.getByTestId("button-AC")).toBeInTheDocument();
    expect(screen.getByTestId("button-+/-")).toBeInTheDocument();
    expect(screen.getByTestId("button-%")).toBeInTheDocument();
    expect(screen.getByTestId("button-=")).toBeInTheDocument();
    expect(screen.getByTestId("button--")).toBeInTheDocument();
    expect(screen.getByTestId("button-+")).toBeInTheDocument();
    expect(screen.getByTestId("button-.")).toBeInTheDocument();
  });

  it("updates the display when a button is clicked", () => {
    render(<App />);
    // Simulate button click
    fireEvent.click(screen.getByRole("button", { name: "1" })); // Click the "1" button

    // Verify display updates
    //// Use getByTestId to select the display and check its content
    expect(screen.getByTestId("display")).toHaveTextContent("1");

    fireEvent.click(screen.getByRole("button", { name: "." })); // Click the "1" button
    expect(screen.getByTestId("display")).toHaveTextContent(".");
  });

  it("performs operations correctly", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    //expect(screen.getByText("8")).toBeInTheDocument(); // Result of 5 + 3
    // Verify the display shows the correct result
    expect(screen.getByTestId("display")).toHaveTextContent("8");

    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "-" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByTestId("display")).toHaveTextContent("2");
  });
});
