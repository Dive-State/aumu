const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const morgan = require('morgan');
const dbConfig = require("./app/config/db.config");
const init = require('./app/init');
const testRouter = require('./app/routes/user.routes');
const authRouter = require('./app/routes/auth.routes');
const db = require("./app/models");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
/* for Angular Client (withCredentials) */
// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:8081"],
//   })
// );

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true
  })
);

// middleware
app.use(morgan('common'));

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    init.role(db);
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
app.use("/api/test", testRouter);
app.use("/api/auth", authRouter);

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

