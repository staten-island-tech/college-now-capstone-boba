const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

mongoose
  .connect(
    "mongodb+srv://kangxiy:237730858@atlascluster.s3qixeg.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to DB"));

mongoose.connection.on("error", (err) => {
  console.log(`${err.message}`);
});
