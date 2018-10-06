const ErrorResponse = require('./ErrorResponse');

module.exports = class BadRequest extends ErrorResponse {
    constructor() {
        super({
            status: 404,
            message: 'Resource not found',
        });
    }
};
