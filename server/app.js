const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);


const index = require('./routes/index');

const PORT = 3001;
const app = express();


app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

app.use(
    session({
      name:'sid',
      store: new FileStore({}),
      saveUninitialized: false,
      secret: 'lalalalal',
      resave: false,
    })
);


app.use('/', index);

app.listen(PORT, () => {
    console.log('Server start on port ', PORT)
})
