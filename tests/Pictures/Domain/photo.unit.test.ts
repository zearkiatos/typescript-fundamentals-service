import PhotoOrientation from "../../../src/PhotoOrientation";
import { Photo } from '../../../src/Pictures/Domain/Photo';
import { Picture } from '../../../src/Pictures/Domain/Picture';
describe("Unit test suite for Photo class", () => {
    test("Should implement and call the constructor with the data", () => {
      const title: string = 'Photo';
      const date: string = '2022-01-31';
      const orientation: PhotoOrientation = PhotoOrientation.Portrait;

      const photo = new Photo(title, date, orientation);

      expect(photo).toI(Picture);
      expect(photo).toBeInstanceOf(Photo);
    });
  });