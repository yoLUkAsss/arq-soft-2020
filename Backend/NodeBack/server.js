const express         = require("express")
const bodyParser      = require("body-parser")
const mongoose        = require('mongoose')
const cors            = require('cors')
const dbUrl           = 'mongodb://localhost:27017/INSUMOS'

const app             = express();

var corsOptions = {
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
  preflightContinue: true
}
app.use(cors(corsOptions));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// MODELS
var employeeModel     = require('./app/models/employee')

// ROUTES
var router            = express.Router();
var employeeRoutes    = require('./app/routes/employeeRoutes')

router.get('/ping', function(req, res) {
  res.status(200).send("Pong")
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

