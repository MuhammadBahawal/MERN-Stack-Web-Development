const path = require('path');
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("this is a home page");
})
app.get('/profile/:username',(req,res)=>{
    res.send(req.params.username);
    
})
app.get('/blog/:year/:month/:title',(req,res)=>{
    res.send(req.params);
    
})
app.get('/products',(req,res)=>{
    const category = req.query.category;
    const price = req.query.price;
    const brand = req.query.brand;
    res.status(200).send(`category is ${category} and price is ${price} and also brand is${brand}`);

})






app.listen(3000,()=>{
    console.log('server is running on port 3000');
    
})

