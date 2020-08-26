import React, { useState, useEffect } from "react";
import "../App.css";
import { makeStyle, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from "@material-ui/core";

function Useraccount({ userinfo, userstatus, allInvoices }) {
  

  let generateFile = (content, fileName) => {
     let content1 = content.slice(28);
     var decodedData = atob(content1);
    const length = decodedData.length;
    const arrayBuffer = new ArrayBuffer(length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < length; i++) {
      uintArray[i] = decodedData.charCodeAt(i);
    }
    const blob = new Blob([uintArray], { type: "application/pdf" });

     const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  const generatePdf = (invoice_Name) => {
    let invoice_Object = {
      invoice_Name: invoice_Name,
    };

    const headers = new Headers();
    headers.append("content-type", "application/json");
    headers.append("responseType", "bufferarray");
    const options = {
      method: "POST",
      headers,
      credentials: "include",
      body: JSON.stringify(invoice_Object),
    };
    const newRequest = new Request("https://yogaoutlet.herokuapp.com/api/invoice-only", options);

    (async () => {
      const invoice_Call = await fetch(newRequest)
        .then((res) => {
          var headers = res.headers;
 
          const contentType = res.headers.get("Content-Type");
           var contentDisposition = res.headers.get("content-disposition");
           
        })
        .then((data) => {
         
          generateFile(data, invoice_Name);
        })
        .catch((err) => {
         });
    })();
  };
  //
  let creatTime = userinfo[0].create_time || "0-0-0";
  console.log("ewr", creatTime);
  return (
    <>
      <div className="BasketSigninProducts," style={{ float: "left", marginTop: "50px", marginLeft: "30px", width: "130vh", marginBottom: "122px" }}>
        <TableContainer className="BasketSigninItems" component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="tex-lg-center font-weight-bold" style={{ fontSize: "200%", fontStyle: "normal", textAlign: "center" }}>
                  Invoice No
                </TableCell>
                <TableCell className="tex-lg-center font-weight-bold" style={{ fontSize: "200%", fontStyle: "normal", textAlign: "center" }}>
                  {" "}
                  Date of Purchase
                </TableCell>
                <TableCell className="tex-lg-center font-weight-bold" style={{ fontSize: "200%", fontStyle: "normal", textAlign: "center" }}>
                  {" "}
                  Price Paid
                </TableCell>
                <TableCell className="tex-lg-center font-weight-bold" style={{ fontSize: "200%", fontStyle: "normal", textAlign: "center" }}>
                  {" "}
                  Invoice
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allInvoices.map((eachInvoice, index) => {
                console.log("fdsg", eachInvoice);
                //   console.log("29oop", eachInvoice[index].invoice_document.data);
                let invoiceNo = eachInvoice.invoiceNo;
                let TBO1 = eachInvoice.totalprice;
                let date_of_purchase1 = eachInvoice.date_of_purchase;
                let users_user_id = eachInvoice.users_user_id;
                let invoice_Name = `${users_user_id}` + `_` + `${invoiceNo}`;
                console.log("fdsxg", invoice_Name);
                console.log("fdsxg", invoice_Name);
                return (
                  <TableRow key={invoiceNo}>
                    <TableCell
                      className="tex-lg-center font-weight-light"
                      style={{ fontSize: "200%", fontStyle: "oblique", textAlign: "center", borderRightStyle: "solid", borderRightColor: "#E2DBDB", borderRightWidth: "thin" }}
                    >
                      {invoiceNo}
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "200%", fontStyle: "oblique", textAlign: "center", borderRightStyle: "solid", borderRightColor: "#E2DBDB", borderRightWidth: "thin" }}
                    >
                      {date_of_purchase1.split("T", 1)[0]}
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "200%", fontStyle: "oblique", textAlign: "center", borderRightStyle: "solid", borderRightColor: "#E2DBDB", borderRightWidth: "thin" }}
                    >
                      {TBO1}
                    </TableCell>
                    <TableCell className="tex-lg-center font-weight-bold" style={{ fontFamily: "Myfont", fontSize: "200%", fontStyle: "oblique", textAlign: "center" }}>
                      <span
                        className="glyphicon glyphicon-cloud-download"
                        role="button"
                        tabIndex="-1"
                        onKeyDown={() => generatePdf(invoice_Name)}
                        onClick={() => generatePdf(invoice_Name)}
                      ></span>

                      
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ float: "right", paddingRight: "5rem" }}>
        <TableContainer
          className="signin-welcome"
          component={Paper}
          style={{ float: "right", top: "0", display: "flex", flexDirection: "column", maxHeight: "9vw", maxWidth: "14vw" }}
        >
          <Table className="basket-summary-inside">
            <TableHead>
              <TableRow>
                <TableCell className="tex-lg-center font-weight-bold" style={{ fontSize: "200%", fontStyle: "normal", textAlign: "Left" }}>
                  Account Details{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <tr>
                <td className="tex-lg-center font-weight-bold" style={{ fontSize: "130%", fontStyle: "normal", textAlign: "Left" }}>
                  Name:{userinfo[0].first_name}{" "}
                </td>
              </tr>
              <tr>
                <td className="tex-lg-center font-weight-bold" style={{ fontSize: "130%", fontStyle: "normal", textAlign: "Left" }}>
                  Account ID:{userinfo[0].user_id}{" "}
                </td>
              </tr>
              <tr>
                <td className="tex-lg-center font-weight-bold" style={{ fontSize: "130%", fontStyle: "normal", textAlign: "Left" }}>
                  email:{userinfo[0].email}{" "}
                </td>
              </tr>
              <tr>
                <td className="tex-lg-center font-weight-bold" style={{ fontSize: "130%", fontStyle: "normal", textAlign: "Left" }}>
                  Member since:{creatTime.split("T", 1)[0]}
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Useraccount;
