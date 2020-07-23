import React, { useState, useEffect } from "react";
import "../App.css";
import SigninOptions from "./SigninOptions";
import Useraccount from "./Useraccount";

//import cookie from "react-cookies";

function Signin({ userData, userstatus, finalBuy }) {
  //const [siginalready, setifsignedin] = useState(false);

  if (finalBuy) {
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
      let invoiceFetch = await fetch(newRequest).then().then().catch();
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
  return <div>{userstatus ? <Useraccount userinfo={userData} finalBuy={finalBuy} /> : <SigninOptions />}</div>;

  // <SigninOptions />
}
export default Signin;
