import { LiteralFlickrSize } from "../src/LiteralFlickrSize";
import { FlickrSize } from "../src/FlickrSize";
describe("Unit test suite for Literal Flickr Size Enumerable", () => {
  test("Should get the large 1024 size", () => {
    let thumbnail: LiteralFlickrSize;
    const expectResult = "100x42";

    thumbnail = FlickrSize.Thumbnail;

    expect(thumbnail).toBe(expectResult);
  });
});