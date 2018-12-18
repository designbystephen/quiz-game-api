import data from '../data';

test('can parse json files', () => {
    data.forEach(d => {
        expect(
           () => JSON.parse(JSON.stringify(d))
        ).not.toThrow();
    });
});
