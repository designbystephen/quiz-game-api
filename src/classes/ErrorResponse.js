import Response from './Response';

export default class ErrorResponse extends Response {
    constructor({ status=500,  displayText, details }) {
        const body = {
            displayText,
            details
        };

        super({ status, body});
    }
}
