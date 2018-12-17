import express from 'express';
import bodyParser from 'body-parser';
import controllers from './middlewares/controllers';
import notFound from './middlewares/notFound';
import errorHandler from './middlewares/errorHandler';

export default () => {
    const app = express();

    app.use(bodyParser.json());

    controllers(app);
    notFound(app);
    errorHandler(app);

    return app;
};
