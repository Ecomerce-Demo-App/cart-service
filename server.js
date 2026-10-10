const express = require("express");
const axios = require("axios");

const app = express();

app.get("/cart", async (req, res) => {

    const products =
        await axios.get(
            "http://localhost:5002/products"
        );

    res.json({
        cartId: 1,
        items: products.data
    });
});

app.listen(5004);
``
