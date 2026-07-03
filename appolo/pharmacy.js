var express = require('express');
var drug = express.Router();

drug.get('/', function(req, res){

    var drugDetails = [

        {drugName:"Atorvastatin", price:600, drugClass:"Statins", rowColumn:"A43"},
        {drugName:"Lisinopril", price:350, drugClass:"ACE Inhibitors", rowColumn:"A34"},
        {drugName:"Metformin", price:700, drugClass:"Biguanides", rowColumn:"A35"},
        {drugName:"Amlodipine", price:216, drugClass:"Calcium Channel Blockers", rowColumn:"A36"},
        {drugName:"Omeprazole", price:455, drugClass:"Proton Pump Inhibitors", rowColumn:"A37"},
        {drugName:"Albuterol", price:356, drugClass:"Short-Acting Beta Agonists (SABA)", rowColumn:"A38"}

    ];

    res.send(drugDetails);

});

module.exports = drug;