const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Feedback POST route 
router.post('/', (req, res) => {
    const feedback = req.body;
    const query = `INSERT INTO "feedback" ("taste", "texture", "creativity", "nutrition", "comments", "meal", "overall_rating") 
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(query, [feedback.taste, feedback.texture, feedback.creativity, feedback.nutrition, feedback.comments, feedback.meal, feedback.overall_rating]).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error posting feedback', error);
        res.sendStatus(500); 
    })
});

// Feedback GET routes
router.get('/', (req, res) => {
    const query = `SELECT * FROM "feedback";`; 
    pool.query(query).then((results) => {
        console.log(results.rows);
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })
}); 
router.get('/totals', (req, res) => {
    const query = `SELECT COALESCE ("taste") + ("texture") + ("creativity") + ("nutrition") AS "total" FROM "feedback";`; 
    pool.query(query).then((results) => {
        console.log(results.rows);
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })
}); 
// gets the sum of each rating to display in the results table as an overall rating

module.exports = router;