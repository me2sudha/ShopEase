const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to ShopEase from Meerah!");
});

module.exports = app;