import React, { useState, useEffect } from "react";
import "../App.css";
import { makeStyle, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from "@material-ui/core";
function Useraccount({ userinfo, userstatus, allInvoices }) {
  let allPdf = [];

  allInvoices.map((datax) => {
    let onlypdf = datax.invoice_document;

    allPdf.push(onlypdf);
  });
  console.log(allPdf);

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
                console.log(eachInvoice);
                let invoiceNo1 = eachInvoice.invoiceNo;
                let date_of_purchase1 = eachInvoice.date_of_purchase;

                return (
                  <TableRow key={invoiceNo1}>
                    <TableCell>{invoiceNo1}</TableCell>
                    <TableCell>{date_of_purchase1}</TableCell>
                    <TableCell>TBO</TableCell>
                    <TableCell>
                      <a href="#" download={allPdf[index]}>
                        invoiceNo:{invoiceNo1}
                      </a>
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
