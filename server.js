//sk_test_51MmbWkDnHuaRjBnMdg9GMpOzrQOmqFjNxVcenFEk3VhFFXsdUcjkeCsSlEO8ueR4YcYZrfcYfmNphBN9Yi7pQyOp00C6ERk7Lz
//coffee : price_1NKvdHDnHuaRjBnMVmv0lNBa
//sunglasses: price_1NKveXDnHuaRjBnMrfUtqQPh
//camera: price_1NKvfaDnHuaRjBnMOXlrlLzA

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51MmbWkDnHuaRjBnMdg9GMpOzrQOmqFjNxVcenFEk3VhFFXsdUcjkeCsSlEO8ueR4YcYZrfcYfmNphBN9Yi7pQyOp00C6ERk7Lz')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /* 
    req.body.items[
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    
    */
    
    console.log(req.body)
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000"))