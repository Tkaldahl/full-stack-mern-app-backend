const mongoose = require('mongoose')

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(
    'mongodb://BizzaroTaylor:taylor1@ds125831.mlab.com:25831/full-stack-mern-app-backend'
  )
} else {
  mongoose.connect('mongodb://localhost/kaldahl_house_db')
}

mongoose.promise = Promise

module.exports = mongoose
