const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use (cors ({ origin: '*', }));

const config = require('./config/configEnv')

app.engine('.html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'app', 'html'));
app.set('view engine', 'html');
console.log(__dirname);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('app', 'public')));

app.use(express.static(path.join(__dirname, 'views')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});

module.exports = app;
