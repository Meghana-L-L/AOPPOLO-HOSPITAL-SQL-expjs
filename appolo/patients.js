var express = require('express');
var patient = express.Router();

patient.get('/', function(req, res){

    var patientDetails = [

        {patientName:"M.Rajesh", age:60, gender:"male", address:"H.No.11-11/3, Tej Towers", room_no:200},
        {patientName:"M.Ganesh", age:50, gender:"male", address:"H.No.22-11/4, Hotel City", room_no:201},
        {patientName:"M.Upendra", age:48, gender:"male", address:"H.No.1-7/3, Navi Mumbai", room_no:202},
        {patientName:"L.Sitara", age:48, gender:"female", address:"H.No.1-9/3, New Delhi", room_no:203},
        {patientName:"M.Thanesh", age:60, gender:"male", address:"H.No.10-16/7, Chandni Chowk", room_no:204},
        {patientName:"J.Kiranmai", age:40, gender:"female", address:"H.No.3-11/5, Gandhi Towers", room_no:205}

    ];

    res.send(patientDetails);

});

module.exports = patient;