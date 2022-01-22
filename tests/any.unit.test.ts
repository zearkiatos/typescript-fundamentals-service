describe("Suite test for any objects", () => {
  test("Should change the type depend of its assignation", () => {
    let userId: any;
    const expectNumber: string = "number";
    const expectString: string = "string";

    userId = 1;

    expect(typeof userId).toBe(expectNumber);

    userId = "1";

    expect(typeof userId).toBe(expectString);
  });

  test("Should extract an specific string from any variable", () => {
    const greetTypescript: any = "Hello typescript";
    const expectedResult: string = "typescript";

    const result: string = greetTypescript.substring(6);

    expect(result).toBe(expectedResult);
  });
});
