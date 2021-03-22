const express = require('express');
const path = require('path');

const app = express();
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
// const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// // for parsing application/json
// app.use(bodyParser.json()); 
// // for parsing application/xwww-
// app.use(bodyParser.urlencoded({ extended: true })); 

// router to custom routers
app.use('/admin',adminRouter);
app.use(shopRouter);


// manage 404 request
app.use((req,res,next)=>{
    res.status(404).sendFile(
        path.join(__dirname,'/','views','404.html')
    )
})



app.listen(3000,()=>{
    console.log('App is runnig on the port 3000');
})

// 