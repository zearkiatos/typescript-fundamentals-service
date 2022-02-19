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

  test("Should set attributes with method get and set", () => {
    const picture: PicturePrivate = new PicturePrivate(
      1,
      "My Picture",
      PhotoOrientation.Portrait
    );
    const expectResult: string =
      "[id: 2, title: My Picture 2, orientation: Panorama]";
    picture.Id = 2;
    picture.Title = "My Picture 2";
    picture.Orientation = PhotoOrientation.Panorama;

    const pictureStatus:string = picture.toString();

      expect(picture).toBeDefined();
      expect(expectResult).toBe(pictureStatus);
      expect(picture.Id).toBe(2);
      expect(picture.Title).toBe('My Picture 2');
      expect(picture.Orientation).toBe(PhotoOrientation.Panorama);
  });

  test("Should access to an static attribute photoOrientation", () => {
    const photoOrientation = PicturePrivate.photoOrientation;

      expect(photoOrientation).toBeDefined();
      expect(photoOrientation).toEqual(PhotoOrientation);
  });
});
