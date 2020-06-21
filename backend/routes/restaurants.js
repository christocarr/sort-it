const router = require('express').Router();

let Restaurant = require('../models/restaurant.model');

router.route('/').get((req, res) => {
  Restaurant.find()
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const allergens = req.body.allergens;

  const newRestaurant = new Restaurant({
    username,
    allergens,
  });

  newRestaurant
    .save()
    .then(() => res.json('Restaurant added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
