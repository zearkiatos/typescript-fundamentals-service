import PhotoOrientation from "../../PhotoOrientation";
import { Item } from "../../Shared/Domain/Item";
class PicturePrivate extends Item {
  public static photoOrientation = PhotoOrientation;
  private orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    this.orientation = orientation;
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
