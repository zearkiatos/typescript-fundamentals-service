import { IPicture } from "../../../../src/Pictures/Domain/IPicture";

abstract class PictureHandler {
  static instanceOfPicture(object: any): object is IPicture {
    return "title" in object && "date" in object && "orientation" in object;
  }
}

export { PictureHandler };
