const express = require('express');

const server = express();
console.log(server)

server.listen(4000, () => {
    console.log('server listening')
})

server.get('/', (req, res)=>{
    res.status(200).json({
        message: "Welcome to the server"
    })
})