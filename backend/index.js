const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./Database/db.js");
const { router } = require("./routes/AllRoutes");
app.use(express.json());
app.use(cors());
app.use(router);
const dbConnect = async () => {
  await connection;
};

dbConnect()
  .then(() => {
    app.listen(8080, () => {
      console.log("Server running on port 8080");
    });
  })
  .catch((error) => {
    console.error("Unable to connect to DB", error);
  });
