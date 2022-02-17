const express = require('express')

const server = express()

server.all('/',(req,res)=>{
  res.send('Esta bien xd')
})

function keepAlive(){
  server.listen('3000', ()=>{
    console.log('xd')
  })
}

module.exports = keepAlive