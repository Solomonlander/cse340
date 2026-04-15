require("dotenv").config()

const pool = require("./database")

const express = require("express")
const path = require("path")
const expressLayouts = require("express-ejs-layouts")

const app = express()

// Test DB
app.get("/test", async (req, res) => {
    const result = await pool.query("SELECT NOW()")
    res.json(result.rows)
})

// View engine
app.set("view engine", "ejs")
app.set("layout", "./layouts/layout")

// Middleware
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, "public")))

// Routes
const invRoute = require("./routes/inventoryRoute")
app.use("/inv", invRoute)

// Home route
app.get("/", (req, res) => {
    res.render("index", { title: "Home" })
})

// Footer error trigger route (rubric requirement)
app.get("/error", (req, res, next) => {
    next(new Error("Intentional error"))
})

// 404 handler
app.use((req, res, next) => {
    res.status(404).render("errors/error", {
        title: "Page Not Found",
        message: "404 - Page not found"
    })
})

// Error handler middleware (must be last)
app.use((err, req, res, next) => {
    res.status(500).render("errors/error", {
        title: "Server Error",
        message: err.message
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})