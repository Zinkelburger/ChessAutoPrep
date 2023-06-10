const express = require('express');
const path = require('path');
//const https = require('https');
const http = require('http');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());

app.post('/save-data', (req, res) => {
  const { email, fens } = req.body;
  fs.appendFile('data.txt', `${email},${fens.join(',')}\n`, (err) => {
    if (err) throw err;
    res.send('Data saved!');
  });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Read the SSL/TLS certificate and private key from the file system
/*
const options = {
  key: fs.readFileSync('/etc/ssl/private/origin.key'),
  cert: fs.readFileSync('/etc/ssl/certs/origin.pem')
};

// Create an HTTPS server using the SSL/TLS certificate and private key
https.createServer(options, app).listen(3001);
*/
// make an http server for my local computer as I don't have the certs on this machine
http.createServer(app).listen(3001);
