const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs')

const app = express()
app.use('/', (req, res, next) => {
  res.send('Hello from SSL server')
})

const sslServer = https.createServer(
  {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')), // need to use sync because is vital to the application 
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
  }, app
)

sslServer.listen(3443, () => console.log('Secure server on port 344'))

console.log('SSL/TLS server using self generated certificate');