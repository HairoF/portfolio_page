const HOST = '127.0.0.1', PORT=3000;
// export default async function getData() {
//     return await fetch(`http://${HOST}:${PORT}`,{
//         method : "GET",
//     })
//     .then(response => respone.status === 200 ? response.text(): 'Some error from fetch getData. status: '+response.status)

// }
export default async function getData() {
    // window.location.href = '/'
    console.log(`fetch to: http://${HOST}:${PORT}/`, 'from: '+window.location.origin)

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

}