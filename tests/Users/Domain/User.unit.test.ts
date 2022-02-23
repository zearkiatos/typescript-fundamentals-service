import { UserHandler } from "./utils/UserHandler";
import { AlbumBuild } from "../../builds/AlbumBuild";
import { Album } from "../../../src/Album/Domain/Album";
import { User } from "../../../src/Users/Domain/User";
describe("Unit test suite for User class", () => {
  test("Should evaluate if the user variable implement the User interface", () => {
    const user = new User(1, "user1", "Pedro", false);

    const isImplemented: boolean = UserHandler.instanceOfUser(user);

    expect(isImplemented).toBeTruthy();
  });

  test("Should add a albums list to user", () => {
    const user = new User(1, "user1", "Pedro", false);
    const albums: Album[] = [
      new AlbumBuild().build(),
      new AlbumBuild().withId(2).withTitle("A test album").build()
    ];

    user.addAlbum(albums[0]);
    user.addAlbum(albums[1]);

    expect(user.albums).toHaveLength(2);
    expect(user.albums).toEqual(albums);
  });

  test("Should remove some of the album", () => {
    const user = new User(1, "user1", "Pedro", false);
    const albums: Album[] = [
      new AlbumBuild().build(),
      new AlbumBuild().withId(2).withTitle("A test album").build()
    ];

    user.addAlbum(albums[0]);
    user.addAlbum(albums[1]);
    user.removeAlbum(albums[0]);

    expect(user.albums).toHaveLength(1);
    expect(user.albums[0]).toEqual(albums[1]);
  });
});
