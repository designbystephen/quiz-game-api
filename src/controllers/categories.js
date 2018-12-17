import require from '../utils/require';

export default (app) => {

    // get recordset
    app.get('/games/:gameId/categories', (req, res, next) => {
        const { gameId } = req.params;
        
        require(gameId);

        res.status(200).json([ {question} ]);
    });

    // create new 
    app.post('/games/:gameId/categories', (req, res, next) => {
        const { title, answer } = req.body;

        require(title, answer);

        res.sendStatus(201);
    });

    // get record
    app.get('/categories/:id', (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        res.status(200).json({});
    });

    // edit record
    app.patch('/categories/:id', (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        res.status(200).json({});
    });

    // delete record
    app.patch('/categories/:id', (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        res.status(204).json({});
    });
};
