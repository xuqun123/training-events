# Training Events List

A Node and React implementation for displaying training events with search
function.

In BE, it uses `express.js` to listen for requests, and also provides two
`GraphQL queries` (`events` and `event`) using `Apollo` to return events dump
data. In FE, it fetches `GraphQL queires` data as a `Apollo Client`, and renders
data in `/` and `/events/:title` pages, respectively.

## Node Version

```
^12.18.2
```

## Installation

### Backend Installation

Change to `/server` folder directory:

```
cd server
```

To install dependencies, run the following command:

```
yarn install
```

### Frontend Installation

Change to `/client` folder directory:

```
cd client
```

To install dependencies, run the following command:

```
yarn install
```

## Startup

Startup BE & FE apps in the respective folder, execute the command:

```
yarn start
```

Open browser and visit:

```
http://localhost:3001
```

## Run Tests

To run BE tests, run the following command in `/server` folder:

```
yarn test
```
