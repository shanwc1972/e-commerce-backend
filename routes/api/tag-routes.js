const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags along with associated Product data
  try {
    const tagData = await Tag.findAll( {
      include: [
        { model: Product,
          through: {
            model: ProductTag,
            attributes: ['id', 'product_id', 'tag_id'], //attribute added to remove redundant columns
          },
          as: 'tag_products' }],
      order: [['id', 'ASC']]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id` along with its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      //include: [{ model: Product, as: 'tag_products' }]
      include: [
        { model: Product,
          through: {
            model: ProductTag,
            attributes: ['id', 'product_id', 'tag_id'], //attribute added to remove redundant columns
          },
          as: 'tag_products' }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching the tag' });
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    // Find the tag by its id
    const tagData = await Tag.findByPk(req.params.id);

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    // Update the category with the data sent in the request body
    await tagData.update(req.body);

    // Respond with the updated category data
    res.status(200).json(tagData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
