const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const api = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

function dataApi(req,res,next) {
    console.log('middleware')

    if(!req.dataTable) {
        let test = new Promise( function(resolve,reject) {
            fs.readFile('data.json', 'utf-8', (err, data) => {
                if (err) {
                    reject(err)
                }else {
                    resolve(JSON.parse(data));
                }
            })
        })
        test.catch((err) => {
            console.log('No FILE: ',err)
            console.log('starting to fetch data...')
            fetch(api,{
                method: 'GET',
                headers: {mode:'cors'}
            })
            .then( res => res.text() )
            .then( result => {
                fs.writeFile('data.json', result, 'UTF-8', (err) => {
                    if(err) throw new Error(err)
                    console.log('The file is created')
                })
            })
            .catch(error => console.log('failed to fetch',error))
        })
        .then((result) => req.tableData = result )
        .then(()=> next())
    }            

}
module.exports = {dataApi}