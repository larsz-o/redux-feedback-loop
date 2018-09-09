const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Feedback POST route 
router.post('/', (req, res) => {
    const feedback = req.body;
    const query = `INSERT INTO "feedback" ("taste", "texture", "creativity", "nutrition", "comments", "meal", "overall_rating", "name") 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
    pool.query(query, [feedback.taste, feedback.texture, feedback.creativity, feedback.nutrition, feedback.comments, feedback.meal, feedback.overall_rating, feedback.name]).then((response) => {
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
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })
}); 

//Feedback DELETE route
router.delete('/:id', (req, res) => {
    const query = `DELETE FROM "feedback" WHERE "id" = $1;`; 
    pool.query(query, [req.params.id]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error deleting feedback', error);
        res.sendStatus(500); 
    })
}); 

//Feedback PUT route
router.put('/:id', (req, res) => {
    const id = req.params.id; 
    const query = `UPDATE "feedback" SET flagged = NOT flagged WHERE "id" = $1;`;
    pool.query(query, [id]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error editing entry', error);
        res.sendStatus(500);
    })
})

module.exports = router;