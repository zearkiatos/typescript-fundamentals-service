import PhotoOrientation from "../../PhotoOrientation";
import { Entity } from "../../Shared/Domain/Entity";

interface Picture extends Entity {
    date:string;
    orientation: PhotoOrientation;
}

export { Picture };