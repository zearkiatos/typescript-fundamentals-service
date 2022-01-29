import Country from '../src/Country';
describe("Suite test for Country Enum ", () => {
    test("Should set value with enum name", () => {
      const countries: Country = Country.Spain;
      const expectResult: string = 'spa';
  
      expect(countries).toBe(expectResult);
    });
  });