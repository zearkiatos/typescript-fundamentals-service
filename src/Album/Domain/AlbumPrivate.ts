import { Picture } from "../../Pictures/Domain/Picture";

class AlbumPrivate {
  private id: number;
  private title: string;
  private pictures: Picture[];
  #privateAttribute:boolean;

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
    this.#privateAttribute = false;
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }

}

export { AlbumPrivate };
