// bring in express
const express = require("express");
const mysqlx = require("mysql");
const jwt = require("jsonwebtoken");
const auth = require("./verifyTokenExisting");
const authNew = require("./verifyTokenNew");
// const searchrequest = require("./searchrequest");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const pdf = require("html-pdf");
const pdfTemplate = require("./documents/pdfTemplate");

// initialise express and bind to app conastant so can be used later in the coding //to create server= we have  to run express as function and resolve inside app variable
const app = express();
// add the route to the server , when called from the react Frontend page at port 5000 when it is listening
app.use(express.json());
app.use(cookieParser());

// it gives the ability to app to read json data
//connection.query(sql, function (error, results, fields) sample https://github.com/mysqljs/mysql#performing-queries
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
// if he get request at :TODO  http://localhost:5000/signin then it will response to it

app.get("/api/:abc", (req, res) => {
  const decoded = { key1: req.params.abc }; //decode
  console.log(typeof decoded);
  console.log("38new", decoded);
  console.log(typeof decoded.key1);
  console.log("41new", decoded.key1);
  //RegExp using positive lookbehind (?<=^...) it is checking that the match is after the three characters from the begin.
  let re = /(?<=^...)(.*)/;
  //let decoded_refine = re.remove(decoded.key1);
  let decoded_refine = decoded.key1.match(re);
  console.log("46new", decoded_refine);
  console.log("47new", typeof decoded_refine);
  console.log("48new", decoded_refine[0]);
  // Eco-YogaMats,.... decoded_refine[0]
  // var sql=

  connection.query(
    "SELECT product_name,producNumber,price,productDescription,image_URL,stockQuantity FROM main_Products_sub_category  INNER JOIN main_Product_Info INNER JOIN images ON main_Products_sub_category.main_Products_sub_category_id= main_Product_Info.main_Products_sub_category_main_Products_sub_category_id AND main_Product_Info.producInfoId=images.main_Product_Info_producInfoId WHERE main_Products_sub_category.main_Products_sub_category_name= ?",
    [decoded_refine[0]],
    function (err, results) {
      // console.log(results);
      console.log(typeof results);
      console.log("57namne", results);
      if (err) {
        throw err;
      } else {
        let results1 = JSON.stringify(results);
        console.log(results); // showing the table
        res.send(results1);
      }
    }
  );
});

// ! ///////////////// FInal INVOICE //////////////////////////////////////////////////////FInal INVOICE////////////////////////////////////////////////////////////

app.post("/api/invoice", (req, res) => {
  let token = req.cookies.access_token;
  let selectedProducts = req.body.length;
  console.log("body11x", token);

  console.log("data111", req.body.length);
  let decodepayload = jwt.verify(token, "lllfasdgfdadsfasdfdasfcadsf");
  console.log("decodepayload", decodepayload);

  if (token) {
    let userIdentitiy = decodepayload.email;

    console.log("78xx", `${decodepayload.email}`); // confirm the user detail email
    console.log("83xx", userIdentitiy);
    console.log("body11y", req.body);
    let z1 = req.body;
    console.log("hey", z1);
    // get the user_user_id

    const user_info = connection.query("SELECT user_id FROM  users WHERE email=?;", [userIdentitiy], function (err, results) {
      let user_id = results[0].user_id;
      let user_email = userIdentitiy;

      console.log("heyc", user_id);
      console.log("heyxx", user_email);

      // we now got the correct users
      if (user_id) {
        // create users_basket(by submitting email and userID ) and generate the inovice number for this Transaction

        console.log("103", user_email);
        connection.query(" INSERT INTO users_basket  SET ? ", { users_user_id: user_id, users_email: user_email }, function (err, results) {});
        async function Invoice_No() {
          connection.query("SELECT invoiceNo FROM  users_basket WHERE users_user_id=?;", [user_id], function (err, results) {
            return invoiceNo;
          });
        }
        let Invoice_No_Per_Trasaction = Invoice_No();
        let user_details = {
          user_FirstName: results[0].first_name,
          user_email: userIdentitiy,
          Invoice_No: Invoice_No_Per_Trasaction,
        };

        //pdf.create(pdfTemplate([user_FirstName]));
        console.log("118", user_details);
      }
    });
  }
});

// ! ///////////////// REGISTER //////////////////////////////////////////////////////Register////////////////////////////////////////////////////////////

app.post("/api/customers", (req, res) => {
  let x1 = req.body;

  var person = {
    email: x1.email,
    first_name: x1.FirstName,
    last_name: x1.LastName,
    password: x1.password,
  };

  connection.query("INSERT INTO users SET ?", person, function (err, results) {
    if (err) console.log(err);
    console.log("46", results);
  });

  //query
  //  let q = "SELECT * from users";
  // connection.query(q, function (err, results) {
  //   if (err) throw err;
  res.json("results");
  //res.send("sadsdas");
  //  res.redirect("http://localhost:3000/signin");
  //});
});

// app.get("api/#/Eco-YogaMats", (req, res) => {
//   // const userSelection = req.params.selection; // can also be params.[selection].split if multiple together

//   console.log(38, " userSelection");
//   res.end();
// });
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

//?  when clicked on signin page/////////////////////////////////////////////////////////////////

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

//* /////////////////LOGIN//////////////////////////////////////////////////////Login////////////////////////////////////////////////////////////

app.post("/api/newuser", (req, res) => {
  let x1 = req.body;

  // var person = {
  //   email: x1.Email,
  //   //  password: x1.password,
  // };
  console.log("144", x1);

  connection.query("SELECT * FROM  users WHERE email=?;", [x1.Email], function (err, results) {
    console.log(results);
    console.log("150new", results[0].email);
    console.log("151", results[0].email);
    // const token =JWT.sign(payload,secret)
    // console.log("74", results, err);console.log("92", results[0].email);console.log("93", JSON.stringify(results)); ///console.log("93", JSON.parse(JSON.stringify(results)));console.log("94", JSON.parse(JSON.stringify(results))[0]);
    // console.log("95", JSON.parse(JSON.stringify(results))[0].email);

    if (err) throw err;
    else {
      if (results[0].email && results[0].password) {
        //  console.log("79", results[0].email);

        //below if the user and paswword is correct == to do user is not already logedin
        if (results[0].password == x1.password && results[0].userloginStatus == false) {
          //TODO: send user account details it like update the basket and user purchaee history
          const payload = { email: results[0].email };
          console.log(payload);
          //res.header("auth-token", token).send(token);
          const token = jwt.sign(payload, "lllfasdgfdadsfasdfdasfcadsf");
          res.cookie("access_token", token, {
            maxAge: 5 * 24 * 60 * 60 * 1000,
            httpOnly: true, // it will enable on frotend-javascript to not have access to cokkies
            // secure:true ................. when in production
          });

          res.status(200).end();

          // update the userloginStatus to true for this user
          connection.query(
            "UPDATE  users SET userloginStatus=? WHERE email=?",
            // hardcoding userloginStatus=1 to show the use is loggedin
            ["0", results[0].email],
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
app.listen(port, "localhost", "localhost", () => console.log(`server started on port${port}`));
