import { User } from "../../../../src/Users/Domain/User";

abstract class UserHandler {
  static instanceOfUser(object: any): object is User {
    return "id" in object && "username" in object && "isPro" in object;
  }
}

export { UserHandler };
