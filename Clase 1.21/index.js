const axios = require('axios');

const ROOT_URL = "https://jsonplaceholder.typicode.com"

const getData = async urlRoute => {
    try{
        let res = await axios.get(`${ROOT_URL}/${urlRoute}`)
        console.log(res)
    } catch(e){
        console.log(e)
    }
}

// Make a request for a user with a given ID
// const dataPrep = axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })

getData('posts')
getData('Users')