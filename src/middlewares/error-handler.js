import ErrorResponse from '../classes/ErrorResponse';
import { internalServerError } from '../utils/errors';

export default (app) => {
    app.use(function (err, req, res, next) {
        if (err instanceof ErrorResponse) {
            err.send(res);
        } else {
            internalServerError.send(res);
        }

        console.error(JSON.stringify(err, null, 2));
    });
};
