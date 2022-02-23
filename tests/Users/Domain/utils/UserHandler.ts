import { IUser } from "../../../../src/Users/Domain/IUser";

abstract class UserHandler {
  static instanceOfUser(object: any): object is IUser {
    return "id" in object && "username" in object && "isPro" in object;
  }
}

export { UserHandler };
