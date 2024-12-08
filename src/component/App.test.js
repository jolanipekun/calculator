import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom"; // Include for toHaveTextContent

class CalculatorTest {
  static clickButtons(sequence) {
    sequence.forEach(button => {
      fireEvent.click(screen.getByRole("button", { name: button }));
    });
  }

  static assertDisplayValue(expected) {
    const displayValue = screen.getByTestId("display").textContent;
    expect(displayValue).toBe(expected);
  }

  initialize() {
    this.app = render(<App />);
    if (!this.app) {
      throw new Error("Failed to render the App component");
    }
  }

  clickButtons(sequence) {
    sequence.forEach(button => {
      fireEvent.click(screen.getByRole("button", { name: button }));
    });
  }

  getDisplayValue() {
    return screen.getByTestId("display").textContent;
  }

  assertDisplayValue(expected) {
    expect(this.getDisplayValue()).toBe(expected);
  }

  performOperation(testCase) {
    const { input, expected } = testCase;
    this.clickButtons(input);
    this.assertDisplayValue(expected);
  }
}

describe("Calculator App Component Tests", () => {
  let calculator;

  beforeEach(() => {
    calculator = new CalculatorTest();
    calculator.initialize();
  });

  it("should render initial state correctly", () => {
    calculator.assertDisplayValue("0");
  });

  it("should handle single digit input", () => {
    calculator.performOperation({ input: ["7"], expected: "7" });
  });

  it("should handle addition correctly", () => {
    calculator.performOperation({ input: ["5", "+", "3", "="], expected: "8" });
  });

  it("should handle subtraction correctly", () => {
    calculator.performOperation({ input: ["9", "-", "4", "="], expected: "5" });
  });

  it("should handle multiplication correctly", () => {
    calculator.performOperation({
      input: ["6", "x", "2", "="],
      expected: "12",
    });
  });

  it("should handle decimal inputs correctly", () => {
    calculator.performOperation({ input: ["1", ".", "2"], expected: "1.2" });
  });

  it("should handle clearing the display using AC", () => {
    calculator.performOperation({
      input: ["5", "+", "3", "AC"],
      expected: "0",
    });
  });

  it("should handle mixed operations", () => {
    calculator.performOperation({
      input: ["5", "+", "3", "=", "-", "2", "="],
      expected: "6",
    });
  });

  it("should reset the calculator and handle new inputs after AC", () => {
    calculator.performOperation({
      input: ["9", "+", "6", "AC", "3", "+", "3", "="],
      expected: "6",
    });
  });
});
