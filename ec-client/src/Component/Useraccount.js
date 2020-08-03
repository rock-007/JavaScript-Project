import React, { useState, useEffect } from "react";
import "../App.css";
import { makeStyle, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from "@material-ui/core";
function Useraccount({ userinfo, userstatus, allInvoices }) {
  console.log("6", userinfo, userstatus);
  console.log("6yy", userstatus);
  console.log("7yy", allInvoices);

  let generateFile = (content, fileName) => {
    console.log("content", content);
    // console.log("contentx", typeof content);
    // let array1 = new Uint8Array(byteNumbers);
    // console.log("array11", array1);

    let content1 = content.slice(29);
    console.log("contentxx", content1);

    const blob = new Blob([content1], { type: "application/pdf" });

    console.log(blob);
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
    // headers.append("responseType", "blob");
    const options = {
      method: "POST",
      headers,
      credentials: "include",
      body: JSON.stringify(invoice_Object),

      // body: "My HTML String",
    };
    const newRequest = new Request("http://localhost:5000/api/invoice-only", options);

    (async () => {
      const invoice_Call = await fetch(newRequest)
        .then((res) => {
          var headers = res.headers;
          console.log("headersxx", headers);

          const contentType = res.headers.get("Content-Type");
          console.log("contenttype", contentType);
          var contentDisposition = res.headers.get("content-disposition");
          console.log("contentDispositionxx", contentDisposition);
          console.log("resxx", res);
          // let byteCharacters = atob(res.data);
          // console.log("byteCharacters", byteCharacters);
          // console.log("resxx", typeof res);

          //  const text1 = res.json({ data: decode });
          return res.text();
          //  console.log("resxxy", text1);
          // return res.blob();
        })
        .then((data) => {
          console.log(typeof data);
          console.log("textxx", data);
          generateFile(data, invoice_Name);
        });
    })();
  };

  return (
    <>
      <div className="BasketProducts" style={{ float: "left" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Invoice No </TableCell>
                <TableCell> Date of Purchase</TableCell>
                <TableCell> Description</TableCell>
                <TableCell> Invoice</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allInvoices.map((eachInvoice, index) => {
                console.log("fdsg", eachInvoice);
                //   console.log("29oop", eachInvoice[index].invoice_document.data);
                let invoiceNo = eachInvoice.invoiceNo;
                let date_of_purchase1 = eachInvoice.date_of_purchase;
                let users_user_id = eachInvoice.users_user_id;
                let invoice_Name = `${users_user_id}` + `_` + `${invoiceNo}`;
                console.log("fdsxg", invoice_Name);

                return (
                  <TableRow key={invoiceNo}>
                    <TableCell>{invoiceNo}</TableCell>
                    <TableCell>{date_of_purchase1}</TableCell>
                    <TableCell>TBO</TableCell>
                    <TableCell>
                      <span role="button" tabIndex="-1" onKeyDown={() => generatePdf(invoice_Name)} onClick={() => generatePdf(invoice_Name)}>
                        invoiceNo:{invoiceNo}
                      </span>

                      {/* <span role="button" tabIndex="-1" onKeyDown={() => generatePdf(allPdf[index], invoiceNo1)} onClick={() => generatePdf(allPdf[index], invoiceNo1)}>
                        invoiceNo:{invoiceNo1}
                      </span> */}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Useraccount;
