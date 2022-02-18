import { PicturePrivate } from "../../../src/Pictures/Domain/PicturePrivate";
import PhotoOrientation from "../../../src/PhotoOrientation";
describe("Suite test unit for Picture Private", () => {
  test("Should not have access to private attributes", () => {
    const picture: PicturePrivate = new PicturePrivate(
      1,
      "My Picture",
      PhotoOrientation.Portrait
    );
    const expectResult: string =
      "[id: 1, title: My Picture, orientation: Portrait]";
    
      const pictureStatus:string = picture.toString();

      expect(picture).toBeDefined();
      expect(expectResult).toBe(pictureStatus);
  });
});
