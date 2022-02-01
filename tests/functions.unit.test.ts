import { createPicture, createPic, handleError } from "../src/functions";
import { LiteralFlickrSize } from "../src/LiteralFlickrSize";
describe("Unit test suite for functions", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should create a picture", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const expectResult: string = `Create picture using Photo, 2022-01-31, 150x150`;
    const size: LiteralFlickrSize = "150x150";

    createPicture("Photo", "2022-01-31", size);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][0]).toBe(expectResult);
  });

  test("Should create a picture without size ", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const expectResult: string = `Create picture using Photo, 2022-01-31, undefined`;

    createPicture("Photo", "2022-01-31");

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][0]).toBe(expectResult);
  });

  test("Should create a picture with flat function", () => {
    const expectResult: object = {
        title: 'Photo',
        date: '2022-01-31',
        size: '75x75'
    };
    const size: LiteralFlickrSize = "75x75";

    const picture = createPic("Photo", "2022-01-31", size);
    
    expect(picture).toEqual(expectResult);
  });

  test("Should return a throw error", () => {
    const expectResult: string = "error. Code error: 500";

    try {
      handleError(500, 'error')
    }
    catch(ex: any) {
      expect(ex.message).toBe(expectResult);
    }
    
  });

  test("Should return a generic message", () => {
    const expectResult: string = "An error has occurred";

    const message = handleError(200, 'OK');

    expect(message).toBe(expectResult);
  });
});
