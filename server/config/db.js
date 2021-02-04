const mongoose = require('mongoose');

const db = async () => {
    try {
        const conn = await mongoose.connect(connect, {
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
