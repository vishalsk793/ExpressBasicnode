var express = require('express');
var app=express();

// app.use(function (req,res)
// {
//    res.send('welcome to Express JS');
// });

app.set('student','i am a Student');
app.set('admin',' i am an Administrator');

app.use('/student',function (req,res)
{
   res.send('welcome to Express JS-' +app.get('student'));
});

app.use('/admin',function (req,res)
{
   res.send('welcome to Express JS-' +app.get('admin'));
});

let member_name = '';
app.param('name',function(req,res,next,name) {
    member_name = name;
    next();
});

app.use('/staff',function (req,res)
{
   res.send('welcome to MCA DEPARTMENT' + member_name);
});



app.listen(3000);
console.log('server started');