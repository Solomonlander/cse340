function formatNumber(num) {
  return new Intl.NumberFormat("en-US").format(num)
}

function buildVehicleDetail(vehicle) {
  return `
    <div class="vehicle-detail">
      <img src="${vehicle.inv_image}" alt="${vehicle.inv_make}" />

      <div class="vehicle-info">
        <h2>${vehicle.inv_year} ${vehicle.inv_make} ${vehicle.inv_model}</h2>

        <p class="price">$${formatNumber(vehicle.inv_price)}</p>

        <p><strong>Mileage:</strong> ${formatNumber(vehicle.inv_miles)} miles</p>

        <p><strong>Color:</strong> ${vehicle.inv_color}</p>

        <p>${vehicle.inv_description}</p>
      </div>
    </div>
  `
}

module.exports = {
  buildVehicleDetail
}