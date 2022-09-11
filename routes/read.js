var express = require('express');
var router = express.Router();
const pg = require('pg');
const config = require('./dbconfig')

/* GET users listing. */
router.get('/', function (req, res, next) {
  
  new Promise((resolve, reject) => {
    try {
      const client = new pg.Client(config);
      client.connect(err => {
        if (err) throw err;
        else { queryDatabase(); }
      });
    } catch (error) {
      console.log("🚀 ~ file: read.js ~ line 16 ~ newPromise ~ error", error)
    }
  })
  
  res.json([
    { id: 1, name: "DB read success" },
  ]);
});

function queryDatabase() {

    console.log(`Running query to PostgreSQL server: ${config.host}`);

    const query = 'SELECT * FROM inventory;';

    client.query(query)
        .then(res => {
            const rows = res.rows;

            rows.map(row => {
                console.log(`Read: ${JSON.stringify(row)}`);
            });

            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = router;