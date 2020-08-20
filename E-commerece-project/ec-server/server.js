// bring in express
const express = require("express");
const mysqlx = require("mysql");
const jwt = require("jsonwebtoken");
const auth = require("./verifyTokenExisting");
const authNew = require("./verifyTokenNew");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const pdf = require("html-pdf");
const pdfTemplate = require("./documents/pdfTemplate");
const fs = require("fs");

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
  host: "database-1.cjnxyreiymo1.eu-west-2.rds.amazonaws.com",
  user: "root",
  password: "Skyliner007!",

  //  host: "localhost",
  //  user: "root",
  //  password: "password",

  database: "join_us",
  insecureAuth: true,
});
// if he get request at :TODO  http://localhost:5000/signin then it will response to it
//? 1
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
      console.log("typess", typeof results);
      console.log("57namne", results);
      if (err) {
        throw err;
      } else {
        let results1 = JSON.stringify(results);
        console.log(results); // showing the table
        res.send(results1);
        process.exit(); // to finihs the connection otherwise it will wait forever
      }
    }
  );
});

////!   FInal INVOICE(Query only)
//?2
app.post("/api/invoice-only", (req, res) => {
  let token = req.cookies.yogaoutlet_access_token;
  if (token) {
    let Invoice_No_Actual = req.body.invoice_Name;
    fs.readFile(`${__dirname}\\` + `${Invoice_No_Actual}` + `.pdf`, (err, data) => {
      if (err) res.status(500).send(err);
      else {
        console.log(data);
        res.contentType("buffer");
        //   res.contentType("arraybuffer");
        //("Content-disposition", "attachment; filename=" + `${__dirname}\\` + `${Invoice_No_Actual}` + `.pdf`);
        res.send(`data:application/pdf;base64,${new Buffer.from(data).toString("base64")}`);
      }
    });
  }
});

//! when refresh signin page
//?3
app.post("/api/invoice-all", (req, res) => {
  let token = req.cookies.yogaoutlet_access_token;
  let decodepayload = jwt.verify(token, "lllfasdgfdadsfasdfdasfcadsf");
  let userIdentitiy = decodepayload.email;
  const user_info = connection.query("SELECT user_id FROM  users WHERE email=?;", [userIdentitiy], function (err, results) {
    let user_id = results[0].user_id;
    // let user_email = userIdentitiy;

    connection.query("SELECT * FROM  users_Basket WHERE users_user_id=?;", [user_id], function (err, results) {
      if (err) console.log("Error", err);
      else {
        console.log("1578", results);
        //  let invoice_Object = json.stringify(results);
        res.json(results);
      }
    });
  });
});
////!  FInal INVOICE

app.post("/api/invoice", (req, res) => {
  let token = req.cookies.yogaoutlet_access_token;
  let selectedProducts = req.body.length;
  console.log("body11x", token);

  console.log("data111", req.body.length);
  console.log("data111body", req.body);
  let decodepayload = jwt.verify(token, "lllfasdgfdadsfasdfdasfcadsf");
  console.log("decodepayload", decodepayload);
  let userIdentitiy = decodepayload.email;

  if (token && req.body.length > 0) {
    let actaul_Bought_Items = req.body;
    let actaul_Bought_Items_Num = req.body[0].quantity;

    console.log("78xx", `${decodepayload.email}`); // confirm the user detail email
    console.log("83xx", userIdentitiy);
    console.log("body11y", req.body);
    let z1 = req.body;
    console.log("hey", z1);
    // unavailableItems will fill up if any item is unavailable
    let unavailableItems = [];

    for (let i = 0; i < req.body.length; i++) {
      let checkQuantity = req.body[i].producNumber;
      console.log("wwer", checkQuantity);
      console.log("wwerx", actaul_Bought_Items_Num);
      for (let i = 0; i < actaul_Bought_Items_Num; i++) {
        connection.query("UPDATE main_Product_Info SET stockQuantity=stockQuantity-1 WHERE main_Product_Info.producNumber=?", [checkQuantity], function (err, result) {
          if (err) {
            console.log("3345", err);
            unavailableItems.push(req.body[i]);
          } else console.log("ffgt", result);
        });
      }
    }

    // get the user_user_id

    const user_info = connection.query("SELECT user_id FROM  users WHERE email=?;", [userIdentitiy], function (err, results) {
      let user_id = results[0].user_id;
      let user_email = userIdentitiy;

      console.log("heyc", user_id);
      console.log("heyxx", user_email);
      console.log("2334", unavailableItems);
      // we now got the correct users
      if (user_id && unavailableItems[0] == null) {
        //1- delete the   quantitiy from the product info
        // create users_Basket(by submitting email and userID ) and generate the inovice number for this Transaction

        // how exports. ? works
        function Invoice_No(callback) {
          connection.query(" INSERT INTO users_Basket  SET ? ", { users_user_id: user_id, users_email: user_email }, function (err, results) {});
          let latest_inoice_new;
          connection.query("Select max(invoiceNo) AS latest_Invoice from users_Basket", function (err, latest_invoice) {
            console.log("116tty", latest_invoice);
            latest_inoice_new = latest_invoice[0].latest_Invoice;
            console.log("116tty", latest_invoice[0].latest_Invoice);
            callback(latest_invoice[0].latest_Invoice);
          });
        }

        let Invoice_No_Per_Trasaction = Invoice_No(function (value) {
          connection.query(
            "SELECT u1.first_name,u1.user_id,b1.invoiceNo FROM  users u1 INNER JOIN users_Basket b1 ON b1.users_user_id=u1.user_id where b1.invoiceNo=?; ",
            [value],
            function (err, results) {
              if (err) {
                console.log("133", err);
              } else {
                console.log("135", results); //RowDataPacket { invoiceNo: 1 },. ....
                Invoice_No_latest = results[0].latest_Invoice;
                let user_details = {
                  user_FirstName: results[0].first_name,
                  user_email: userIdentitiy,
                  Invoice_No_latest: results[0].invoiceNo,
                  user_id: results[0].user_id,
                };
                let customer_dataand_Itemsbought = [user_details, ...actaul_Bought_Items];
                console.log("123ddf", user_details);
                console.log("123ddf", typeof user_details);
                console.log("133", actaul_Bought_Items);
                console.log("133", typeof actaul_Bought_Items);
                console.log("135xc", customer_dataand_Itemsbought);
                //    options={format:'letter'};

                console.log("146xc", user_details);
                console.log("475xc", user_details.Invoice_No_latest);
                pdf
                  .create(pdfTemplate(customer_dataand_Itemsbought), { type: "pdf" })
                  .toFile(`./${user_details.user_id}` + `_` + `${user_details.Invoice_No_latest}.pdf`, function (err, res) {
                    if (err) {
                      console.log("5667", err);
                    } else console.log("143rrt", res, typeof res);
                    connection.query("UPDATE users_Basket set invoice_document=? WHERE invoiceNo=?;", [res.filename, user_details.Invoice_No_latest], function (err, results) {
                      if (err) console.log("tty", err);
                      else console.log("151ddf", results);
                    });
                  });
                console.log("145", user_details.Invoice_No_latest);

                connection.query("SELECT * FROM  users_Basket WHERE users_user_id=?;", [user_id], function (err, results) {
                  if (err) throw err;
                  else {
                    console.log("1578", results);
                    //  let invoice_Object = json.stringify(results);
                    res.json(results);
                  }
                });
              }
            }
          );
        });
      }
    });
  }
  // } else {
  //   const user_info = connection.query("SELECT user_id FROM  users WHERE email=?;", [userIdentitiy], function (err, results) {
  //     let user_id = results[0].user_id;
  //     connection.query("SELECT * FROM  users_Basket WHERE users_user_id=?;", [user_id], function (err, results) {
  //       if (err) throw err;
  //       else {
  //         console.log("1578", results);
  //         //  let invoice_Object = json.stringify(results);
  //         res.json(results);
  //       }
  //     });
  //   });
  // }
});

