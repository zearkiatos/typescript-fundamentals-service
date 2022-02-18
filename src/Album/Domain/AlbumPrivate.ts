import { Picture } from "../../Pictures/Domain/Picture";

class AlbumPrivate {
  private id: number;
  private title: string;
  private pictures: Picture[];
  #privateAttribute: boolean;

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
    this.#privateAttribute = false;
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }

  get Id() {
    return this.id;
  }

  set Id(id: number) {
    this.id = id;
  }

  get Title() {
    return this.title;
  }

  set Title(title: string) {
    this.title = title;
  }

  get Pictures() {
    return this.pictures;
  }

  set Pictures(pictures: Picture[]) {
    this.pictures = pictures;
  }
}

export { AlbumPrivate };
