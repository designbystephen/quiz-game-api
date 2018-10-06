module.exports = class ErrorResponse extends Error {
    constructor({
        status = 500, 
        message = 'Unable to process your request',
        context,
    }) {
        super();

        this._status = status;
        this._context = context;
        this._message = message;
    }

    get status() {
        return this._status;
    }

    get message() {
        return this._message;
    }

    get context() {
        return this._context;
    }

    toString() {
        return `[${status}]: ${message} - ${context}`;
    }

    toJson() {
        return {
            status: this.status,
            message: this.message,
            context: this.context,
        }
    }
};
