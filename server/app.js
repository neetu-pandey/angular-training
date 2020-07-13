var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// GET method route
var data = {};
app.get('/api/users', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'employees.json'));
});

app.get('/api/states', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'states.json'));
});

app.get('/api/customers', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'customers.json'));
});

app.get('/api/students', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'students.json'));
});

app.get('/api/students/:studentId', function (req, res) {
  const result = filterStudent(req.params.studentId);
  res.send(result[0]);
});

function filterStudent(studentId) {
  var filePath = path.join(__dirname, '.', 'students.json');
  var obj = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  var dataToFilter = obj['Students'];
  return dataToFilter.filter(student => student.id == studentId);
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
