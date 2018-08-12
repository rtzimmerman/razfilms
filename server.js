var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(__dirname+'/dist/my-app'));

//Path Location Strategy
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname+'/dist/my-app/index.html'));
  });
app.listen(process.env.PORT || 5001);

console.log('Server running on port: ', process.env.PORT);


