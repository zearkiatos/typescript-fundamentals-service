import PhotoOrientation from "../../PhotoOrientation";
import { Entity } from "../../Shared/Domain/Entity";

interface IPicture extends Entity {
    date:string;
    orientation: PhotoOrientation;
}

export { IPicture };