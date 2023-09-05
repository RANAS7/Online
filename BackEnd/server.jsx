const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
});

app.post("/signUp", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

 con.query("INSERT INTO login (username, email, password) VALUES(?)", [username, email, password],
    (err, result) => {
       if(result) {
       res.send(result);
      }else{
          res.send({message: "Enter Correct Asked Details!"})
     }
    }
  )
})

//   db.query(sql, [values], (err, data) => {
//     if (err) {
//       return res.json("Error");
//     }
//     return res.json(data);
//   })
// })

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  con.query("SELECT * FROM login WHERE username = ? AND  password = ?", [username, password],
      (err, result) => {
          if(err){
              req.setEncoding({err: err});
           }else{
      if(result.length > 0){
        res.send(result);
      }else{
        res.send({message: "Wrong Username or Password"});
      }
    }
  })
});

app.listen(5174, () => {
  console.log("Running Backend Server");
});
