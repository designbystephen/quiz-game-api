const ErrorResponse = require('./ErrorResponse');

const errorResponse = new ErrorResponse({});

test('It constructs', () => {
    expect(errorResponse).toBeDefined();
});

test('Has expected default prop values', () => {
    expect(errorResponse.status).toEqual(500);
    expect(errorResponse.message).toEqual('Unable to process your request');
    expect(errorResponse.context).toBeUndefined();
});

test('Produces JSON', () => {
    expect(errorResponse.toJson()).toMatchObject({
        status: 500,
        message: 'Unable to process your request'
    });

    const options = {
        status: 301,
        message: 'hello',
        context: 'yello'
    };

    const errorResponse2 = new ErrorResponse(options);
    expect(errorResponse2.toJson()).toMatchObject(options);
});



