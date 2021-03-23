const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/',(req, res, next)=>{
    console.log('This is the another middle ware.');
    // res.type('html')
    // res.status(200);
    // res.status(200).send(`
    //     <h1 style="text-align: center;">Welcome to mcommerce</h1>
    // `);

    res.status(200).sendFile(
        path.join(__dirname,'../','views','shop.html')
    )
});

module.exports = router;