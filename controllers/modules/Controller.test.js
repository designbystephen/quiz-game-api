const Controller = require('./Controller');

let controller;

beforeEach(() => {
    controller = new Controller({ name: 'comments' })
});

test('It constructs', () => {
    expect(controller).toBeDefined();
});

test('Require name parameter', () => {
    expect(() => new Controller({})).toThrow();
});

test('Has name and path', () => {
    expect(controller.name).toEqual('comments');
    expect(controller.path).toEqual('comments');
})

test('Path evaluation', () => {
    const controller2 = new Controller({ name: 'map markers XL' });
    expect(controller2.path).toEqual('map-markers-xl');
})

test('Determine allowed methods', () => {
    expect(controller.isMethodAllowed('get')).toBeTruthy();
    expect(controller.isMethodAllowed('GET')).toBeTruthy();
    expect(controller.isMethodAllowed('ping')).toBeFalsy();
    expect(controller.isMethodAllowed()).toBeFalsy();
});
