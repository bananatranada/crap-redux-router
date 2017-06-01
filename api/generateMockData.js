var fs = require('fs');
var jsf = require('json-schema-faker');

var mockDataSchema = require('./mockDataSchema');

const json = JSON.stringify(jsf(mockDataSchema), null, 2);
console.log(json);

fs.writeFile("./api/db.json", json, (err) => {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});
