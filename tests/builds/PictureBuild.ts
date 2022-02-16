import PhotoOrientation from "../../src/PhotoOrientation";
import { Picture } from "../../src/Pictures/Domain/Picture";
class PictureBuild {
  picture: Picture;
  constructor() {
    this.picture = new Picture(1, "photo", PhotoOrientation.Landscape);
  }

  withId(id: number): PictureBuild {
    this.picture.id = id;
    return this;
  }

  withTitle(title: string): PictureBuild {
    this.picture.title = title;
    return this;
  }

  withOrientation(orientation: PhotoOrientation): PictureBuild {
    this.picture.orientation = orientation;
    return this;
  }

  build(): Picture {
    return this.picture;
  }
}

export { PictureBuild };
