const request = require('request');

const graphServerUrl = 'http://localhost:4000/graphql';

const query =
`  query {
    students {
      id,
      name
    }
  }`;

console.log('List of students');
console.log(query);
console.log('----- Result:');

// --- GET

request.get(`http://localhost:4000/graphql?query=${query}`, (err, data) => {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(JSON.parse(data.body), undefined, 2));
});

// --- POST as application/json

// const dataJson = {
//   form: {
//     query: query
//   }
// };

// request.post(graphServerUrl, dataJson, (err, data) => {
//   console.log(err);
//   console.log(JSON.stringify(JSON.parse(data.body), undefined, 2));
// });

// --- POST as application/graphql

// var options = {
//   url: graphServerUrl,
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/graphql'
//   },
//   body: query
// };
//
// request(options, (err, data) => {
//   if (err)
//     console.log(err);
//   else
//     console.log(JSON.stringify(JSON.parse(data.body), undefined, 2));
// });
