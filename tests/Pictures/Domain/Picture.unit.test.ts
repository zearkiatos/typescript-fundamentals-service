import PhotoOrientation from "../../../src/PhotoOrientation";
import { Picture } from "../../../src/Pictures/Domain/Picture";
describe("Unit test suite for Picture class", () => {
  test("Should return the values of the class in string format", () => {
    const id: number = 1;
    const title: string = "Photo";
    const orientation: PhotoOrientation = PhotoOrientation.Portrait;
    const expectResult:string = `[id: 1, title: Photo, orientation: Portrait]`;

    const picture = new Picture(id, title, orientation);
    const result = picture.toString();

    expect(result).toBe(expectResult);
  });
});
