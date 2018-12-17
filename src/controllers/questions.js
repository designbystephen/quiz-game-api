import require from '../utils/require';

export default (app) => {

    // get recordset
    app.get('/games/:id/questions', (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        res.status(200).json([]);
    });

    // create new 
    app.post('/games/:id/questions', (req, res, next) => {
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


};
