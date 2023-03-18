var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', function(req,res) {
    res.render('index.html');
});

function Addition(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}
function Subtraction(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function Multiplication(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}
function Division(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

function Modulus(num1, num2) {
    return parseInt(num1) % parseInt(num2);
}

app.get('/addTwoNumbers', (req, res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = Addition(number1, number2);
    res.json({statusCode:200, data:result, message: 'Success'});
});

app.get('/subractTwoNumbers', (req, res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = Subraction(number1, number2);
    res.json({statusCode:200, data:result, message: 'Success'});
});

app.get('/multiplyTwoNumbers', (req, res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = Multiplication(number1, number2);
    res.json({statusCode:200, data:result, message: 'Success'});
});

app.get('/divideTwoNumbers', (req, res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = Division(number1, number2);
    res.json({statusCode:200, data:result, message: 'Success'});
});

app.get('/moduloTwoNumbers', (req, res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = Modulus(number1, number2);
    res.json({statusCode:200, data:result, message: 'Success'});
});


app.listen(port, () => {
    console.log('App listening to: '+ port);
});