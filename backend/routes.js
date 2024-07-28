const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/data", (req, res) => {
    db.query("SELECT * FROM todos", (err, response) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(response);
        }
    });
});

module.exports = router;