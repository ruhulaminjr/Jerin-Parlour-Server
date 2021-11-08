const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const { application } = require("express");
require("dotenv").config();
// initialize function
const app = express();
const port = process.env.PORT || 5000;
// mongodb config
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bdjvz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// express middleware
app.use(cors());
app.use(express.json());

// api
async function run() {
  try {
    await client.connect();
    console.log("db Connected Success");
  } finally {
  }
}
run().catch(console.error());
// Home Route
app.get("/", (req, res) => {
  res.send("JErins PaRlOuR RuNiNing Successfull");
});

// server running here
app.listen(port, () => {
  console.log(`server RuNiNing on http://localhost:${port}`);
});
