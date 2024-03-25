const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const url = require('url')
const figlet = require('figlet')
const PORT = 8000
const server = http.createserver( (request,response) => {
  fs.readFile('index.html',(err,data) => {
    response.writeHead(200,{'content-Type': 'text/html'})
    response.write(data)
    response.end()
  })
})

server.listen(PORT)