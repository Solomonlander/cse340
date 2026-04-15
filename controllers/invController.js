const invModel = require("../models/inventory-model")
const utilities = require("../utilities")

// Vehicle detail page
async function buildVehicleDetail(req, res, next) {
    try {
        const inv_id = req.params.inv_id

        const vehicle = await invModel.getVehicleById(inv_id)
        const nav = await invModel.getNav()

        if (!vehicle) {
            throw new Error("Vehicle not found")
        }

        const vehicleHtml = utilities.buildVehicleDetail(vehicle)

        res.render("inventory/detail", {
            title: `${vehicle.inv_make} ${vehicle.inv_model}`,
            nav,
            vehicleHtml
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    buildVehicleDetail
}