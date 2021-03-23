const express = require('express');
const appRootPath = require('../util/path');
const path = require('path');
const router = express.Router();

router.get('/add-product',(req, res) => {
        // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
        res.sendFile(path.join(appRootPath, 'views', 'add-product.html'));
    })


router.post('/product',(req,res)=>{
    res.send(req.body);
})

module.exports = router;