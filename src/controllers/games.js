import { get, defaultsDeep } from 'lodash/object';
import require from '../utils/require';
import * as model from '../models/games';
import tryResponse from '../utils/try-response';
import { notFound } from '../utils/errors';

export default (app) => {
    // get recordset
    app.get('/games', async (req, res, next) => {
        tryResponse(async () => {
            const games = await model.getAll();
            const items = get(games, 'Items', []);

            res.status(200).json(items);
        });
    });

    // get record
    app.get('/games/:id', async (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        tryResponse(async () => {
            const game = await model.get(id);
            const item = get(game, 'Item', {});
            
            if (!item) {
                throw notFound;
            }

            res.status(200).json(item);
        });
    });

    // create new record
    app.post('/games', async (req, res, next) => {
        const { name } = req.body;

        require(name);

        tryResponse(async () => {
            const id = `${Date.now()}`;
            const game = await model.create({ id, name });
            res.status(201).json({ id, name});
        });
    });

    // edit record
    app.patch('/games/:id', async (req, res, next) => {
        const { id } = req.params;
        const { name, team1, team2 } = req.body;
        
        require(id);

        // get original values
        const original = await model.get(id);
        const originalItem = get(original, 'Item');

        if (!originalItem) {
            throw notFound;
        }

        // replace with new values where provided
        const updated = defaultsDeep(
            {
                id,
                name,
                team1,
                team2,
            },
            originalItem,
        );

        tryResponse(async () => {
            const game = await model.update(updated);
            res.status(200).json(game);
        });
    });

    // delete record
    app.delete('/games/:id', (req, res, next) => {
        const { id } = req.params;
        
        require(id);

        tryResponse(async () => {
            await model.remove(id);
            res.sendStatus(204);
        });
    });
};
