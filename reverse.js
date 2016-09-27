// require dependencies

require('es6-promise').polyfill();
require('isomorphic-fetch');


//HTTP POST
fetch('http://challenge.code2040.org/api/reverse', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    token: '3af275cbf4eb4d719c98a391f7f50854',
    github: 'https://github.com/JamesFTW/code2040',
  })
})

//reverse a string

  function reverse_string (string){
    return string.split("").reverse().join("")
  }
