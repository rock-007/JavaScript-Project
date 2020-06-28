// bring in express
const express = require("express");
const mysqlx = require("mysql");
const jwt = require("jsonwebtoken");
const auth = require("./verifyTokenExisting");
const authNew = require("./verifyTokenNew");
// initialise express and bind to app conastant so can be used later in the coding
const app = express();
// add the route to the server , when called from the react Frontend page at port 5000 when it is listening
app.use(express.json());

// it gives the ability to app to read json data

let connection = mysqlx.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "join_us",
  insecureAuth: true,
});
// if he get request at http://localhost:5000/signin then it will response to it
app.post("/api/customers", (req, res) => {
  let x1 = req.body;

  var person = {
    email: x1.email,
    first_name: x1.FirstName,
    last_name: x1.LastName,
    password: x1.password,
  };

  connection.query("INSERT INTO users SET ?", person, function (err, results) {
    if (err) throw err;
    console.log(results);
  });

  //query
  //  let q = "SELECT * from users";
  // connection.query(q, function (err, results) {
  //   if (err) throw err;
  //res.json(results);

  res.redirect("http://localhost:3000/signin");
  //});
});

// app.get("/api/1234", (req, res) => {
//   // in real life it will usually come froma database like mysql,mongodb...
//   // const cusotmers = [
//   //   { id: 1, xxxe: "cccccccccccccccccccccJohn", Lahhhstname: "Don" },
//   //   { id: 2, firstName: "Umair", Lasgfgdftname: "Ashraf" },
//   //   { id: 3, firstName: "Owais", Lasfdtname: "Aslam" },
//   // ];
//   // let q = "SELECT * from users";
//   // connection.query(q, function (err, results) {
//   //   //if (err) throw err;
//   //   // console.log(results);
//   //   // send the jason formt to the font end
//   //   res.json(results);
//   // });
// });
// // port where it can be listen on local host , dont use 3000 as it is default picked up by react

/////////////////Login//////////////////////////////////////////////////////Login////////////////////////////////////////////////////////////

app.post("/api/newuser", (req, res) => {
  let x1 = req.body;

  // var person = {
  //   email: x1.Email,
  //   //  password: x1.password,
  // };
  console.log("73", x1);

  connection.query("SELECT * FROM  users WHERE email=?;", [x1.Email], function (
    err,
    results
  ) {
    console.log("78", results);

    //TOKEN
    const token = jwt.sign(
      { _id: results[0].email },
      "lllfasdgfdadsfasdfdasfcadsf"
    );
    // console.log("74", results, err);
    // console.log("75", results[0].email);

    if (err) throw err;
    else {
      if (results[0].email && results[0].password) {
        //  console.log("79", results[0].email);

        //below if the user and paswword is correct == to do user is not already logedin
        if (
          results[0].password == x1.password &&
          results[0].userlogin == false
        ) {
          res.header("auth-token", token).send(token);
          // update the userlogin to tre for this user
          connection.query(
            "UPDATE  users SET userlogin=? WHERE email=?",
            ['1', results[0].email],
            function (err, results) {
              if (err) throw err;
              console.log(results);
            }
          );
        } else {
          res.json({
            data: "invalid password",
          });
        }
      } else res.redirect("http://localhost:3000/about");
    }
  });
});

//connection.end();
const port = 5000;
app.listen(port, "localhost", "localhost", () =>
  console.log(`server started on port${port}`)
);
