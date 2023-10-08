// // fetchData.js
// const AWS = require('aws-sdk');

// const s3 = new AWS.S3({
//   region: 'your-region',
//   accessKeyId: 'AKIA3US55X2BCR4YB34Y',
//   secretAccessKey: 'sfliowxs4J5RBNsDcVnmYBYX7uenzKy4fNZgOEKW'
// });

// async function fetchData() {
//   const params = {
//     Bucket: 'mynbabucket',
//     Key: 'players.json'
//   };

//   try {
//     const data = await s3.getObject(params).promise();
//     return JSON.parse(data.Body.toString());
//   } catch (error) {
//     console.error(error);
//   }
// }

// export default fetchData;
