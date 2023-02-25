//! import statements
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//! POST a new feedback to database
router.post('/', async (req, res) => {
    const client = await pool.connect();
    try {
        console.log('req.body ===', req.body); 
        const {
            feeling,
            understanding,
            support,
            comments
        } = req.body;
        await client.query('BEGIN')
  
        await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`, [feeling, understanding, support, comments]);

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

module.exports = router;