const express=require('express');
const mongo = require('mongodb').MongoClient;

const router=express.Router();

mongo.connect('mongodb://localhost:27017/myEmployee',function(err,client){
    if(err ) throw err;
    console.log('Connected to mongodb');

    var db = client.db('myEmployee');
    employees=db.collection('employees');

    router.get('/',(req,res)=>{
        res.send('From API route');
    });
    
    router.post('/register',(req,res)=>{
        let userData=req.body;
        employees.find({emp_id:userData.emp_id}).toArray(function(err,response){
            if(!response[0]){
                employees.insert(userData,function(){
                    data={success:1};
                    res.status(200).send(data);
                });
            }else{
                data={success:0};
                res.status(200).send(data);
            }
        });
    });

    router.post('/login',(req,res)=>{
        let userData=req.body;
        var phone=userData.emp_number;
        var email=userData.emp_email;

        if(phone!=""){
            employees.find({emp_number:phone}).toArray(function(err,response){
                if(!response[0]){
                    var data={success:0};
                    res.status(200).send(data);
                }else{
                    var data={
                        success:1,
                        employee_name:response[0].emp_name,
                        employee_dept:response[0].emp_dept    
                    };
                    res.status(200).send(data);
                }
            });
        }else if(email!=""){
            employees.find({emp_email:email}).toArray(function(err,response){
                if(!response[0]){
                    var data={success:0};
                    res.status(200).send(data);
                }else{
                    var data={
                        success:1,
                        employee_name:response[0].emp_name,
                        employee_dept:response[0].emp_dept
                    };
                    res.status(200).send(data);
                }
            });
        }
        
    });


    router.post('/home',(req,res)=>{
        employees.find().sort({id:1}).toArray(function(err,response){
            if(!response[0]){
                var data={success:0};
                    res.status(200).send(data);
            }else{
                res.status(200).send(response);
            }
        });
    });

    router.post('/search',(req,res)=>{
        let userData=req.body;
        employees.find(userData).sort({id:1}).toArray(function(err,response){
            if(!response[0]){
                var data={success:-1};
                res.status(200).send(data);
            }else{
                res.status(200).send(response);
            }
        });
    });
});

module.exports=router;