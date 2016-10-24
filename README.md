# GraphQL.js Example

This aims to provide a working example using [GraphQL.js](https://github.com/graphql/graphql-js/).

Data model is as follow:

```
|-------| 1      n |---------|
| Class | -------- | Student |
|-------|          |---------|
```

There is one class with 3 students in it.


## Getting Started

This repo includes both a server and a client.

### Starting the server

```sh
cd server
npm install
npm start
```

This will start an Express server on port 4000, and expose two endpoints:
 - /graphql: where queries need to be sent
 - /graphiql: an online tool to explore and query the schema

### Starting the client

```sh
cd client
npm install
npm start
```

This will send a query to the server and display the result:

```
List of students
  query {
    students {
      id,
      name
    }
  }
----- Result:
{
  "data": {
    "students": [
      {
        "id": "1",
        "name": "Tom"
      },
      {
        "id": "2",
        "name": "Bill"
      },
      {
        "id": "3",
        "name": "Bob"
      }
    ]
  }
}
```
