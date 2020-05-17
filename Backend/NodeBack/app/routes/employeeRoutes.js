const express           = require("express")
var router              = express.Router();
var employeeController  = require('../controllers/employee')


router.get('/', employeeController.getAll)
router.post('/', employeeController.create)
router.get('/:id', employeeController.getById)
router.put('/:id', employeeController.update)
router.delete('/:id', employeeController.delete)

module.exports = router
