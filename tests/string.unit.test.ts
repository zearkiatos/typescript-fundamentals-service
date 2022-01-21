describe('Suite test for string type', () => {
    test('Should create a boolean variable', () => {
        let username:string = 'zearkiatos';
        username = "Pedro";
        
        expect("Pedro").toBe(username);
    });

    test('Should create a function with backtick with a string sended', () => {
        let value = "Pedro";
        const templateString: Function = (str:string):string => `Hi ${str}`;
        const expectedResult:string = 'Hi Pedro';

        const result:string = templateString(value);

        expect(result).toBe(expectedResult);
    });
});