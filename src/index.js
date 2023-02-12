const express = require('express');
const app = express();
const route = require('./routes/route');

//
app.use('/',route)

app.listen(3000,()=> console.log('server running on port 3000'));