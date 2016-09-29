// require dependencies

require('es6-promise').polyfill();
require('isomorphic-fetch');


//function to reverse string
function reverse_string(string){
  return string.split('').reverse().join('')
}

//Connect to first end_point
 fetch('http://challenge.code2040.org/api/reverse',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: '3af275cbf4eb4d719c98a391f7f50854',
      })
    }).then(function(response){
      return response.text() //return endpoint string
}).then(function(response_text){

//Connect to second end_point and validate
  fetch('http://challenge.code2040.org/api/reverse/validate',{
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         token: '3af275cbf4eb4d719c98a391f7f50854',
         string: reverse_string(response_text),
       })
}).then(function(response){
  console.log(response)
  })
})
