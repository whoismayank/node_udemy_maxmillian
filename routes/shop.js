const express = require('express');
const path = require('path');
const router = express.Router();

const appRootPath = require('../util/path');


router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));    
    res.sendFile(path.join(appRootPath,'views','shop.html'));
})

module.exports = router;