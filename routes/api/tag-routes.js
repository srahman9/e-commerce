const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [Product],
    });
    res.json(tagData);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagIdData = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    });
    res.json(tagIdData);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.json(tagData);
  } catch (err) {
    console.error(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const putData = await Tag.update(
      {
        tag_name: req.body.tag_name,
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
  // delete on tag by its `id` value
  try {
    const deleteData = await Tag.destroy({
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
