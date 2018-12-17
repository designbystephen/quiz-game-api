export default class Response {
    constructor({ status=200, body }) {
        this._status = status;
        this._body = body;
    }

    get status() { return this._status }
    get body() { return this._body }

    toJson() {
        return this.body;
    }

    send(res) {
        res.status(this.status).json(
            this.toJson()
        );
    }
};
