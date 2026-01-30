const express = require("express");
const app = express();
const path = require("node:path");
const usersRouter = require("./routes/usersRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use("/", usersRouter);

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }

  console.log("Server do be running on 3000");
})
