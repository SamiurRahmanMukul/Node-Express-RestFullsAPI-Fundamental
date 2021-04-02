const express = require("express");
const app = express();

// * import data
const { products } = require("../Data/data");

app.get("/", (req, res) => {
  res.send(
    "<h1>Home Page / JSON Basic</h1> <a href='/api/products'>Products</a> <br /> <a href='/api/products/1'>Single Products</a>"
  );
});

// * api products
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

// * single products
app.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);

  res.json(singleProduct);
});

// * single products (exclusive excepted)
app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;

  // const singleProduct = products.find((product) => product.id === 1);
  const singleProduct = products.find(
    (product) => product === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).send("Product does not exist!");
  }

  return res.json(singleProduct);
});

// * router params
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello World!");
});

// * params query
app.get("/api/v1/query", (req, res) => {
  // console.log(req.params);

  const { search, limit } = req.params;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("no products matched you search");
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
  res.send("Hello World!");
});

// ! 404 - page not found
app.all("*", (req, res) => {
  res.sendStatus(404).send("Resource not found!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
