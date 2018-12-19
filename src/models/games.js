import aws from 'aws-sdk';
import config from '../../aws.config';

aws.config.update(config);

const docClient = new aws.DynamoDB.DocumentClient();

// _links: {
//     self: `/games/${id}`,
//     categories: `/games/${id}/categories`
// }

export const get = async (id) => (
    docClient.get({
        TableName: 'Games',
        Key: { id }
    }).promise()
);  

export const getAll = async () => (
    docClient.scan({
        TableName: 'Games',
        Limit: 50,
    }).promise()
);

export const create = async ({ id, name }) => (
    docClient.put({
        TableName: 'Games',
        Item: {
            id,
            name,
            team1: {
                name: 'Red Team',
                score: 0
            },
            team2: {
                name: 'Green Team',
                score: 0
            }
        },
    }).promise()
);

export const update = async (Item) => (
    docClient.put({
        TableName: 'Games',
        Item
    }).promise()
);

export const remove = async (id) => (
    docClient.delete({
        TableName: 'Games',
        Key: {
            id
        },
    }).promise()
);
