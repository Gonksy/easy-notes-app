const express = require('express');
const app = express();
const PORT = 8000;
const mongoose = require('mongoose');

require('dotenv').config();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let dbConnectionStr = process.env.DB_STRING

mongoose.Promise = global.Promise;

mongoose.connect(dbConnectionStr, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});


app.get('/', (req, res) => {
  res.json({'message': 'Welcome to EasyNotes.'})
})

require('./app/routes/note.routes.js')(app);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})