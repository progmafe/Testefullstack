

const express = require("express");
const { password } = require("pg/lib/defaults");
const app = express();
const userRouter = require('./routes/userRoutes');


//configure the app.

app.set("view engine","ejs");
app.set("views","src/views/users"); // valor dessa ultima pasta pode ser dinamico
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
// const todoRoutes = require('./routes/UserRoutes');

// const app = express();


app.listen(8080);

