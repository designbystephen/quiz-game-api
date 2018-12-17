import require from '../utils/require';

export default (app) => {

    // get recordset
    app.get('/games/:gameId/categories/:catId/questions', (req, res, next) => {
        const { gameId, catId } = req.params;
        
        require(gameId, catId);

        res.status(200).json([ {question} ]);
    });

    // create new 
    app.post('/games/:gameId/categories/:catId/questions', (req, res, next) => {
        const { title, answer } = req.body;

        require(title, answer);

        res.sendStatus(201);
    });

    // get record
    app.get('/questions/:id', (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        res.status(200).json({});
    });

    // edit record
    app.patch('/questions/:id', (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        res.status(200).json({});
    });

    // delete record
    app.delete('/questions/:id', (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        res.status(204).json({});
    });
};
