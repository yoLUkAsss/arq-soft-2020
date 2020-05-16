const express         = require("express")
const bodyParser      = require("body-parser")
const mongoose        = require('mongoose')
const cors            = require('cors')
const dbUrl           = 'mongodb://localhost:27017/INSUMOS'

const app             = express();

app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// MODELS
var employeeModel     = require('./app/models/employee')

// ROUTES
var router            = express.Router();
var employeeRoutes    = require('./app/routes/employeeRoutes')

router.get('/', function(req, res) {
  res.send("Hello World!")
})

app.use(router)
app.use('/users', employeeRoutes)



mongoose.connect(dbUrl, { useNewUrlParser: true }, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    app.listen(8080, function() {
      console.log("Node server running on http://localhost:8080");
    });
  }
});

