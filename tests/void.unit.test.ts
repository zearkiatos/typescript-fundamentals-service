import { showInfo, showFormattedInfo, handleError } from "../src/void";
describe("Suite test for void objects", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("Should execution function without return", () => {
    const expectResult: string = "User Info 1, zearkiatos, Pedro";
    const consoleSpy = jest.spyOn(console, "log");
    const user: any = {
      id: 1,
      username: "zearkiatos",
      firstName: "Pedro"
    };

    showInfo(user);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][0]).toBe(expectResult);
  });

  test("Should execution function without return and with some formatter", () => {
    const expectResult: string = `
    id: 2
    username: zearkiatos
    firstName: Pedro`;
    const consoleSpy = jest.spyOn(console, "log");
    const user: any = {
      id: 2,
      username: "zearkiatos",
      firstName: "Pedro"
    };

    showFormattedInfo(user);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][1]).toBe(expectResult);
  });

  test("Should use Never with a manage an error function", () => {
    const code: number = 404;
    const message: string = "Not Found";
    const expectResult: string = "Not Found. Code: 404";

    try {
      expect(handleError(code, message)).toThrow();
    } catch (ex: any) {
      expect(ex.message).toBe(expectResult);
    }
  });

  test("Should use Never with a manage an error function", () => {
    const code: number = 404;
    const message: string = "Not Found";
    const expectResult: string = "Not Found. Code: 404";

    try {
      expect(handleError(code, message)).toThrow();
    } catch (ex: any) {
      expect(ex.message).toBe(expectResult);
    }
  });
});
