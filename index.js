import app from './src/app';

// create app
const webApp = app();

const { HOSTNAME, PORT } = process.env;

// listen for requests
webApp.listen(PORT, HOSTNAME, () => {
    console.log(`Now listening on http://${HOSTNAME}:${PORT}`);
});
