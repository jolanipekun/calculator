import calculate from "../logic/calculate";

describe("calculate helper function", () => {
  it("adds two numbers correctly", () => {
    const initialState = { total: "5", next: "3", operation: "+" };
    const result = calculate(initialState, "=");
    expect(result.total).toBe("8");
  });

  it("handles clearing the calculator", () => {
    const initialState = { total: "5", next: "3", operation: "+" };
    const result = calculate(initialState, "AC");
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
});
