// {
//     "id": "12345",
//     "gameId": "12345",
//     "name": "Category Name",
// }

export default () => ({
    TableName: "Categories",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
    ],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" },
        { AttributeName: "gameId", AttributeType: "S" },
        { AttributeName: "name", AttributeType: "S" },
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 5, 
        WriteCapacityUnits: 5,
    }
});
