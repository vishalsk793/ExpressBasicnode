var app = require('./config/server.config');
var Register = require('./models/models.students');

app.get('/', function(req, res) {
    // res.send('Welcome to Express!');
    res.render('login', { "title": "User Login" });
});

app.post('/', function(req, res) {
    let stud_name = req.body.stud_name;
    res.send(stud_name + ' Welcome to MCA Dept!');
});

app.post('/add', function(req, res) {
    let operand1 = req.body.operand1;
    let operand2 = req.body.operand2;
    let result = operand1 + operand2;
    res.send('Result of Addition is : ' + result);
});

app.post('/register', function(req, res, next) {
    var registerStudent = new Register(req.body);
    registerStudent.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(registerStudent);
        }
    });
});




app.post('/update_student', function(req, res, next) {
    var updateStudent = new Register();
    var email = req.body.email;
    var firstName = req.body.firstName;
    updateStudent.updateOne({ "email": email }, { "firstName": firstName }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});