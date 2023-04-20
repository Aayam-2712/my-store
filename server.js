var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

// const port = 2450;
var port= process.env.PORT||2410;
app.listen(port, () => console.log(`Listening on ${port}!`));


let products = [
  {
     id: 1,
    category: "Watches",
    description:
      "The look that made Swiss watches the toast of the world. Still unbeatable.",
    imgLink:
      "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    name: "Silver",
    price: 1600
  },
  {
     id: 2,
    category: "Watches",
    description: "Dark, black beauty. Sure to look good on the wrist.",
    imgLink:
      "https://images.pexels.com/photos/1697566/pexels-photo-1697566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Black",
    price: 899
  },
  {
     id: 3,
    category: "Watches",
    description:
      "Multi chronographs, stop watch, timers. Altimeter. What else.",
    imgLink:
      "https://images.pexels.com/photos/2113994/pexels id-photo-2113994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Chronograph",
    price: 1199
  },
  {
     id: 4,
    category: "Watches",
    description: "For all ages. For all times. Classic Look. Classic leather.",
    imgLink:
      "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Classic",
    price: 1250
  },
  {
     id: 5,
    category: "Watches",
    description: "The original Apple Watch. Still a great buy.",
    imgLink:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Apple v1",
    price: 999
  },
  {
     id: 6,
    category: "Watches",
    description: "Mechanical 28 jewelled watch. Connoisseur delight.",
    imgLink:
      "https://images.pexels.com/photos/47339/mechanics-movement-feinmechanik-wrist-watch-47339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Jewelled",
    price: 1999
  },
  {
     id: 7,
    category: "Sunglasses",
    description: "Desirable, reddish tint. Sure to attract attention.",
    imgLink:
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Tinted Red",
    price: 399
  },
  {
     id: 8,
    category: "Sunglasses",
    description: "Nostalgic, bluish tint, sure to get memories back. Vintage.",
    imgLink:
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Oldies",
    price: 199
  },
  {
     id: 9,
    category: "Sunglasses",
    description: "Trendy, young sunglasses with retro look. Teen favourite.",
    imgLink:
      "https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Youthful",
    price: 219
  },
  {
     id: 10,
    category: "Sunglasses",
    description: "Chic sunglasses. Classic dark shades, sure to generate envy.",
    imgLink:
      "https://images.pexels.com/photos/65659/glasses-glass-circle-light-transmittance-65659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Classic Dark",
    price: 249
  },
  {
     id: 11,
    category: "Watches",
    description: "Apple Watch Version 2. A delight.",
    imgLink:
      "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Apple v2",
    price: 1499
  },
  {
     id: 12,
    category: "Belts",
    description: "Stylish formal brown belt. An office favourite.",
    imgLink:
      "https://as1.ftcdn.net/jpg/02/14/48/72/500_F_214487233_Aahw3DohDu6dSSfMqWCcU1QDatxpDt6E.jpg",
    name: "Fab Brown",
    price: 149
  },
  {
     id: 13,
    category: "Handbags",
    description: "Desirable travel bag. Mix of convenience and style",
    imgLink:
      "https://images.pexels.com/photos/2534961/pexels-photo-2534961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Travel Lite",
    price: 199
  },
  {
     id: 14,
    category: "Handbags",
    description: "3 Pockets, 2 Zips -  ideal for shopping and parties",
    imgLink:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Chic Leather",
    price: 749
  },
  {
     id: 15,
    category: "Belts",
    description: "Signature belt from Gucci ",
    imgLink:
      "https://img.shopstyle-cdn.com/pim/c7/a6/c7a695a8db5a375b222f15bea045bdea_xlarge.jpg",
    name: "Raw Edge",
    price: 799
  },
  {
     id: 16,
    category: "Belts",
    description: "Iconic metallic belt",
    imgLink:
      "https://img.shopstyle-cdn.com/pim/81/78/8178fa6c3b27d3f3e0fe18d019c992ea_xlarge.jpg",
    name: "Goofy Black",
    price: 349
  },
  {
     id: 17,
    category: "Sunglasses",
    description: "Min black faded front shades",
    imgLink:
      "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_HIGHKEY_Mini_BLACK_FADE_FRONT_450x.jpg",
    name: "Quay Shades",
    price: 479
  },
  {
     id: 18,
    category: "Belts",
    description: "Evergreen formal belt with classic buckle",
    imgLink:
      "https://as1.ftcdn.net/jpg/02/02/45/86/500_F_202458696_CYlcJbJfjgUb2VgQnPSUxHU79v6I3SC6.jpg",
    name: "Classic Brown",
    price: 128
  },
  {
     id: 19,
    category: "Handbags",
    description: "Beach handbag to go along with a beach holiday",
    imgLink:
      "https://images.pexels.com/photos/2305000/pexels-photo-2305000.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Funky Jute",
    price: 99
  }
];
let customers = [{ custId: 1, email: "email@test.com", password: "test123" }];
let orders = [];
let cart = [];

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:category?", function (req, res) {
  let catName = req.params.category;
  console.log(catName);
  let list = products.filter((itm) => itm.category === catName);
  res.send(list);
});

