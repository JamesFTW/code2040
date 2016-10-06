require('es6-promise').polyfill();
require('isomorphic-fetch');


function Prefix(string){
  return JSON.parse(string).prefix
}
function Array3(string){
  return JSON.parse(string).array
}

fetch('http://challenge.code2040.org/api/prefix', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    token: '3af275cbf4eb4d719c98a391f7f50854'
  })
}).then(function(response) {
  return response.text()
}).then(function(response){

  var array  = Array3(response)
  var prefix = Prefix(response)
  var result = []

  for(var i = 0; i < array.length; i++){
      if(!(array[i].includes(prefix))){
        result.push(array[i])
      }
    }
  return result
})
.then(function(response){
  fetch('http://challenge.code2040.org/api/prefix/validate', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: '3af275cbf4eb4d719c98a391f7f50854',
      array: response
    })
  })
}).then(function(response){
  console.log(response)
})
