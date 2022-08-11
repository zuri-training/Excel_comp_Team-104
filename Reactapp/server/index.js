const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const cors = require("cors");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, './../client/public/files');
    },

    filename: function (req, file, callback) {
      callback( null, file.originalname);
    }
});
  
  
const upload = multer({storage: storage}).array('file', 100);

const db = require("./db");
const { spawn } = require("child_process");
db.connect((err)=>{
    err ? console.log(err) : console.log('Connected...')
});

app.use(cors());
app.use(express.json());

app.post('', (req, res) => { 
    upload(req, res, async (err) =>  {
        
    });
});

app.post('/analyze', (req, res)=>{
    let first = req.body.first;
    console.log('///'+first);
    let second = req.body.second;
    let msg = [];
    let arr = req.body.filename;
    
        const python = spawn('python', ['excelmaster.py', arr, first, second]);
        python.stdout.on('data', (data)=>{
            let sentdata = data.toString();
            if(sentdata.slice(sentdata.lastIndexOf('.'))===".xlsx"){
                msg.push(sentdata);
            }
            console.log('data=>'+sentdata);
        });

        python.on('close', (code)=>{
            console.log('close=>'+code);
            res.send(msg);
        });
});

app.post('/signup', (req, res)=>{
    let name = req.body.name;
    let pass = req.body.pass;
    let email = req.body.email;
    let tel = req.body.tel;

    db.query('insert into userdata (username, userpass, email, tel) values (?, ?, ?, ?)', [name, pass, email, tel], (err, data)=>{
        if(err){
            console.log('done');
            res.send(name);
        }else{
            console.log(err);
            res.send(err);
        }
    });
});

app.post('/login', (req, res)=>{
    let name = req.body.name;
    let pass = req.body.pass;
    console.log(name+"+++"+pass);
    db.query('select * from userdata where email=? and userpass=?', [name, pass], (err, data)=>{
        if(err){
            console.log(err);
            res.send('Invalid');
        }else{
            if(data.length > 0){
                console.log(name);
                res.send(name);
            }else{
                res.send('Invalid')
            }
        }
    })
});

app.listen('3001', (req, res)=>{
    console.log('Server running...');
});