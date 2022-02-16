import { AlbumHandler } from './utils/AlbumHandler';
describe("Unit test suite for Album interface", () => {
    test("Should evaluate the implementation of Album interface", () => {
      const album = {
          id: 1,
          title: 'Meetups',
          description: 'Lorem ipsum'
      }

      const implementedInterface = AlbumHandler.instanceOfAlbum(album);

      expect(implementedInterface).toBeTruthy();
    });
  });