const express = require("express");
const app = express();
const { products } = require("./data");

app
  .get("/", (req, res) => {
    res.send('<h1>home page</h1><a href="/api/products">products</a>');
  })
  .get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
      const { name, id, image } = product;
      return { name, id, image };
    });
    res.json(newProducts);
  })

  .get("/api/products/:id", (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const singlePorduct = products.find((product) => {
      return product.id === Number(id);
    });

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (!singlePorduct) {
      // res.status(404).send("product not found")
      res.json({ result: [], message: "product not found" });
    }
    res.json({ result: [singlePorduct], message: "found" });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  })

  .get("/api/v1/query", (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query;
    // ... creates a new nomutable copy
    let sortedProducts = [...products];
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.includes(search);
      });
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
      return res.json({ result: [], message: "product not found" });
    }
    res.json({ result: sortedProducts });
  });

app
  .all("*", (req, res) => {
    res.status(404).send("<h1>page not found</h1>");
  })

  .listen(3001, () => {
    console.log("server is listen");
  });
