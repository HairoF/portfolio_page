const HOST = '127.0.0.1', PORT=3000;

async function getData() {
    return await fetch(`http://${HOST}:${PORT}`,{
        method : "GET"
    })
    .then( (res)=>{
        if(res.status === 200) {
            console.log('status: ', res.status, res.statusText, 'response is: ',res)
            return res.json()
        }else{
            console.log('error', res)
        }
        
    })
    .catch(err => console.log('Err from fetch:', err))

}
async function getDatasPage(arrow = null,page = 1) {

    return await fetch(`http://${HOST}:${PORT}/${arrow}/${page}`,{
        method : "GET"
    })
    .then( fivePages => {
        if (fivePages.status === 200) {
            return fivePages.json()
        }
    }).catch(err => {
        console.log('error', err.message)
    })
}

export {getData, getDatasPage}