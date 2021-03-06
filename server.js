const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 8080);
app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log('listening');
