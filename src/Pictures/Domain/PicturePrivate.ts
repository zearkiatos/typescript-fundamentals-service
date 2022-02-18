import PhotoOrientation from "../../PhotoOrientation";
class PicturePrivate {
  private id: number;
  private title: string;
  private orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  public toString() {
      return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

export { PicturePrivate };
