var express = require('express');
var app = express();

var doctors = require('./appolo/doctors');
var patients = require('./appolo/patients');
var pharmacy = require('./appolo/pharmacy');
var staff = require('./appolo/staff');

app.use('/doctor', doctors);
app.use('/patient', patients);
app.use('/pharmacy', pharmacy);
app.use('/staff', staff);

app.get('/', function(req, res) {
    res.send("Apollo Hospital Management System");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});