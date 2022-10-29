const client = require('./connect.js');

const express = require('express')
const app = express()

// parse application/json
app.use(express.json())

app.post("/auth/add", (req, res) => {
    const auth = req.body;
    let sql_add = `INSERT INTO auth (email,password) VALUES ('${auth.email}','${auth.password}')`;
    client.query(sql_add, (err,result_add)=>{
        if(!err){
            console.log("Insertion was successful.");
            res.json("Insertion was successful.");
            // res.json(result_add.rows);
            // console.table(result.rows);
        }else{
            console.log(err.message);
        }
    })
    client.end;
})



app.get("/users/show", (req, res) => {
    let sql_show = `SELECT * FROM users`;
    client.query(sql_show, (err,result_show)=>{
        if(!err){
            console.log(result_show.rows);
            res.json(result_show.rows);
            // console.table(result.rows);
        }else{
            console.log(err.message);
        }
    })
    client.end;
})

app.get("/users/add", (req, res) => {
    let sql_add = `INSERT INTO users (name,email) VALUES ('eee','eee@mail.com')`;
    client.query(sql_add, (err,result_add)=>{
        if(!err){
            console.log(result_add.rows);
            // res.json(result_add.rows);
            // console.table(result.rows);
        }else{
            console.log(err.message);
        }
    })
    
    let sql_show = `SELECT * FROM users`;
    client.query(sql_show, (err,result_show)=>{
        if(!err){
            console.log(result_show.rows);
            res.json(result_show.rows);
            // console.table(result.rows);
        }else{
            console.log(err.message);
        }
    })
    
    client.end;
})

app.get("/users/edit/:id", (req, res) => {
    let sql_edit = `UPDATE users SET name='fff', email='fff@mail.com' WHERE id='${req.params.id}'`;
    client.query(sql_edit, (err,result_edit)=>{
        if(!err){
            console.log(result_edit.rows);
            // res.json(result_edit.rows);
            // console.table(result.rows);
        }else{
            console.log(err.message);
        }
    })
    
    let sql_show = `SELECT * FROM users`;
    client.query(sql_show, (err,result_show)=>{
        if(!err){
            console.log(result_show.rows);
            res.json(result_show.rows);
            // console.table(result.rows);
        }else{
            console.log(err.message);
        }
    })

    client.end;
})

app.get("/users/del/:id", (req, res) => {
    let sql_del = `DELETE FROM users WHERE id='${req.params.id}'`;
    client.query(sql_del, (err,result_del)=>{
        if(!err){
            console.log(result_del.rows);
            // res.json(result_del.rows);
            // console.table(result.rows);
        }else{
            console.log(err.message);
        }
    })
    
    let sql_show = `SELECT * FROM users`;
    client.query(sql_show, (err,result_show)=>{
        if(!err){
            console.log(result_show.rows);
            res.json(result_show.rows);
            // console.table(result.rows);
        }else{
            console.log(err.message);
        }
    })

    client.end;

})


// NFT Ant Test
app.get("/nft", (req, res) => {
    let sql_show = `SELECT * FROM nft`;
    client.query(sql_show, (err,result_show)=>{
        if(!err){
            console.log(result_show.rows);
            res.json(result_show.rows);
            // console.table(result.rows);
        }else{
            console.log(err.message);
        }
    })
    client.end;
})
// /.NFT Ant Test

app.listen(5525, ()=> {
    console.log("Server started on port 5525")
})