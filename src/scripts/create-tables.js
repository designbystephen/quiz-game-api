import aws from 'aws-sdk';
import config from '../../aws.config';
import tables from '../tables';

aws.config.update(config);

const db = new aws.DynamoDB();

const callback = (err, data) => {
    if (err) {
        console.error("Unable to create table. Error JSON: ", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table.");
    }
};

tables.forEach(table => db.createTable(table(), callback));

db.listTables((err, data) => {
    if (err) {
        console.err('Unable to list tables. ', JSON.stringify(err, null, 2));
    } else {
        console.log('Tables created: ', data);
    }
});

