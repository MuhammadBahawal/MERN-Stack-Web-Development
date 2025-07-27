const path = require('path');
const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    fs.readdir('./files', (err, files) => {
        if (err) return res.send('Error reading files');
        res.render('index', { files: files });
    });
});

app.get('/file/:filename', (req, res) => {
    fs.readFile(path.join(__dirname, 'files', req.params.filename), "utf8", (err, data) => {
        if (err) return res.send("Error reading file");

        res.render('show', {
            filename: req.params.filename,
            content: data
        });
    });
});
app.get('/edit/:filename', (req, res) => {
    res.render('edit', { filename: req.params.filename });
});

app.post('/edit', (req, res) => {
    const oldName = req.body.previous;
    let newName = req.body.new;

    if (!newName.endsWith('.txt')) {
        newName += '.txt';
    }

    const oldPath = path.join(__dirname, 'files', oldName);
    const newPath = path.join(__dirname, 'files', newName);

    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            return res.send(' Error renaming file. It might already exist or name is invalid.');
        }
        res.redirect('/');
    });
});




app.post('/create', (req, res) => {
    const { title, detail } = req.body;

    const filePath = path.join(__dirname, 'files', `${title}.txt`);
    fs.writeFile(filePath, detail, (err) => {
        if (err) return res.send('Error creating file');
        res.redirect('/');
    });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
