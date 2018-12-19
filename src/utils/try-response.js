import { internalServerError } from './errors';

export default (callback, error = internalServerError) => {
    try {
        return callback();
    } catch (ex) {
        throw internalServerError;
    }
};
