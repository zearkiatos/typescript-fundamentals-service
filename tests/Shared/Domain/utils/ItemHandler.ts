import { Item } from "../../../../src/Shared/Domain/Item";

abstract class ItemHandler {
  static instanceOfItem(object: any): object is Item {
    return "id" in object && "title" in object;
  }
}

export { ItemHandler };