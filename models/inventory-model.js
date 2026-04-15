// Sample fake database
const inventory = [
    {
        inv_id: 1,
        inv_make: "Toyota",
        inv_model: "Camry",
        inv_year: 2022,
        inv_price: 25000,
        inv_miles: 15000,
        inv_color: "Black",
        inv_image: "/images/camry.jpg",
        inv_description: "A reliable sedan"
    },
    {
        inv_id: 2,
        inv_make: "Honda",
        inv_model: "Civic",
        inv_year: 2021,
        inv_price: 22000,
        inv_miles: 12000,
        inv_color: "White",
        inv_image: "/images/civic.jpg",
        inv_description: "Fuel efficient and compact"
    }
]

// Navigation
async function getNav() {
    return `
    <nav>
      <a href="/">Home</a>
      <a href="/inv/detail/1">Toyota</a>
      <a href="/inv/detail/2">Honda</a>
    </nav>
  `
}

// Get vehicle by ID
async function getVehicleById(inv_id) {
    return inventory.find(item => item.inv_id == inv_id)
}

module.exports = {
    getNav,
    getVehicleById
}