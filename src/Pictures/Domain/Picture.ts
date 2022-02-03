import PhotoOrientation from "../../PhotoOrientation";
import { Entity } from "../../Shared/Domain/Entity";

interface Picture extends Entity {
    orientation: PhotoOrientation;
}

export { Picture };