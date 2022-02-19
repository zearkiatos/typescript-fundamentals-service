import { AlbumPrivate } from '../../../src/Album/Domain/AlbumPrivate';
import { ItemHandler } from "./utils/ItemHandler";
describe("Unit test suites for Item", () => {
  test("Should create a class instance from item", () => {
      const item = new AlbumPrivate(1, 'Test');

      const isAnInstanceOfItem = ItemHandler.instanceOfItem(item);

      expect(item).toBeDefined();
      expect(isAnInstanceOfItem).toBeTruthy();
  });
});
