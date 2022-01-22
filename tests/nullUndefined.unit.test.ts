describe("Suite unit test for null and undefined types", () => {
  test("Should be declare and evaluate a null variable", () => {
    let nullVariable: null;
    nullVariable = null;

    expect(nullVariable).toBeNull();
  });

  test("Should be declare and evaluate a undefined variable", () => {
    let undefinedVariable: undefined;
    undefinedVariable = undefined;

    expect(undefinedVariable).toBeUndefined();
  });
});
