const express = require('express');
const app = express()

app.get('/',(request,response)=> {
  response.sendFile(__dirname + '/index.html')
})

console.log(module)
const players ={
  'messi':{
    'name':'Lionel Messi',
    'age':'29',
    'role':'mid fielder'
  }
}
app.get('/api',(request,response) => {
  response.json(players)
})