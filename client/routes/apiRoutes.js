const axios = require("axios");
const express = require("express");
const router = express.Router();
const controller = require("../controller/bookController");

router.get("/books", (req, res) => {
    axios.get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
        .then(({ data: { items } }) => res.json(items));
});

router.route("/savedBooks")
    .get(controller.findAll)
    .post(controller.create);

router.route("/savedBooks/:id")
    .delete(controller.remove);
  
module.exports = router;
