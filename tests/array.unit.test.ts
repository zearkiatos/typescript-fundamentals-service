describe("Unit test suite for array type", () => {
  test("Should an array", () => {
    let users: string[];
    users = ["Pedro", "Luis", "Jose"];
    const expectResult = ["Pedro", "Luis", "Jose"];

    expect(users).toEqual(expectResult);
  });

  test("Should use array declaration", () => {
    let pictures: Array<string>;
    pictures = ["Favorite Sunset", "Vacation time", "Landscape"];
    const expectResult = ["Favorite Sunset", "Vacation time", "Landscape"];

    expect(pictures).toEqual(expectResult);
  });

  test("Should access to the array value with the index", () => {
    let pictures: Array<string>;
    pictures = ["Favorite Sunset", "Vacation time", "Landscape"];
    const expectResult = "Favorite Sunset";

    expect(pictures[0]).toEqual(expectResult);
  });

  test("Should count the quantity of the element into the array", () => {
    let pictures: Array<string>;
    pictures = ["Favorite Sunset", "Vacation time", "Landscape"];
    const expectResult = 3;

    expect(pictures.length).toEqual(expectResult);
  });

  test("Should use push to add a new data", () => {
    let pictures: Array<string>;
    pictures = ["Favorite Sunset", "Vacation time", "Landscape"];
    const expectResult = 4;
    const newPicture = "New picture";

    pictures.push(newPicture);

    expect(pictures.length).toEqual(expectResult);
    expect(pictures.includes(newPicture)).toBeTruthy();
  });

  test("Should sort and ordened the data desc", () => {
    let pictures: Array<string>;
    pictures = ["Favorite Sunset", "Vacation time", "Landscape"];
    const expectResult = ["Favorite Sunset", "Landscape", "Vacation time"];

    pictures.sort();

    expect(pictures).toEqual(expectResult);
  });
});
