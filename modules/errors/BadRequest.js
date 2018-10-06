const ErrorResponse = require('./ErrorResponse');

module.exports = class BadRequest extends ErrorResponse {
    constructor() {
        super({
            status: 400,
            message: 'Unable to complete request.',
            context: 'Either it was missing parameters, or contained a malformed request body',
        });
    }
};
