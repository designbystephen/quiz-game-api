import { invalidRequest } from './errors';

export default (...params) => {
    const invalid = params.some(param => (!param));

    if (invalid) throw invalidRequest;
};
