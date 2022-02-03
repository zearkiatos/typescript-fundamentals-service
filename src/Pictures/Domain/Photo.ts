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

    static generatePicture (config: Picture) {
        const picture = {
            title: 'Default',
            date: Date.now().toString(),
            orientation: PhotoOrientation.Landscape
        };

        if (config.title) {
            picture.title = config.title;
        }

        if(config.date) {
            picture.date = config.date;
        }

        if(config.orientation) {
            picture.orientation = config.orientation;
        }

        return picture;
    }
}

export { Photo }