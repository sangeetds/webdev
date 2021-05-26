const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECT, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true
        });

        console.log("MongoDB connected");
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = db;
