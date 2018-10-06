const ErrorResponse = require('./ErrorResponse');

module.exports = class BadRequest extends ErrorResponse {
    constructor() {
        super({
            status: 405,
            message: 'Request method not allowed',
        });
    }
};
