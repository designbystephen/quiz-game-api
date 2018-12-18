import express from 'express';
import dotenv from 'dotenv';
import app from './src/app';

// load dotenv
dotenv.config();

// create app
const webApp = app();

const { HOSTNAME, PORT } = process.env;

// listen for requests
webApp.listen(PORT, HOSTNAME, () => {
    console.log(`Now listening on ${HOSTNAME}:${PORT}`);
});
