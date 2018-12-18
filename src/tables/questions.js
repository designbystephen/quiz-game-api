// {
//     "id": "12345",
//     "categoryId": "12345", 
//     "pos": 0, // 0-4
//     "question": "",
//     "answer": "",
// }

export default () => ({
    TableName: "Questions",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "pos", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" },
        { AttributeName: "pos", AttributeType: "N" },
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 5, 
        WriteCapacityUnits: 5,
    }
});
