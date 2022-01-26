const mongoose = require("mongoose");
//const config = require("./config");

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DB } = process.env;

const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DB}`;


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: false,
    //  useCreateIndex: true,
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));



/*
(async () => {
  try {
    const db = await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();*/