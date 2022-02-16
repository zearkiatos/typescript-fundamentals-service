import PhotoOrientation from "../../../src/PhotoOrientation";
import { Album } from "../../../src/Album/Domain/Album";
import { Picture } from "../../../src/Pictures/Domain/Picture";
import { PictureBuild } from "../../builds/PictureBuild";
describe("Unit test suite for Album class", () => {
  test("Should return add list of pictures", () => {
    const pictures: Picture[] = [
      new PictureBuild().build(),
      new PictureBuild()
        .withId(2)
        .withTitle('Photo2')
        .withOrientation(PhotoOrientation.Panorama)
        .build()
    ];
    const id: number = 1;
    const title: string = "My Album";

    const album = new Album(id, title);
    album.addPicture(pictures[0]);
    album.addPicture(pictures[1]);

    expect(album.pictures).toEqual(pictures);
    expect(album.id).toBe(id);
    expect(album.title).toBe(title);
  });
});
