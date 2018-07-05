const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/models.js')
const Occupant = mongoose.model('Occupant')
const cors = require('cors')

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(parser.json())
app.use(cors())

app.get('/', (req, res) => {
  console.log('root working')
  // console.log(Occupant.find())
  Occupant.find()
    .then((occupants) => {
      console.log('then working')
      res.json(occupants)
    })
})

app.post('/', (req, res) => {
  console.log('Posting the following to db ' + req.body)
  Occupant.create({
    name: req.body.name,
    role: req.body.role,
    age: req.body.age
  })
    .then((occupants) => {
      res.json(occupants)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/:id', (req, res) => {
  Occupant.findById(req.params.id)
    .then((occupant) => {
      res.json(occupant)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
