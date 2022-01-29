import { FlickrSize } from "../src/FlickrSize";
describe("Unit test suite for Flickr size Enumerable", () => {
  test("Should get the large 1024 size", () => {
    let large1024: FlickrSize;
    const expectResult = "1024x430";

    large1024 = FlickrSize.Large1024;

    expect(large1024).toBe(expectResult);
  });
});
