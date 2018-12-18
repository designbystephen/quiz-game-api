import aws from 'aws-sdk';
import dotenv from 'dotenv';
import tables from '../tables';

export default () => {
    // load dotenv
    dotenv.config();

    aws.config.update({
        region: process.env.AWS_REGION,
        endpoint: process.env.AWS_DYNAMODB_ENDPOINT
    });

    const db = new aws.DynamoDB();

    const callback = (err, data) => {
        if (err) {
            console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
        }
    };

    tables.forEach(table => db.createTable(table(), callback));
};
