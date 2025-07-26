const express = require('express');
const app = express();


// midle wware that use for authentication on profile route
const check = (req,res,next)=>{
    let isauth = true;
    if(isauth){
        console.log("user authenticated");
        next();
    }else{
        console.log("User not authenticated");
        res.status(403).send("wrong cridentials")
    }
}

// midleware that use for all routs 
app.use((req,res,next)=>{
    let a = new Date();
    console.log(`${a.toLocaleString()} this is method ${req.method} this is url ${req.url}`);
    next();
});
app.get('/',(req,res)=>{
    res.send("hello this is home ")
})
app.get('/about',(req,res)=>{
    res.send("hello this is about page ")
})
app.get('/profile',check,(req,res)=>{
    res.send("hello this is profile page ")
})

app.get('/error',(req,res,next)=>{
    const err = new Error("something went wrong")
    console.error(err.stack);
    next(err);
})

app.use((err,req,res,next)=>{
    res.status(err.status||500).json({
        success:"false",
        message:err.message,
    })
});


// for other routs 
app.use((req,res)=>{
    if(req.url=='*'){
        res.status(404).send("invalid route")
    }
})

app.listen(3000,()=>{console.log(`server is running opn 3000 port`)
});
