import { notFound } from '../utils/errors';

export default (app) => {
    app.all('*', (req, res) => {
        notFound.send(res);
    });
};
