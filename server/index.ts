import * as express from "express"
import { Products } from "./Products"
import { Cart } from "./Cart"
import * as cors from "cors"
import * as session from "express-session"
import * as fs from "fs"


const html = fs.readFileSync(__dirname + "/index.html")
const app = express()

app.use(express.static(__dirname + "/static"))
app.use(session({
  name: 'session',
  cookie: {maxAge: 7 * 24 * 60 * 60 * 1000}, // One week
  secret: 'I am not actually worried about this being secret. It\'s totally not a big deal at all.',
  resave: false,
  saveUninitialized: true
}))
const corsOptions = {
    origin: (origin: String, callback: (err: any, accept: boolean) => void) => {
        callback(null, true)
    },
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}
app.use(cors(corsOptions));

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

app.get("/", (req, res) => {
  res.contentType('html')
  res.send(html)
})

app.listen(4000, () => {
  console.log("Listening on port 4000")
})