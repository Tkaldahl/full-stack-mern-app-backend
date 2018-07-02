const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/models.js')
const Occupant = mongoose.model('Occupant')

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(parser.json())

app.get('/', (req, res) => {
  console.log('root working')
  Occupant.find()
    .then((occupants) => {
      res.json(occupants)
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
