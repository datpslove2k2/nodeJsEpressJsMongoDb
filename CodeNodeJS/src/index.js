const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

const db = require('./config/db');
// Connect DB
db.connect();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
// app.use(morgan('combined'));
// Template engine

app.engine('hbs',hbs.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
  }),
);
// helpers: {
//     sum: (a, b) => a + b,
// }

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


// check 
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// 127.0.0.1
app.listen(port, () => {
    console.log(`App Listening at ${port}`);
});
// routes init
route(app);
