import { UserHandler } from './utils/UserHandler';
describe("Unit test suite for User class", () => {
    test("Should evaluate if the user variable implement the User interface", () => {
      const user = {
          id: 1,
          username: 'Pedro',
          isPro: true
      };

      const isImplemented:boolean = UserHandler.instanceOfUser(user);

      expect(isImplemented).toBeTruthy();
    });
  });