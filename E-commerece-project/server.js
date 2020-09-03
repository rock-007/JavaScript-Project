// bring in express
const fs = require("fs");
const express = require("express");
const mysqlx = require("mysql");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const pdf = require("html-pdf");
const pdfTemplate = require("./documents/pdfTemplate");
// const fs = require("fs");
const path = require("path");

 
const app = express();
 app.use(express.json());
app.use(cookieParser());

 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// it gives the ability to app to read json data
//connection.query(sql, function (error, results, fields) sample https://github.com/mysqljs/mysql#performing-queries
app.use(
  cors({
    credentials: true, // for cookies
     origin: true,
    optionsSuccessStatus: 200,
  })
);
let connection = mysqlx.createConnection({
  host: "database-1.cjnxyreiymo1.eu-west-2.rds.amazonaws.com",
  user: "root",
  password: "Skyliner007!",
   database: "join_us",
  insecureAuth: true,
});
<<<<<<< HEAD
// if he get request at :TODO  http://localhost:5000/signin then it will response to it
//? 1 TabSearch
=======
 //? 1 TabSearch
>>>>>>> 3aa2f162263d58ca7555717fe695fdd043964746
app.post("/api/x1", (req, res) => {
  console.log("NEwwwww");
  let tabSearch = req.body.selection;

  console.log("NEwwwww1", req.body);
  const decoded = { key1: req.params.abc }; //decode

  connection.query(
    "SELECT product_name,producNumber,price,productDescription,image_URL,stockQuantity FROM main_Products_sub_category  INNER JOIN main_Product_Info INNER JOIN images ON main_Products_sub_category.main_Products_sub_category_id= main_Product_Info.main_Products_sub_category_main_Products_sub_category_id AND main_Product_Info.producInfoId=images.main_Product_Info_producInfoId WHERE main_Products_sub_category.main_Products_sub_category_name=?;",
    [tabSearch],
    function (err, results) {
      // console.log(results);
      console.log("typess", typeof results);
      console.log("57namne", results);
      if (err) {
        let new1 = new Error("Doesnt exist");
        res.send(new1);
      } else {
        let results1 = JSON.stringify(results);
        //let result2 = JSON.stringify();
        console.log("3324x", results1); // showing the table
        res.send(results1);
        //res.json(results);
        //  process.exit(); // to finihs the connection otherwise it will wait forever
      }
    }
  );
});

////! Signup email only
app.post("/api/newsignupemail", (req, res) => {
  let token = req.cookies.yogaoutlet_access_token;
  let decodepayload = jwt.verify(token, "lllfasdgfdadsfasdfdasfcadsf");
  let userIdentitiy = decodepayload.email;

  //? to do update in the users account in mysql.
  // if user account exist then it will add to mailing list
  connection.query("UPDATE users SET signup_offers=? WHERE email=?", ["1", userIdentitiy], function (err, result) {
    if (err) {
      console.log("tta", err);
      res.send(err);
    } else {
      console.log("151ddfa", result);
      let results1 = JSON.stringify(result);
      res.send(results1);
    }
  });
});

////!   FInal INVOICE(Query only)

