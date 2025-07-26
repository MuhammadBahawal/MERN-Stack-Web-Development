const path = require('path');
const express = require('express');
const { json } = require('stream/consumers');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.post('/user', (req, res) => {

    console.log(req.body);

    res.status(200).send(`Data Receieved: ${JSON.stringify(req.body)}`);


})

app.get('/register', (req, res) => {
    res.status(200).send(
        `<form method="POST" action="/submit">
      <input type="text" name="user[name]" placeholder="Enter your name" />
      <input type="email" name="user[email]" placeholder="Enter your email" />
      <input type="date" name="user[age]" placeholder="Enter your age" />
      <button type="submit">Submit</button>
    </form>`
    )



})
app.post('/submit', (req, res) => {
    console.log(req.body); 
    res.send(`Hello ${req.body.user.name},<br/> your email is ${req.body.user.email}
        
    <br/>
    ${req.body.user.age}
    `

    );
});










app.listen(3000, () => {
    console.log('server is running on port 3000');

})