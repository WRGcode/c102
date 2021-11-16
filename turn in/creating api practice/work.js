const express = require("express");
const app = express();
const { menu } = require("./menu");

app

  .get("/", (req, res) => {
    const newMenu = menu.map((menuItem) => {
      // const {title, price} = menuItem;
      // return {title, price}

      return menuItem.title;
    });
    const unique = [...new Set(menu.map((menuItem) => menuItem.category))];

    // if (unique == category){
    //  res.json(id, title, price)
    // }
    res.json({ result: { categories: unique, names: newMenu }, status: 200 });
    // });
    // res.json(newMenu);
  })

  .get("/api/id/:id", (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const singleItem = menu.find((menuItem) => {
      return menuItem.id === Number(id);
    });
    if (!singleItem) {
      // res.status(404).send("product not found")
      res.json({ result: [], message: "product not found" });
    }
    res.json({ result: [singleItem], message: "found" });
  })

  .get("/api/query", (req, res) => {
    const {category, limit } = req.query;

    let sortItems = [...menu];
    if (category) {
      sortItems = sortItems.filter((menuItem) => {
        return menuItem.category.includes(category);
      });
    }
    if (limit) {
      sortItems = sortItems.slice(0, Number(limit));
    }
    if (sortItems.length < 1) {
      return res.json({ result: [], message: "product not found" });
    }
    res.json({ result: sortItems });
  })

  //not working
  .get("/api/price", (req, res) => {
    const pricesort = menu.map((menuItem) => {
      const {title, price, id} = menuItem;
      return {title, price, id}
    })
    pricesort.price.sort((a, b) => a - b);
    res.json({result: pricesort})
  })
  //not working

app
  .all("*", (req, res) => {
    res.status(404).send("<h1>page not found</h1>");
  })

  .listen(3000, () => {
    console.log("server is listen");
  });
