import PhotoOrientation from "../../PhotoOrientation";
class Picture {
  id: number;
  title: string;
  orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  toString() {
      return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

export { Picture };
