describe('Suite test for boolean type', () => {
    test('Should create a boolean variable', () => {
        let isPro:boolean;
        isPro = true;
        const expectResult = 'boolean';

        const whatTypeOf: string = typeof isPro;
        
        expect(whatTypeOf).toBe(expectResult);
    });

    test('Should generate and exception is the assigned value is not a boolean', () => {
        let isPro = true;
        try {
            const aString:any = 'false'
            isPro = aString;
        }
        catch(ex) {
            expect(ex).toThrow();
        }
    });
});