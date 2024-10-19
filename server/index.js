const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Failed to connect to MongoDB:", err));

 // login route
 app.post('/login', async (req, res) => {
    const {email , password} =  req.body;
    EmployeeModel.findOne({email:email})
    .then (user => {
        if(user){
            if(user.password == password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
             res.json("No  record existed !!")

        }
    })
 
      
    })
  
    

// Register Route
app.post('/register', async (req, res) => {
  try {
    const employee = await EmployeeModel.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
