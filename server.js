const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
const fs = require('fs');
let data = {name: 'akiva', hungry: false};
fs.writeFile('test.txt', JSON.stringify(data), {encoding:'utf8'}, function(err){
    if (err) throw err;
    console.log(data.hungry);
});

app.get('/file', function(req, res){
    fs.readFile('test.txt', 'utf8', function(err, data){
        if(err) throw err;
        if (data) res.send(data);
    })
})
app.listen(3000, function(){
    console.log('running');
})
