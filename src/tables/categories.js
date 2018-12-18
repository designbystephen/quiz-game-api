// {
//     "id": "12345",
//     "gameId": "12345",
//     "name": "Category Name",
// }

export default () => ({
    TableName: "Categories",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "name", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" },
        { AttributeName: "name", AttributeType: "S" },
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 5, 
        WriteCapacityUnits: 5,
    }
});
