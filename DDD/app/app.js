const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const Store = require("./components/store/store.route");
const Book = require("./components/book/book.route");

module.exports = (app) => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(helmet());
  app.use(cors());
  app.use("/", Store);
  app.use("/", Book);
};
