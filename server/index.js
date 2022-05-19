var express = require('express');
var sql = require('mysql2');
var cors = require('cors');
const res = require('express/lib/response');
var app = express();

app.use(cors());

app.use(express.json());

const db = sql.createConnection({
    user:"root",
    host:"localhost",
    password:"admin",
    database:"employee",
});

app.get('/',(req,res)=>{
    res.end("working")
})


app.get('/getallemployee',(req,res)=>{
    db.query("select * from employees",(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
})


app.get('/deleteemp/:id',(req,res)=>{
    db.query(`select * from employees where employee_id = ${req.params.id}`,(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
})

app.post('/dept',(req,res)=>{
    console.log(req.body.deptem);
    const str = req.body.deptem;
    
    
    db.query(`select * from employees where ${str}`,(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
})


app.get('/gend/:id',(req,res)=>{
    db.query(`select * from employees where gender = '${req.params.id}'`,(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
})



app.listen(3001,()=>{
    console.log("server running on the port 3001");
}
)
    
    
