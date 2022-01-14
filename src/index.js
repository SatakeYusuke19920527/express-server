const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api/v1/users', function (req, res) {
  res.json({
    name: "mike",
    age: 123
  })
})

const PORT = process.env.PORT || 300
app.listen(PORT, () => {
  console.log('port 3000 start')
})