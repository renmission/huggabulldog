const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();


// engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// static foler
app.use(express.static(path.join(__dirname, 'public')))

// Routes
const home = require('./routes/home');

app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server start on port ${port}`) });