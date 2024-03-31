const express = require("express")
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middlelayer
app.use(express.json())

app.use("/api/v1/tasks",tasks);

app.get("/", function(req, res) {
    res.send("Hello First node app");
});


const port = 8080;

const start = async () => {
    console.log("process.env.MANGO_URI::", process.env.MANGO_URI);
    try {
        await connectDB(process.env.MANGO_URI);
        app.listen(port, console.log(`Server is listening on port: ${port}`));
    } catch(error) {
        console.log("start server::", error);
    }
}


start();
