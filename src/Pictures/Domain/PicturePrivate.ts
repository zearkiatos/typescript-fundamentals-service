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

  get Orientation() {
    return this.orientation;
  }

  set Orientation(orientation: PhotoOrientation) {
    this.orientation = orientation;
  }

  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

export { PicturePrivate };