//// ! REGISTER

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

  res.json("results");
});

//!  when clicked on signin page to verify after signin/

app.post("/api/verifyifloginalready", (req, res) => {
  let token = req.cookies.yogaoutlet_access_token;
  //

  if (!token) {
    return res.status(401).end();
  }

  let decodepayload;

  try {
    decodepayload = jwt.verify(token, "lllfasdgfdadsfasdfdasfcadsf");

    console.log("gffd", decodepayload);
    console.log(decodepayload.email);
    console.log("w94", `${decodepayload.email}`);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      //?https://www.sohamkamani.com/blog/javascript/2019-03-29-node-jwt-authentication/
      // if invalid token
      Console.log("22234");
      res.status(401).end();
    } else {
      res.status(400).end();
    }
  }
  connection.query("SELECT * FROM  users WHERE email=?;", [decodepayload.email], function (err, results) {
    res.json(results);
  });
});

////!  LOGIN & LOGOUT

app.post("/api/newuser", (req, res) => {
  let x1 = req.body;
  console.log("144", x1);

  if (req.body.logout === false) {
    connection.query("SELECT * FROM  users WHERE email=?;", [x1.email], function (err, results) {
      console.log(results);
      console.log("150new", results[0].email);
      console.log("151", results[0].email);
      if (err) console.log("13333", err);
      else {
        if (results[0].email && results[0].password) {
          //  console.log("79", results[0].email);

          //below if the user and paswword is correct == to do user is not already logedin
          //TODO chage the default userloginStatus to false rather null & on logout change to flase flag

          if ((results[0].password == x1.password && results[0].userloginStatus == true) || (results[0].password == x1.password && results[0].userloginStatus == null)) {
            //TODO: send user account details it like update the basket and user purchaee history
            const payload = { email: results[0].email };
            console.log("payloods", payload);
            //res.header("auth-token", token).send(token);
            const token = jwt.sign(payload, "lllfasdgfdadsfasdfdasfcadsf");
            //below are the cookies sent to user first time when he logsin
            res.cookie("yogaoutlet_access_token", token, {
              maxAge: 25 * 24 * 60 * 60 * 1000,
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
                console.log("233er", results);
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
  } else {
    console.log("339d", req);

    console.log("339f", req.body);

    const payload = { email: req.body.email };
    console.log("339x", payload);
    const token = jwt.sign(payload, "lllfasdgfdadsfasdfdasfcadsf");

    res.clearCookie("yogaoutlet_access_token");

    res
      .json({
        data: "User Logged out",
      })
      .end();
  }
});

//connection.end();
const port = process.env.PORT || 5000;
app.listen(port, "localhost", "localhost", () => console.log("port number",`server started on port${port}`));
