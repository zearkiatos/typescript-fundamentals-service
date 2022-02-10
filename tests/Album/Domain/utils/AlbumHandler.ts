import { IAlbum } from "../../../../src/Album/Domain/IAlbum";

abstract class AlbumHandler {
  static instanceOfAlbum(object: any): object is IAlbum {
    return "title" in object && "id" in object && "description" in object;
  }
}

export { AlbumHandler };