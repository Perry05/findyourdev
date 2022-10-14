const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/';
const dbName = dbUrl.split('/').pop() || 'find_your_dev';


mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    // poolSize: 20,
  })
  .then((status) => console.info(`Connection establised to ${dbName}`))
  .catch((err) =>
    console.error(`Could not connect to database: ${err.message}`)
  );