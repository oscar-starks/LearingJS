fetch = require("node-fetch");

const url = "http://localhost:7000/"

async function fetch_endpoint(){
    try {
        result  = await fetch(url, {
            method: "GET",

        })
        response = await result.json()
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

fetch_endpoint()