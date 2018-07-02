const mongoose = require('mongoose')

// if (process.env.NODE_ENV === 'production') {
//   mongoose.connect(
//     'mongodb://BizzaroTaylor:taylor1@ds019028.mlab.com:19028/taymerndb'
//   )
// } else {
mongoose.connect('mongodb://localhost/react_translator_db')
// }

mongoose.promise = Promise

module.exports = mongoose
