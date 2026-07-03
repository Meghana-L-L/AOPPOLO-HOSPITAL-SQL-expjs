var express = require('express');
var doc = express.Router();

doc.get('/', function(req, res){

    var doctorDetails = [

        {docName:"Ravi", ID:111, speciality:"Psychiatry", available:true},
        {docName:"S.Giri", ID:112, speciality:"Dermatology", available:true},
        {docName:"A.Sudha", ID:113, speciality:"Cardiology", available:false},
        {docName:"L.Sita", ID:114, speciality:"Anesthesiology", available:true},
        {docName:"K.Khan", ID:115, speciality:"Neurologist", available:false},
        {docName:"J.Kiran", ID:116, speciality:"General Checkup", available:true}

    ];

    res.send(doctorDetails);

});

module.exports = doc;