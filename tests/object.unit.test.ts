describe('Unit test suite for objects type', () => {
    test('Should create a object type variable', () => {
        let user: object = {};
        user = {
            id: 1,
            usermame: 'zearkiatos',
            firstName: 'Pedro',
            isPro: true
        };
        const expectResult: string = 'object';

        expect(user).toBeDefined();
        expect(typeof user).toBe(expectResult);
    });
});