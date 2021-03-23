const express = require('express');

const appRootPath = require('./util/path');

const path  = require('path');

const app = express();

// app.use(express.static('public'));


// give accesss to public files like style.css and custom.js
app.use(express.static(path.join(appRootPath, 'public')));


const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',shopRoute);
app.use('/admin',adminRoute); 
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'));
})
app.listen(3000,function(){
    console.log(`App is running on the 3000 port`);
})