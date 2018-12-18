import aws from 'aws-sdk';
import fs from 'fs';
import Games from '../data/Games';
import Categories from '../data/Categories';
import Questions from '../data/Questions';

aws.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    endpoint: process.env.AWS_DYNAMODB_ENDPOINT,
});

const docClient = new aws.DynamoDB.DocumentClient();

const callback = (err, data) => {
    if (err) {
        console.error("Unable to load table data . Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Loaded table data. Data description JSON:", JSON.stringify(data, null, 2));
    }
};

Games.forEach(game => {
    const params = {
        TableName: 'Games',
        Item: game
    };

    docClient.put(params, callback);
});

Categories.forEach(cat => {
    const params = {
        TableName: 'Categories',
        Item: cat
    };

    docClient.put(params, callback);
});

Questions.forEach(question => {
    const params = {
        TableName: 'Questions',
        Item: question
    };

    docClient.put(params, callback);
});
