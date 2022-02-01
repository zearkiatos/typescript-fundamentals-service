import { Picture } from "../../../../src/Pictures/Domain/Picture";

abstract class PictureHandler {
  static instanceOfPicture(object: any): object is Picture {
    return "title" in object && "date" in object && "orientation" in object;
  }
}

export { PictureHandler };
