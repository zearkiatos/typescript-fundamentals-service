import PhotoOrientation from "../../../src/PhotoOrientation";
import { Photo } from '../../../src/Pictures/Domain/Photo';
import { PictureHandler } from './utils/PictureHandler';
describe("Unit test suite for Photo class", () => {
    test("Should implement and call the constructor with the data", () => {
      const title: string = 'Photo';
      const date: string = '2022-01-31';
      const orientation: PhotoOrientation = PhotoOrientation.Portrait;

      const photo = new Photo(title, date, orientation);

      expect(photo).toBeInstanceOf(Photo);
      expect(PictureHandler.instanceOfPicture(photo)).toBeTruthy();
    });

    test("Should generate a picture", () => {
      const picture = {title: 'Photo', date: '2022-01-31', orientation: PhotoOrientation.Panorama};
      const expectResult = {title: 'Photo', date: '2022-01-31', orientation: PhotoOrientation.Panorama};
      
      const photo = Photo.generatePicture(picture);

      expect(photo).toEqual(expectResult);
    });
  });