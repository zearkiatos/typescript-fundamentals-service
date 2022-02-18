import { Album } from "../../../src/Album/Domain/Album";
import { AlbumPrivate } from "../../../src/Album/Domain/AlbumPrivate";
import PhotoOrientation from "../../../src/PhotoOrientation";
import { Picture } from "../../../src/Pictures/Domain/Picture";
import { PictureBuild } from "../../builds/PictureBuild";
describe("Suite test unit for Album Private", () => {
  test("Should not have access to private attributes", () => {
    const album: AlbumPrivate = new AlbumPrivate(1, "AlbumPrivate");

    expect(album).toBeDefined();
  });

  test("Should return add a new picture", () => {
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

    const album = new AlbumPrivate(id, title);
    const albumSpy = jest.spyOn(album, 'addPicture');
    album.addPicture(pictures[0]);
    album.addPicture(pictures[1]);
console.log(albumSpy.mock.calls[0]);
    expect(album).toBeDefined();
    expect(albumSpy).toHaveBeenCalled();
    expect(albumSpy).toBeCalledTimes(2);
    expect(albumSpy.mock.calls[0][0]).toEqual(pictures[0]);
    expect(albumSpy.mock.calls[1][0]).toEqual(pictures[1]);

  });
});
