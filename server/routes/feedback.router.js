const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Feedback POST route 
router.post('/', (req, res) => {
    const feedback = req.body;
    const query = `INSERT INTO "feedback" ("taste", "texture", "creativity", "nutrition", "comments", "meal") 
    VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(query, [feedback.taste, feedback.texture, feedback.creativity, feedback.nutrition, feedback.comments, feedback.meal]).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error posting feedback', error);
        res.sendStatus(500); 
    })
});

// Feedback GET route 
router.get('/', (req, res) => {
    const query = `SELECT * FROM "feedback";`; 
    pool.query(query).then((results) => {
        res.send(response.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })
}); 

module.exports = router;