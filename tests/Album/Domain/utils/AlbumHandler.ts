import { Album } from "../../../../src/Album/Domain/Album";

abstract class AlbumHandler {
  static instanceOfAlbum(object: any): object is Album {
    return "title" in object && "id" in object && "description" in object;
  }
}

export { AlbumHandler };