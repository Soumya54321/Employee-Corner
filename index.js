const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express();

const PORT=3000;
const api=require('./routes/api');

app.use(cors());
app.use(bodyParser.json());

app.use('/api',api);

app.get('/',(req, res) => res.send("hello world"));

app.listen(PORT,function(req,res){
    console.log('Server is running on port: '+PORT);
});

