const path = require('path');
const express = require('express');
const fs = require('fs')

const router = express.Router();

// to show form on the front
router.use('/add-product',(req, res, next)=>{
    console.log('This is the first middle ware.');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

// to get form data 
router.post('/product', function (req, res) {
    console.log(req.body);
    res.redirect('/');
});
    

module.exports = router;