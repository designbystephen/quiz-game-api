import require from '../utils/require';
import model from '../models/games';

export default (app) => {
    // get recordset
    app.get('/games', async (req, res, next) => {
        const allGames = await model.getAll();

        res.status(200).json(allGames);
    });

    // get record
    app.get('/games/:id', async (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        const game = await model.get(id);

        res.status(200).json(game);
    });

    // create new record
    app.post('/games', (req, res, next) => {
        const { name, description } = req.body;

        require(name, description);

        res.sendStatus(201);
    });

    // edit record
    app.patch('/games/:id', async (req, res, next) => {
        const { id } = req.params;
        const { ...body } = req.body;
        
        require(id);

        const game = await model.update(id, {...body});

        res.status(200).json(game);
    });

    // delete record
    app.delete('/games/:id', (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        res.status(204).json({});
    });
};
