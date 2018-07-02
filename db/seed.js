const mongoose = require('./models.js')
const Occupant = mongoose.model('Occupant')
const occupantData = require('./occupant-data.json')

Occupant.remove({})
  .then(() => {
    Occupant.collection.insert(occupantData)
      .then((occupants) => {
        console.log(occupants)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
