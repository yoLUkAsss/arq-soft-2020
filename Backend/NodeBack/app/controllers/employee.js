var mongoose = require('mongoose');

var Employee = mongoose.model('Employee');

//GET - Return all employees in the DB
exports.getAll = function(req, res) {
    console.log('GET /users')
    Employee.find(function(err, employees) {
        if(err) res.status(500).send(err.message);
        
        res.status(200).jsonp(employees);
    });
};

exports.getById = function(req, res) {
    console.log('GET /users/' + req.params.id)
    Employee.findById(req.params.id, function(err, employee) {
        if(err) res.status(500).send(err.message);
        
        res.status(200).jsonp(employee);
    });
};


exports.create = function(req, res) {
    console.log('POST /users')

    var newEmployee = new Employee({
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname,
        phone: req.body.phone,
        entity: req.body.entity,
        position: req.body.position,
        location: req.body.location
    })

    newEmployee.save(function(err, newEmployee) {
        if(err) res.status(500).send(err.message);
        
        res.status(200).jsonp(newEmployee);
    });
};

exports.update = function(req, res) {
    console.log('POST /users')

    Employee.findById(req.params.id, function(err, employee) {
        if(err) res.status(500).send(err.message);

        employee.username = req.body.username,
        employee.password = req.body.password,
        employee.fullname = req.body.fullname,
        employee.phone = req.body.phone,
        employee.entity = req.body.entity,
        employee.position = req.body.position,
        employee.location = req.body.location

        employee.save(function(err) {
            if(err) res.status(500).send(err.message);

            res.status(200).jsonp(employee);
        })

    })
};

exports.delete = function(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
        employee.remove(function(err) {
            if(err) res.status(500).send(err.message);
            
            res.status(204).send();
        })
    });
};

