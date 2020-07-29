import React, { useState, useEffect } from "react";
import "../App.css";
import SigninOptions from "./SigninOptions";
import Useraccount from "./Useraccount";
import { savsAs } from "file-saver";

//import cookie from "react-cookies";

function Signin({ userData, userstatus, finalBuy, buyNow, resetBuynow }) {
  //const [siginalready, setifsignedin] = useState(false);

  const [allInvoices, setallInvoices] = useState([]);
  console.log(userData);
  console.log(userstatus);

  console.log(finalBuy);

  if (finalBuy != null && buyNow === true) {
    console.log("19xxc", finalBuy);
    resetBuynow(false);
    const headers = new Headers();
    headers.append("content-type", "application/json");
    // let token =localStorage.getItem()
    // this incase from local storage headers.append("Authorization",bearer"token")
    console.log(JSON.stringify(finalBuy));
    const options = {
      method: "POST",
      headers,
      credentials: "include",
      body: JSON.stringify(finalBuy),
    };

    const newRequest = new Request("http://localhost:5000/api/invoice", options);

    (async () => {
      const invoiceFetch = await fetch(newRequest)
        .then((data) => {
          console.log("32json", data);

          return data.json();
        })
        .then((data1) => {
          console.log("41", data1[110]);
          console.log("41", typeof data1);
          setallInvoices(data1);
        })
        .catch();
    })();
  }
  //else {"just fetch the old invoices"}
  // //initial userinfo is empty
  // const [userinfonew, setUserinfo] = useState([]);

  // useEffect(() => {
  //   credentailverify();
  // }, []);

  // let url = "http://localhost:5000/api/verifyifloginalready";

  // let options = {
  //   credentials: "include",
  //   method: "POST",
  // };

  // let verifyifloginalready = new Request(url, options);

  // let credentailverify = async () => {
  //   // x1 will take if true then it will extract the user email address
  //   const x1 = await fetch(verifyifloginalready)
  //     .then((res) => {
  //       if (res.status == 400 || res.status == 401) {
  //         //return console.log(res.status)
  //         return setifsignedin(false);
  //       } else {
  //         setifsignedin(true);

  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       let x = data.data;

  //       setUserinfo(data.data)
  //       console.log(userinfonew)
  //     })
  //     .catch((err) => console.log("err"));
  //   return x1;
  // };
  // console.log("outside",userinfonew)

  // const usecookies = cookie();

  // console.log(usecookies);

  // function is_logged_in() {
  //   let cookies_state = usecookies !== undefined && usecookies !== null;
  //   return cookies_state;
  // }

  // return (is_logged_in() ? <SigninOptions /> : <Useraccount />)
  //console.log("userinfo2 61 at signinmain",userstatus);

  // userinfo1="welcome to the Adam account"
  console.log(userData);
  return <div>{userstatus ? <Useraccount userinfo={userData} userstatus={userstatus} finalBuy={finalBuy} allInvoices={allInvoices} /> : <SigninOptions />}</div>;

  // <SigninOptions />
}
export default Signin;
