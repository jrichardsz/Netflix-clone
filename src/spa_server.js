const express = require('express');
const path = require('path');const app = express();
const port = 8080 || process.env.PORT ;// where ever the built package is
const buildFolder = '../build';// load the value in the server

var settings = {};
for(var key in process.env){
  if(key.startsWith("REACT_APP")){
    settings[key.replace("REACT_APP_","")] = process.env[key]
  }
}

app.get('/settings', function(req, res) {
  res.json(settings);
});
app.use('/',
  express.static(path.join(__dirname, `${buildFolder}`)),
);
app.listen(port, () => console.log(`spa server listening on port ${port}!`));
