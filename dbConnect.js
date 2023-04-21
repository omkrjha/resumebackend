const mongoose = require('mongoose');

const URL =
  'mongodb+srv://krJha:abCD1234@cluster0.4xj71pi.mongodb.net/my-resume-builder';


  mongoose.set('strictQuery', false);
mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongo DB Connection Successfull');
});
connection.on('error', (error) => {
  console.log(error);
});
