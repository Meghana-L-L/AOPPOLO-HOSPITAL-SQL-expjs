var express = require('express');
var Erp = express();
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'info123',
    database: 'xyz'
});

connection.connect(function(err){
    if(err){
        console.log("Connection Failed");
        throw err;
    }
    console.log("Connected to MySQL");
});

// 👇 Paste the doctor array HERE
var doctor = [
    [101,'Ramesh','Cardiologist'],
    [102,'Suresh','Neurologist'],
    [103,'Mahesh','Orthopedic'],
    [104,'Ganesh','ENT']
];
var sql = "INSERT INTO doctor VALUES ?";

connection.query(sql, [doctor], function(err, result){
    if(err) throw err;
    console.log("Doctor data inserted successfully");
});
var patients = [
    ['Rajesh',45,'male','No.11-11/3','Tej Towers',200],
    ['Ganesh',48,'male','No.22-11/4','Hotel City',201],
    ['Upendra',52,'male','No.1-7/3','Navi Mumbai',202],
    ['Sitara',43,'female','No.1-9/3','Delhi',203],
    ['M.Thanesh',60,'male','No.10-16/7','Chandni Chowk',204],
    ['J.Kiranmai',40,'female','No.3-11/5','Gandhi Tower',205]
];
var query1 = "INSERT INTO patients(patientName, age, gender, address, area, room_no) VALUES ?";

connection.query(query1, [patients], function(err, result){
    if(err)
        throw err;
    else
        console.log("Patient data inserted successfully");
});

const pharmacy = [
    ['Atorvastatin',600,'Statins','A43'],
    ['Lisinopril',350,'ACE inhibitors','A34'],
    ['Metformin',700,'Biguanides','A35'],
    ['Amlodipine',216,'Calcium channel blockers','A36'],
    ['Omeprazole',455,'Proton pump inhibitors','A37'],
    ['Albuterol',356,'Short-acting beta agonists (SABA)','A38']
];

var query2 = "INSERT INTO pharmacy(drugName,price,drugClass,rowColumn) VALUES ?";

connection.query(query2,[pharmacy],function(err,result){
    if(err)
        throw err;
    else
        console.log("Pharmacy data inserted successfully");
});


const staff = [
['M.Rajesh Kumar','Emergency Medical Technician','Emergency Department',25000],
['S.Ganesh Chakravarthi','Radiologic Technologist','Radiology Department',30000],
['M.Upendra Naidu','Clinical Pharmacist','Pharmacy Department',18000],
['L.Sitara Devi','Medical Laboratory','Laboratory Department',20000],
['K.Thanesh Kumar','Physical Therapist','Physiotherapy Department',22000],
['J.Rani Kiran','Registered Dietitian','Nutrition Department',21000]
];

var query3 = "INSERT INTO staff(employee_name, role, department, salary) VALUES ?";

connection.query(query3, [staff], function(err, result){
    if(err)
        throw err;
    else
        console.log("Staff data inserted successfully");
});