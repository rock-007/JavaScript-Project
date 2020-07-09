const credentialVerify = (event) => {
  event.preventDefault();
  console.log(event);
  console.log("event");

  //post construction, after the set name nad set password updated it will get send here
  const dataSend = { Email: Email, password: password };
  // creating header to make sure we are sending the JSON format
  const headers = new Headers();
  headers.append("content-type", "application/json");

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(dataSend), // here datassend is object so first convert the data into object before stingify
    // redirect: "follow",
    // we need to include credentails if not then the cookies will not be recieved or sent
    credentials: "include",
  };
  const request = new Request("http://localhost:5000/api/newuser", options);



  (async () => {
    const incomingdata = await fetch(request)
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status < 400) {
          window.location.href = "http://localhost:3000/";
        } else {
          return res.json();
        }
      })
      .then((body) => {
        return body;
      })
      .catch((err) => console.log("err"));

    setItems(incomingdata);
  })();
};