app.post("/api/invoice-only", (req, res) => {
  let token = req.cookies.yogaoutlet_access_token;
  if (token) {
    let Invoice_No_Actual = req.body.invoice_Name;
    // fs.readFile(`${__dirname}\\` + `${Invoice_No_Actual}` + `.pdf`, (err, data) => {

    fs.readFile(`${__dirname}/` + `${Invoice_No_Actual}` + `.pdf`, (err, data) => {
      if (err) {
        let address = `${__dirname}/` + `${Invoice_No_Actual}` + `.pdf`;
        console.log("err344add", address);

        console.log("err344", err);
        res.status(500).send(err);
      } else {
        console.log("data back", data);
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
        console.log("1578xz", results);
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

    let z1 = req.body;
    console.log("hey", z1);
    // unavailableItems will fill up if any item is unavailable
    let unavailableItems = [];
    let totalAmountPaidPerInvoice;
    let actaul_Bought_Items_names = [];
    for (let i = 0; i < req.body.length; i++) {
      let checkQuantity = req.body[i].producNumber;
      totalAmountPaidPerInvoice = totalAmountPaidPerInvoice + req.body[i].price;
      console.log("wwer", checkQuantity);
      console.log("wwerx", actaul_Bought_Items_Num);
      actaul_Bought_Items_names.push(actaul_Bought_Items[i].product_name);
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
    console.log("emailcc", userIdentitiy);

    const user_info = connection.query("SELECT user_id FROM  users WHERE email=?;", [userIdentitiy], function (err, results) {
      let user_id = results[0].user_id;
      let user_email = userIdentitiy;

      // we now got the correct users
      if (user_id && unavailableItems[0] == null) {
        //1- delete the   quantitiy from the product info
        // create users_Basket(by submitting email and userID ) and generate the inovice number for this Transaction
        console.log("usrid2334", user_id);

        // how exports. ? works
        function Invoice_No(callback) {
          connection.query(" INSERT INTO users_Basket  SET ? ", { users_user_id: user_id, users_email: user_email }, function (err, results) {});
          let latest_inoice_new;
          connection.query("Select max(invoiceNo) AS latest_Invoice from users_Basket", function (err, latest_invoice) {
            latest_inoice_new = latest_invoice[0].latest_Invoice;
            callback(latest_invoice[0].latest_Invoice);
          });
        }

        let Invoice_No_Per_Trasaction = Invoice_No(function (value) {
          connection.query(
            "SELECT u1.first_name,u1.user_id,b1.invoiceNo FROM  users u1 INNER JOIN users_Basket b1 ON b1.users_user_id=u1.user_id where b1.invoiceNo=?; ",
            [value],
            function (err, results) {
              const products_summary1 = actaul_Bought_Items_names.toString();
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
                //
                let customer_dataand_Itemsbought = [user_details, ...actaul_Bought_Items];
                let pdfCreated = false;
                pdf
                  .create(pdfTemplate(customer_dataand_Itemsbought), { type: "pdf" })
                  .toFile(`./${user_details.user_id}` + `_` + `${user_details.Invoice_No_latest}.pdf`, function (err, res) {
                    if (err) {
                      console.log("5667", err);
                    } else {
                      console.log("143rrt", res, typeof res);

                      pdfCreated = true;
                    }
                  });
                if ((pdfCreated = true)) {
                  connection.query(
                    "UPDATE users_Basket set invoice_document=?,products_summary=? WHERE invoiceNo=?;",
                    [res.filename, products_summary1, user_details.Invoice_No_latest],
                    function (err, results) {
                      if (err) console.log("tty", err);
                      else {
                        connection.query("SELECT * FROM  users_Basket WHERE users_user_id=?;", [user_id], function (err, results) {
                          if (err) {
                            pdfCreated = false;

                            throw err;
                          } else {
                            console.log("1578", results);
                            //  let invoice_Object = json.stringify(results);

                            //  results = [...results, { totalprice: `${totalAmountPaidPerInvoice}` }];
                            pdfCreated = false;
                            res.json(results);
                          }
                        });

                        console.log("151ddf", results);
                      }
                    }
                  );
                }

                console.log("145", user_details.Invoice_No_latest);
              }
            }
          );
        });
      }
    });
  }
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

          if ((results[0].password == x1.password && results[0].userloginStatus == false) || (results[0].password == x1.password && results[0].userloginStatus == null)) {
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
        } else res.redirect("https://yogaoutlet.herokuapp.com/");
      }
    });
  } else {
    connection.query(
      "UPDATE  users SET userloginStatus=? WHERE email=?",
      // hardcoding userloginStatus=1 to show the use is loggedin
      ["0", x1.email],
      function (err, results) {
        if (err) throw err;
        console.log("23x3er", results);
      }
    );
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
//var http = require("http");
//var server = http.server(app);
app.listen(port, () => console.log("port number", `server started on port${port}`));
