import { createPicture, createPic } from "../src/functions";
import { LiteralFlickrSize } from "../src/LiteralFlickrSize";
describe("Unit test suite for functions", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should create a picture", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const expectResult: string = `Create picture using Foto, 2022-01-31, 150x150`;
    const size: LiteralFlickrSize = "150x150";

    createPicture("Foto", "2022-01-31", size);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][0]).toBe(expectResult);
  });

  test("Should create a picture without size ", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const expectResult: string = `Create picture using Foto, 2022-01-31, undefined`;

    createPicture("Foto", "2022-01-31");

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][0]).toBe(expectResult);
  });

  test("Should create a picture with flat function", () => {
    const expectResult: object = {
        title: 'Foto',
        date: '2022-01-31',
        size: '75x75'
    };
    const size: LiteralFlickrSize = "75x75";

    const picture = createPic("Foto", "2022-01-31", size);
    
    expect(picture).toEqual(expectResult);
  });
});
