describe("Unit test suite for asserts", () => {
    test("Should cast our any data type to string to access to the function strings", () => {
        let username: any;
        username = "zearkiatos";
        let expectResult: string = 'Welcome zearkiatos';

        let message: string = (<string>username).length > 5 ? `Welcome ${username}`: 'Username name is too short';

        expect(message).toBe(expectResult);
    });

    test("Should cast to string to get the username", () => {
        let usernameWithId: any = "zearkiatos 1";
        let expectResult: string = 'zearkiatos';

        let username: string[] = (<string>usernameWithId).split(" ");

        expect(username[0]).toBe(expectResult);
    });

    test("Should cast value with as to get the lenght of the string type", () => {
        let username: any;
        username = "zearkiatos";
        let expectResult: string = 'Welcome zearkiatos';

        let message: string = (username as string).length > 5 ? `Welcome ${username}`: 'Username name is too short';

        expect(message).toBe(expectResult);
    });
  });
  