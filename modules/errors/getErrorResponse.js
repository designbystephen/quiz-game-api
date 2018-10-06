const { ErrorResponse } = require('../../modules/errors');

module.exports = error => (
    error instanceof ErrorResponse
        ? error
        : new ErrorResponse({ context: error.toString() })
);