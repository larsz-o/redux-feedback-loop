const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Meal POST route 
router.post('/', (req, res) => {
    const mealToAdd = req.body;
    const query = `INSERT INTO "dinners" ("meal")
VALUES $1;`;
    pool.query(query, [mealToAdd.meal]).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error posting meal', error);
        res.sendStatus(500); 
    })
});

// Meal GET route 
router.get('/', (req, res) => {
    const query = `SELECT * FROM "dinners";`; 
    pool.query(query).then((results) => {
        res.send(response.rows)
    }).catch((error) => {
        console.log('Error getting dinners', error);
        res.sendStatus(500); 
    })
}); 

module.exports = router;