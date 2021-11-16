const { query } = require("express");
const Product = require("../models/Product");

const getAllProductsStatic = async (req, res) => {
  // throw new Error('testing async errors')
  const products = await Product.find({}).select("name price");
  res.json({ status: 200, msg: "success", results: products });
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const getAllProducts = async (req, res) => {
  const { featured, company, name, filters, sort, fields } = req.query;
  let queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true";
  } //? true : false
  // (featured === 'ture') true else false

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, options: "i" };
  }

  if (filters) {
    const options = ["price", "rating"];
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<=": "$lte",
      "<": "$It",
    };
    const re = /\b(<|>|<=|=|>=)\b/g;

    //filters=price>=30,rating>3
    let newFilters = filters.replace(re, (match) => `-${operatorMap[match]}-`);
    //filters=price-$gte-30,rating-$gt-3

    newFilters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      //field = price, operator = $gte,value = 30
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });

    // {
    //   price: {
    //     $gte: 30;
    //   }
    // }
  }

  let results = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    results = results.sort(sortList);
  } else {
    results = results.sort("createdAt");
  }

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    results = results.selcect(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  results = results.skip(skip).limit(limit);

  const products = await results;
  res.json({ status: 200, msg: "success", results: products });
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

module.exports = { getAllProducts, getAllProductsStatic };
