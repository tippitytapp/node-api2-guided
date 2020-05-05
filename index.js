const express = require('express');
const colors = require('colors');
const Hubs = require('./hubs/hubs-model.js');
const hubsRouter = require('./hubs/hubs-router')
const server = express();
const PORT = 4000;

server.use(express.json());

server.get('/', (req, res) => {
res.json({
  query: req.query, 
  params: req.params, 
  headers: req.headers
})
});

server.use('/api/hubs', hubsRouter)

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`.bgYellow.red.bold);
});
