const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [Product],
    });
    res.json(categoryData);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryidData = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    });
    res.json(categoryidData);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const postData = await Category.create({
      category_name: req.body.category_name,
    });
    res.json(postData);
  } catch (err) {
    console.error(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const putData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(putData);
  } catch (err) {
    console.error(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deleteData);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
