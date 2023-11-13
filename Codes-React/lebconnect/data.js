const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post("/login", cors(), async (req, res) => {
    const { email, password } = req.body;
    try {
      const check = await collection.findOne({ email: email });
      if (check) {
        res.json("exist");
      } else {
        res.json("notexist");
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  app.post("/signup", cors(), async (req, res) => {
    const { email, password, age, firstName, lastName, dateofbirth, password1, phonenumber} = req.body;
    try {
      const check = await collection.findOne({ email: email });
      if (check) {
        res.json("exist");
      } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const data = {
          email: email,
          password: hashedPassword,
          age: age,
          firstName: firstName,
          lastName: lastName,
          dateofbirth: dateofbirth,
          password1: password1,
          phonenumber: phonenumber
          
        };
        await collection.insertMany([data]);
        res.json("notexist");
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
app.listen(8000, () => {
    console.log("server is running")
});