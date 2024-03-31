const mangoose = require("mongoose");

const connectDB = (url) => {
    console.log("url::", url);
    mangoose
    .connect(url.toString(), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("connected to nodejs-task database"))
    .catch((err) => {
        console.log("error::", err);
    })
}

module.exports = connectDB;


