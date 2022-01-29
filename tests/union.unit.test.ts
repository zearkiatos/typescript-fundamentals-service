describe("Unit test suite for union", () => {
  test("Should use more than one type of variable", () => {
    let userId: number | string;
    const expectNumber = "number";
    const expectString = "string";

    userId = 10;

    expect(typeof userId).toBe(expectNumber);

    userId = "10";

    expect(typeof userId).toBe(expectString);
  });

  test("Should use more than one type of variable with type allies", () => {
    type UserId = number | string;
    let userId: UserId;
    const expectNumber = "number";
    const expectString = "string";

    userId = 10;

    expect(typeof userId).toBe(expectNumber);

    userId = "10";

    expect(typeof userId).toBe(expectString);
  });

  test("Should generate and error if the literal type is not correct", () => {
    type SquareSize = "100x100" | "500x500" | "1000x1000";
    const smallPicture: SquareSize = '100x100';
    const expectResult = "100x100";

    expect(smallPicture).toBe(expectResult);
  });
});
