export default async function getData() {
    let response = await fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',{
        method : "GET",
        mode: 'cors'
    })

    if (response.status === 200) return await response.json()

    return `Error from fetch: ${response.status}`

}