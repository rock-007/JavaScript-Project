// bring in express
const express = require('express');

// initialise express and bind to app conastant so can be used later in the coding
const app = express();
// add the route to the server , when called from the react Frontend page at port 5000 when it is listening

app.get('/api/customers', (req,res)=>{
// in real life it will usually come froma database like mysql,mongodb...
    const cusotmers =[
        {id:1, firstName:'John', Lastname:'Don'},
        {id:2, firstName:'Umair', Lastname:'Ashraf'},
        {id:3, firstName:'Owais', Lastname:'Aslam'}
    ];
    res.json(cusotmers);

});


// port where it can be listen on local host , dont use 3000 as it is default picked up by react
const port = 5000;

app.listen(port, () => console.log(`server started on port{port}`));
