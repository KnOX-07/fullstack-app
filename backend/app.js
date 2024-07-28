const express = require("express");
const path = require("path");
const db = require("./db");
const routes = require("./routes");

const app = express();
app.use(express.json());

app.use("/api", routes);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}...`);
});