var express = require('express');
var router = express.Router();
const pg = require('pg');
const config = require('./dbconfig')

/* GET users listing. */
router.get('/', function (req, res, next) {
  try {
    const client = new pg.Client(config);
    client.connect(err => {
        if (err) throw err;
        else {
            queryDatabase();
        }
    });
  } catch (error) {
    console.log("🚀 ~ file: insert.js ~ line 18 ~ error", error)
  }
  res.json(config)
});


async function queryDatabase() {
    const query = `
        DROP TABLE IF EXISTS inventory;
        CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
        INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
        INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
        INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
    `;

    await client
        .query(query)
        .then(() => {
            console.log('Table created successfully!');
            client.end(console.log('Closed client connection'));
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');
            process.exit();
        });
}

module.exports = router;