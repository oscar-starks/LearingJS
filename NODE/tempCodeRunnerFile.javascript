fetch = require("node-fetch")

const url = "http://localhost:8000/dashboard/data/regular/"
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE1ODk0MTUsInVzZXJfaWQiOiI1MDRiMDlmZi1mZGZiLTQ2ZmEtOTRkYy0yZWRlYjFjMzU2M2IifQ.TVU_joTWUg6tVFai4Sw74YIfd8ymIS3umO8exMFg-VE"
const headers = {
    "Authorization": `Bearer ${token}`,
}
const payload = {
    network: "airtel",
    mobile_number:"09017741269",
    data_plan:"5GB"
}

async function fetch_endpoint(){
    result  = await fetch(url, {
        headers: headers,
        body: new URLSearchParams(payload)

    })
    console.log(result.json())
}

fetch_endpoint()