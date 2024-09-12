const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
dotEnv.config();

const Path = path.join(__dirname, "/views");
const PORT = process.env.PORT || 8011;
const router = require("./routes/index_routes_.js");
const db = require("./db/movie_db_file.js");

app.set("view engine", "ejs");
app.set("views", Path);

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static(Path));
app.use("/public", express.static(path.join(__dirname,"/public")));

app.use("/", router);


app.listen(PORT, (err) => {

    if(!err) {
        console.log(`server is running on port http://localhost:${PORT}`);
    } 
})
