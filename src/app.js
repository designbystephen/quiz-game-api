import express from 'express';
import bodyParser from 'body-parser';
import controllers from './middlewares/controllers';
import notFound from './middlewares/not-found';
import errorHandler from './middlewares/error-handler';

export default () => {
    const app = express();

    app.use(bodyParser.json());

    controllers(app);
    notFound(app);
    errorHandler(app);

    return app;
};
