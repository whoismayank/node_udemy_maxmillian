const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log('This is the first middle ware.');
    next();
});

app.use((req, res, next)=>{
    console.log('This is the another middle ware.');
    // res.type('html')
    // res.status(200);
    res.send('<h1 style="text-align: center;">Hello from express</h1>');
})

app.listen(3000,()=>{
    console.log('App is runnig on the port 3000');
})

