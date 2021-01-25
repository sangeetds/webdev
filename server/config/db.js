const mongoose = require('mongoose');
const connect = "mongodb+srv://sangeet:sangeet@todos.2huon.mongodb.net/Todos?retryWrites=true&w=majority"

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
