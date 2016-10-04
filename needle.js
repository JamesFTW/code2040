
require('es6-promise').polyfill();
require('isomorphic-fetch');



function Needle(string){
  return JSON.parse(string).needle
}
function Haystack(string){
  return JSON.parse(string).haystack
}

fetch('http://challenge.code2040.org/api/haystack', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    token: '3af275cbf4eb4d719c98a391f7f50854'
  })
}).then(function(response) {
  return response.text();
}).then(function(response){
  var needle = Needle(response)
  var haystack = Haystack(response)
  for(var i = 0; i < haystack.length; i++){
    if(haystack[i] == needle){
      return i;
    }
  }
}).then(function(response){
  fetch('http://challenge.code2040.org/api/haystack/validate',{
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         token: '3af275cbf4eb4d719c98a391f7f50854',
         needle: response,
       })
    })
})
