

require('es6-promise').polyfill();
require('isomorphic-fetch');

var moment = require('moment');


function stamp(response){
  return JSON.parse(response).datestamp
}
function seconds(response){
  return JSON.parse(response).interval
}

fetch('http://challenge.code2040.org/api/dating', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    token: '3af275cbf4eb4d719c98a391f7f50854',
  })
}).then(function(response){
  return response.text()
}).then(function(response){
  var date    = stamp(response)
  var second  = seconds(response)
  var newDate = moment(date).add(second, 's').utc().format()
  console.log("These are the seconds: ", second)
  console.log("This is the date: ", date)
  console.log("This is the new date: ", newDate)


  return newDate
})
.then(function(response){
  fetch('http://challenge.code2040.org/api/dating/validate',{
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         token: '3af275cbf4eb4d719c98a391f7f50854',
         datestamp: response,
       })
    })
})
