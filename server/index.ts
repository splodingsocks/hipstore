import * as express from "express"
import { Products } from "./Products"
import { Cart } from "./Cart"
import * as cors from "cors"
import * as session from "express-session"


const app = express()

app.use(session({
  name: 'session',
  cookie: {maxAge: 7 * 24 * 60 * 60 * 1000}, // One week
  secret: 'I am not actually worried about this being secret. It\'s totally not a big deal at all.',
  resave: false,
  saveUninitialized: true
}))

app.use(cors());

app.get("/api/products", (req, res) => {
  res.json(Products.getAll())
})

app.get("/api/cart", (req, res) => {
  res.json(Cart.getItems(req.sessionID || ""))
})

app.post("/api/cart/:id", (req, res) => {
  res.json(Cart.addItem(req.params.id, req.sessionID || ""))
})

app.delete("/api/cart/:id", (req, res) => {
  res.json(Cart.removeItem(req.params.id, req.sessionID || ""))
})

app.listen(4000, () => {
  console.log("Listening on port 4000")
})