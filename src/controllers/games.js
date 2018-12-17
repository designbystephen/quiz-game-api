import require from '../utils/require';

export default (app) => {
    // get recordset
    app.get('/games', (req, res, next) => {
        res.status(200).json([]);
    });

    // get record
    app.get('/games/:id', (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        res.status(200).json({});
    });

    // create new record
    app.post('/games', (req, res, next) => {
        const { name, description } = req.body;

        require(name, description);

        res.sendStatus(201);
    });
};
