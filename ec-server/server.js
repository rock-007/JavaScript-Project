// bring in express
const express = require("express");
const mysqlx = require("mysql");
const jwt = require("jsonwebtoken");
const auth = require("./verifyTokenExisting");
const authNew = require("./verifyTokenNew");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// initialise express and bind to app conastant so can be used later in the coding
const app = express();
// add the route to the server , when called from the react Frontend page at port 5000 when it is listening
app.use(express.json());
app.use(cookieParser());

// it gives the ability to app to read json data

app.use(
  cors({
    credentials: true, // for cookies
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
let connection = mysqlx.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "join_us",
  insecureAuth: true,
});
// if he get request at http://localhost:5000/signin then it will response to it

/////////////////Register//////////////////////////////////////////////////////Register////////////////////////////////////////////////////////////

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
    console.log("46", results);
  });

  //query
  //  let q = "SELECT * from users";
  // connection.query(q, function (err, results) {
  //   if (err) throw err;
  //res.json(results);

  res.redirect("http://localhost:3000/signin");
  //});
});

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

// when clicked on signin page

app.post("/api/verifyifloginalready", (req, res) => {
  let token = req.cookies.access_token;
  //

  if (!token) {
    return res.status(401).end();
  }

  let decodepayload;

  try {
    decodepayload = jwt.verify(token, "lllfasdgfdadsfasdfdasfcadsf");

    console.log(decodepayload);
    console.log(decodepayload.email);
    console.log("94", `${decodepayload.email}`);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      //https://www.sohamkamani.com/blog/javascript/2019-03-29-node-jwt-authentication/
      // invalid token
      res.status(401).end();
    } else {
      res.status(400).end();
    }
  }
  // res.send(`Welcome ${decodeemail}!`);
  res.json({
    data: `Welcome ${decodepayload.email}!`,
    // data: "hi",
  });
});

/////////////////Login//////////////////////////////////////////////////////Login////////////////////////////////////////////////////////////

app.post("/api/newuser", (req, res) => {
  let x1 = req.body;

  // var person = {
  //   email: x1.Email,
  //   //  password: x1.password,
  // };
  console.log("81", x1);

  connection.query("SELECT * FROM  users WHERE email=?;", [x1.Email], function (
    err,
    results
  ) {
    console.log("89new", results[0].email);
    console.log("87", results[0].email);
    // const token =JWT.sign(payload,secret)

    // console.log("74", results, err);
    // console.log("92", results[0].email);
    // console.log("93", JSON.stringify(results));
    // console.log("93", JSON.parse(JSON.stringify(results)));
    // console.log("94", JSON.parse(JSON.stringify(results))[0]);
    // console.log("95", JSON.parse(JSON.stringify(results))[0].email);
    if (err) throw err;
    else {
      if (results[0].email && results[0].password) {
        //  console.log("79", results[0].email);

        //below if the user and paswword is correct == to do user is not already logedin
        if (
          results[0].password == x1.password &&
          results[0].userloginStatus == false
        ) {
          const payload = { email: results[0].email };
          //res.header("auth-token", token).send(token);
          const token = jwt.sign(payload, "lllfasdgfdadsfasdfdasfcadsf");
          res.cookie("access_token", token, {
            maxAge: 2 * 24 * 60 * 60 * 1000,
            httpOnly: true, // it will enable on frotend-javascript to not have access to cokkies
            // secure:true ................. when in production
          });

          res.status(200).end();

          // update the userloginStatus to true for this user
          connection.query(
            "UPDATE  users SET userloginStatus=? WHERE email=?",
            // hardcoding userloginStatus=1 to show the use is loggedin
            ["1", results[0].email],
            function (err, results) {
              if (err) throw err;
              console.log(results);
            }
          );
        } else {
          res.json({
            data: "invalid  password",
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
