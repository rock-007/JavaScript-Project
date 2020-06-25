// bring in express
const express = require("express");
const mysqlx = require("mysql");
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
  // in real life it will usually come froma database like mysql,mongodb...
  // const cusotmers = [
  //   { id: 1, firstName: "Johssn", Lastname: "Don" },
  //   { id: 2,  firstName: "Umair", Lastname: "Ashraf" },
  //   { id: 3, firstName: "Owais", Lastname: "Aslam" },
  // ];

  //   res.json(cusotmers);
  // });

  //insert
  let x1 = req.body;

  var person = { email: x1.name, password: x1.password };

  connection.query("INSERT INTO users SET ?", person, function (err, results) {
    if (err) throw err;
    console.log(results);
  });

  //query
  let q = "SELECT * from users";
  connection.query(q, function (err, results) {
    if (err) throw err;
    res.json(results);
  });
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

const port = 5000;
app.listen(port, "localhost", "localhost", () =>
  console.log(`server started on port${port}`)
);
