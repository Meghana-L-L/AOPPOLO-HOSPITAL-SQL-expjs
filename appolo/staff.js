var express = require('express');
var staff = express.Router();

staff.get('/', function(req, res){

    var staffDetails = [

        {
            employee_name:"M.Rajesh Kumar",
            role:"Emergency Medical Technician",
            department:"Emergency Department",
            salary:25000
        },
        {
            employee_name:"S.Ganesh Chakravarthi",
            role:"Radiologic Technologist",
            department:"Radiology Department",
            salary:30000
        },
        {
            employee_name:"M.Upendra Naidu",
            role:"Clinical Pharmacist",
            department:"Pharmacy Department",
            salary:18000
        },
        {
            employee_name:"L.Sitara Devi",
            role:"Medical Laboratory",
            department:"Laboratory Department",
            salary:20000
        },
        {
            employee_name:"K.Thanesh Kumar",
            role:"Physical Therapist",
            department:"Physiotherapy Department",
            salary:22000
        },
        {
            employee_name:"J.Rani Kiran",
            role:"Registered Dietitian",
            department:"Nutrition Department",
            salary:21000
        }

    ];

    res.send(staffDetails);

});

module.exports = staff;