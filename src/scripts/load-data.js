import aws from 'aws-sdk';
import config from '../../aws.config';
import Games from '../data/Games';

aws.config.update(config);

const docClient = new aws.DynamoDB.DocumentClient();

const callback = (err, data) => {
    if (err) {
        console.error("Unable to load table data . Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Loaded table data. Data: "), JSON.stringify(data, null, 2);
    }
};

Games.forEach(game => {
    const params = {
        TableName: 'Games',
        Item: game,
    };

    docClient.put(params, callback);
});
