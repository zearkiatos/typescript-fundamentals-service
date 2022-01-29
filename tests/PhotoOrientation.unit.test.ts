import PhotoOrientation from "../src/PhotoOrientation";
describe("Suite test for Photo Orientation Enum ", () => {
  test("Should set value with enum name", () => {
    const orientation: PhotoOrientation = PhotoOrientation.Landscape;
    const expectResult: number = 0;

    expect(orientation).toBe(expectResult);
  });
});