//for registering new user
app.post("/register", function (req, res) {
  let email = req.body.email;
  let obj = customers.find((item) => item.email === email);
  if (obj === undefined) {
      const cust = {
      custId: customers.length + 1,
      password: req.body.password,
      email: req.body.email,
      };
      customers.push(cust);
      let customerRes = {
      custId: cust.custId,
      email: req.body.email,
      };
      res.send(customerRes);
  } 
  else res.status(500).send("Email already present");
});

app.post("/login", function (req, res) {
  //find that customer
  console.log(req.body);
  let custObj = customers.find(
      (item) =>
      item.email === req.body.email && item.password === req.body.password
  );
  console.log(custObj);
  let resObj = null;
  if (custObj != undefined) {
      resObj = {
      custId: custObj.custId,
      email: custObj.email,
      };
      res.status(200).send(resObj);
  } 
  else res.status(500).send("Login Unsuccessful");
});

app.post("/order", function (req, res) {
  let obj = req.body;
  console.log(obj);
  let obj1 = customers.find((itm) => itm.email === req.body.email);
  let body = { orderId: orders.length + 1, ...obj, custId: obj1.custId };
  orders.unshift(body);
  cart = [];
  res.send(body);
});

app.get("/orders", function (req, res) {
  //change here
  let list = [];
  orders.map((itm) => {
      let obj = {
          orderId: itm.orderId,
          name: itm.name,
          address: itm.address,
          city: itm.city,
          totalPrice: itm.totalPrice,
          email: itm.email,
          custId: itm.custId,
          items: itm.items.length,
      };
      list.push(obj);
  });
  res.send(list);
});

app.post("/product", function (req, res) {
  let obj = req.body;
  let body = { id: products.length + 1, ...obj };
  products.push(body);
  res.send(body);
});

app.put("/product/:id", function (req, res) {
  let ind = +req.params.id;
  let id = products.findIndex((item) => item.id === ind);
  products[id].name = req.body.name;
  products[id].price = req.body.price;
  products[id].description = req.body.description;
  products[id].category = req.body.category;
  products[id].imgLink = req.body.imgLink;
  res.send(products[id]);
});

app.delete("/product/:id", function (req, res) {
  let ind = +req.params.id;
  console.log("Ind ->",ind);
  let id = products.findIndex((item) => item.id === ind);
  console.log("Id ->",id);
  if (id > -1) {
    products.splice(id, 1);
    res.status(200).send("Product deleted successfully");
  } 
  
});

app.get("/product/:id", function (req, res) {
  let ind = +req.params.id;
  console.log(ind);
  let body = products.find((item) => {
      console.log(item.id, ind);
      return item.id === ind;
  });
  console.log(body);
  res.send(body);
});

app.post("/cart", (req, res) => {
  let prod = req.body;
  console.log("post", prod);
  let index = cart.findIndex((obj) => obj.prod.id === prod.id);
  if (index >= 0) {
      cart[index].qty++;
  } else {
      let json = {};
      json.prod = prod;
      json.qty = 1;
      cart.push(json);
  }
  res.send("Add To Cart");
});

app.delete("/cart/:id", (req, res) => {
  let id = req.params.id;
  let index = cart.findIndex((obj) => obj.prod.id === +id);
  cart.splice(index, 1);
  res.send("Deleted Succesfully");
});

app.delete("/removeProd/:id", (req, res) => {
  let id = req.params.id;
  let index = cart.findIndex((obj) => obj.prod.id === +id);
  cart[index].qty--;
  console.log(cart[index].qty);
  if (cart[index].qty === 0) cart.splice(index, 1);
  res.send("Deleted Succesfully");
});

app.get("/cart", (req, res) => {
  res.send(cart);
});
