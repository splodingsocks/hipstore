# Jump-Starting Your Elm Skills

by [@splodingsocks](https://twitter.com/splodingsocks)

![inline](https://pbs.twimg.com/profile_images/837067618875908096/H0oAwoDj.jpg)

--- 

# Buckle Up!

- Making HTTP Requests
- Parsing JSON
- Routing

Note:

- These three things are essential to making most Web apps

---?image=img/baked.jpg

# View Code is Pre-baked

- No writing view code today!
- Templates fresh from the oven.

Note:

- This talk isn't about how to write view code (HTML & CSS)
- I've conveniently created a package with view code that, when given the right data, will render the HTML for our store pages.

---?image=img/your-job.jpg

# Your Job

- Get the raw data
- Decode the raw data into the types we need
- Send updates to the server
- Route (render different views depending on what's in the location bar)

--- 

# Story Mode

Note:

Let's learn the things from the last slide by building an app!

---

`npm install -g create-elm-app`

**or**

[http://ellie-app.com](http://ellie-app.com)

Note:

Feel free to use a local Elm environment if you like. `create-elm-app` can get you going quickly. But if you don't already have Elm & Node installed, you can use Ellie. I'll use Ellie in the examples.

---

# Showing Products

+++

## Get a feel for the api:

- GET `/api/products` gives a list of available products and their prices
- GET `/api/cart` gives a list of products currently in the cart
- POST `/api/cart/<product_id>` adds a product to the cart for your session
- DELETE `/api/cart/<product_id>` deletes a product from the cart for your session

+++

- Add `splodingsocks/hipstore-view`

+++

## 👀 at the type we need for rendering a product

```elm
type alias Product =
  { <insert type here when ready>
  }
```

+++

## 👀 at the JSON we get from the server

```json
{
  <insert data from the server when ready>
}
```

+++

## Writing a decoder

- Video: writing a decoder

Note:

The decoder is so important. This is how we ensure that we have the data we need in order to move forward. If the data that's coming in is the wrong shape, we react appropriately instead of just crashing with a runtime error when the app code assumes the data has a shape that it doesn't. If the data comes in the wrong shape, but still has the information we need, we can use the decoding step to coerce the information into the correct shape. In other words: **JSON in, types out**.

+++

## Make room on the model

- See that the view code expects a `RemoteData err (List Product)`
- Add a slot of that same type on the model

## Make a GET request

- Add `elm-lang/http`
- Build the request
- Add a Msg type for a finished request
- use `sendRequest` from RemoteData to create a `Cmd`
- Map the `Cmd (WebData (List Product))` to a `Cmd Msg`
- Hand the command to the runtime in the `init`

