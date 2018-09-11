const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// sorting PUT routes 
router.put('/date', (req, res) => {
    let data = req.body.toggle; 
    if (data) {
        let orientation = 'DESC';
        const query = `SELECT * FROM "feedback" ORDER BY "date" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })} else if (data == false){
       let orientation = 'ASC'; 
        const query = `SELECT * FROM "feedback" ORDER BY "date" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error sorting data', error);
        res.sendStatus(500); 
    })
    }
}); 
router.put('/taste', (req, res) => {
    let data = req.body.toggle; 
    if (data) {
        let orientation = 'DESC';
        const query = `SELECT * FROM "feedback" ORDER BY "taste" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })} else if (data == false) {
       let orientation = 'ASC'; 
        const query = `SELECT * FROM "feedback" ORDER BY "taste" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error sorting data', error);
        res.sendStatus(500); 
    })
    }
}); 
router.put('/texture', (req, res) => {
    let data = req.body.toggle; 
    if (data) {
        let orientation = 'DESC';
        const query = `SELECT * FROM "feedback" ORDER BY "texture" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })} else if (data == false) {
       let orientation = 'ASC'; 
        const query = `SELECT * FROM "feedback" ORDER BY "texture" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error sorting data', error);
        res.sendStatus(500); 
    })
    }
}); 
router.put('/creativity', (req, res) => {
    let data = req.body.toggle;  
    if (data) {
        let orientation = 'DESC';
        const query = `SELECT * FROM "feedback" ORDER BY "creativity" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })} else {
       let orientation = 'ASC'; 
        const query = `SELECT * FROM "feedback" ORDER BY "creativity" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error sorting data', error);
        res.sendStatus(500); 
    })
    }
}); 
router.put('/nutrition', (req, res) => {
    let data = req.body.toggle; 
    if (data) {
        let orientation = 'DESC';
        const query = `SELECT * FROM "feedback" ORDER BY "nutrition" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })} else if (data == false){
       let orientation = 'ASC'; 
        const query = `SELECT * FROM "feedback" ORDER BY "nutrition" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error sorting data', error);
        res.sendStatus(500); 
    })
    }
}); 
router.put('/overall', (req, res) => {
    let data = req.body.toggle; 
    if (data) {
        let orientation = 'DESC';
        const query = `SELECT * FROM "feedback" ORDER BY "overall_rating" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })} else if (data == false){
       let orientation = 'ASC'; 
        const query = `SELECT * FROM "feedback" ORDER BY "overall_rating" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error sorting data', error);
        res.sendStatus(500); 
    })
    }
}); 
router.put('/', (req, res) => {
    let data = req.body.toggle;  
    if (data) {
        let orientation = 'DESC';
        const query = `SELECT * FROM "feedback" ORDER BY ${req.query.type} ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })} else if (data == false){
       let orientation = 'ASC'; 
        const query = `SELECT * FROM "feedback" ORDER BY ${req.query.type} ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error sorting data', error);
        res.sendStatus(500); 
    })
    }
}); router.put('/meal', (req, res) => {
    let data = req.body.toggle; 
    if (data) {
        let orientation = 'DESC';
        const query = `SELECT * FROM "feedback" ORDER BY "meal" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error getting feedback', error);
        res.sendStatus(500); 
    })} else {
       let orientation = 'ASC'; 
        const query = `SELECT * FROM "feedback" ORDER BY "meal" ${orientation};`; 
    pool.query(query).then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Error sorting data', error);
        res.sendStatus(500); 
    })
    }
}); 
module.exports = router; 