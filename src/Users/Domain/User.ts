import { IUser } from "./IUser";
import { Album } from "../../Album/Domain/Album";
class User implements IUser {
  albums: Album[];
  id: number;
  username: string;
  isPro: boolean;
  firstName: string;
  constructor(id: number, username: string, firstName: string, isPro: boolean) {
    this.albums = [];
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.isPro = isPro;
  }

  addAlbum(album: Album) {
    this.albums.push(album);
  }

  removeAlbum(album: Album) {
    const index = this.albums.findIndex((a) => a.id === album.id);
    if (index >= 0) {
      this.albums.splice(index, 1);
    }
  }
}

export { User };
