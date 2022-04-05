const express = require('express');

const app = express();

//serving the static html file using express
app.use(express.static(__dirname + '/public'))

app.listen(3000);