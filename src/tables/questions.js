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
    ],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" },
        { AttributeName: "categoryId", AttributeType: "S" },
        { AttributeName: "pos", AttributeType: "N" },
        { AttributeName: "question", AttributeType: "S" },
        { AttributeName: "answer", AttributeType: "S" },
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 5, 
        WriteCapacityUnits: 5,
    }
});
