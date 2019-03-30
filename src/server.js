let express = require('express');
let app = express();
//Data base
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.listen(3000, function () {
    console.log('Example app listening on port 3000 pf!');
});
