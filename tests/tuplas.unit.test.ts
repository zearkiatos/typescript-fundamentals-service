describe("Suite test for tuplas", () => {
    test("Should declarate a tupla for user", () => {
      let user:[number, string];
      user = [1, 'Pedro'];
      const expectString: string = "Pedro";
      const expectNumber:number = 1;
  
      expect(user[0]).toBe(expectNumber);
      expect(user[1]).toBe(expectString);
      expect(typeof user[0]).toBe('number');
      expect(typeof user[1]).toBe('string');
    });

    test("Should declarate a tupla with varios values", () => {
        let userInfo:[number, string, boolean];
        userInfo = [1, 'Pedro', true];
        const expectString: string = "Pedro";
        const expectNumber:number = 1;
    
        expect(userInfo[0]).toBe(expectNumber);
        expect(userInfo[1]).toBe(expectString);
        expect(userInfo[2]).toBeTruthy();
        expect(typeof userInfo[0]).toBe('number');
        expect(typeof userInfo[1]).toBe('string');
        expect(typeof userInfo[2]).toBe('boolean');
      });

      test("Should declarate a tuplas array", () => {
        let userTuplas:[number, string][] = [];
        userTuplas.push([1, 'Pedro']);
        userTuplas.push([2, 'Jose']);
        userTuplas.push([3, 'Luis']);
        const expectResult = [
            [1, 'Pedro'],
            [2, 'Jose'],
            [3, 'Luis']
        ];
    
        expect(userTuplas).toEqual(expectResult);
      });

      test("Should make a change into a value in the tupla", () => {
        let userTuplas:[number, string][] = [];
        userTuplas.push([1, 'Pedro']);
        userTuplas.push([2, 'Jose']);
        userTuplas.push([3, 'Luis']);
        const expectResult = [
            [1, 'Pedro'],
            [2, 'Jose'],
            [3, 'Luis Perez']
        ];

        userTuplas[2][1] = userTuplas[2][1].concat(' Perez')
        
    
        expect(userTuplas).toEqual(expectResult);
      });
  
  });
  