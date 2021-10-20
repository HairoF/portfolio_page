const express = require('express');

const app  = express();
const host = '127.0.0.1';
const port = 3000;

const {dataApi} = require('./services/dataApi');
const {paginatedResults, updatePage} = require('./services/paginatedResults');

app.use('/', dataApi)



app.get('/', paginatedResults, function(req,res) {
    res.set('Access-Control-Allow-Origin', '*')
    console.log('get: "/"')
    if(req.tableData) {
        const data = JSON.stringify({data:req.limitedData, pages:req.pages})
        res.send(data);
    } else {
        res.status(404).send('NO File')
    }
    // fetch(api,{
    //     method: 'GET',
    //     headers: {mode:'cors'}
    // })
    // .then(response => response.json())
    // .then( json => res.send(json))
})

app.get('/:page', updatePage, function(req,res) {
    res.set('Access-Control-Allow-Origin', '*')
    console.log('path: /:id', '\n', req.params)
    res.send(JSON.stringify(req.limitedData) )
})


app.listen(port, host, function() {
console.log(`Server listens http://${host}:${port}`)
}).on('error', function (error) {
    console.log(error, 'something goes wrong')
});