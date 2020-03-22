const app = require("express")();

require("dotenv").config();

app.use(require("morgan")("dev"));

app.use(require("cors")());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("mongoose").connect(
  "mongodb://localhost/project_certification",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  err =>
    err
      ? console.log(err)
      : console.log("Database: Running => project_certification")
);

app.use("/api/user/auth", require("./routes/auth"));

app.use("/", (req, res) => res.status(404).json({ msg: "Request Not Found!" }));

app.listen(process.env.PORT, err => {
  err
    ? console.log(err)
    : console.log(`Server: Running => ${process.env.PORT}...`);
});
