require('dotenv').config()
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);


const index = require('./routes/index');
const {idAndName} = require("./middleware/allMiddleware");

const PORT = 3001;
const app = express();


app.use(express.static(path.join(__dirname, 'build')))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: true, credentials: true,}));
app.use(cookieParser());

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
    credentials: true,

    origin: true,
}));
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "https://favour-exchange-project.herokuapp.com"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(
    session({
        name: 'sid',
        store: new FileStore(),
        saveUninitialized: false,
        secret: 'lalalalal',
        resave: false,
    })
);


app.use('/', idAndName, index);

app.listen(PORT, () => {
    console.log('Server start on port ', PORT)
})


// module.exports = app
