describe('Suite test for number type', () => {
    test('Should create a number variable', () => {
        let phone:number;
        phone = 1;
        phone = 54234567;
        
        expect(phone).toBe(54234567);
    });

    test('Should generate a error exeption if we try to assign a string to a number variable', () => {
        let phone:number;
        try {
            const aString:any = 'Hola'
            phone = aString;
        }
        catch(ex) {
            expect(ex).toThrow();
        }
    });

    test('Should assign a determinate the type number', () => {
        let phoneNumber = 54234567;
        let expectedResult = 'number';

        const theTypeIs:string = typeof phoneNumber;

        expect(theTypeIs).toBe(expectedResult);
    });

    test('Should generate an error if the determinate value will be changed', () => {
        let phoneNumber = 54234567;

        try {
            const aString:any = 'Hola'
            phoneNumber = aString;
        }
        catch(ex) {
            expect(ex).toThrow();
        }
    });

    test('Should create a hexadecimal, binary and octal values', () => {
        const hex:number = 0xf00d;
        const binary:number = 0b1010;
        const octal:number = 0o744;
        const expectedResult:string = 'number';

        const isHexNumber:string = typeof hex;
        const isBinaryNumber:string = typeof binary;
        const isOctalNumber:string = typeof octal;

        expect(isHexNumber).toBe(expectedResult);
        expect(isBinaryNumber).toBe(expectedResult);
        expect(isOctalNumber).toBe(expectedResult);
    });
});