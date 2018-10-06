const Controller = require('./Controller');
const { NotAllowed } = require('../../modules/errors');
const getErrorResponse = require('../../modules/errors/getErrorResponse');

module.exports = (app, {
    name,
    getAll,
    getById,
    post,
    push,
    patch,
    deleteById,
}) => {
    const controller = new Controller({ name });

    app.use(`/${controller.path}`, (req, res, next) => {
        if (!controller.isMethodAllowed(req.method)) {
            const err = new NotAllowed();
            res.status(err.status).json(err.toJson());
        } else {
            next();
        }
    });

    app.get(`/${controller.path}`, (req, res) => {
        if (getAll) {
            try {
                const records = getAll();
                res.status(200).json(records);
            } catch(e) {
                const error = getErrorResponse(e);
                res.status(error.status).json(error.toJson());
            }
        }
    });
};
