import PhotoOrientation from "../../PhotoOrientation";
import { Picture } from "./Picture";

class Photo implements Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation;

    constructor(title: string, date: string, orientation: PhotoOrientation) {
        this.title = title;
        this.date = date;
        this.orientation = orientation;
    }
}

export { Photo }