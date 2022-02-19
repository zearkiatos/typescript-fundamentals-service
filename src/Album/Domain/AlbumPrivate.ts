import { Picture } from "../../Pictures/Domain/Picture";
import { Item } from "../../Shared/Domain/Item";

class AlbumPrivate extends Item {
  private pictures: Picture[];
  #privateAttribute: boolean;

  public constructor(id: number, title: string) {
    super(id, title);
    this.pictures = [];
    this.#privateAttribute = false;
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }

  get Pictures() {
    return this.pictures;
  }

  set Pictures(pictures: Picture[]) {
    this.pictures = pictures;
  }
}

export { AlbumPrivate };
