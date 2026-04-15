const express = require("express")
const router = express.Router()

const invController = require("../controllers/invController")

// Vehicle detail route
router.get("/detail/:inv_id", invController.buildVehicleDetail)

module.exports = router