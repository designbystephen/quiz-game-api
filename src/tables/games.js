// {
//     "id": "12345",
//     "name": "Name of Game",
//     "team1": {
//         "name": "Red Team",
//         "score": 0
//     },
//     "team2": {
//         "name": "Green Team",
//         "score": 0
//     }
// }

export default () => ({
    TableName: "Games",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "id", KeyType: "RANGE" },
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