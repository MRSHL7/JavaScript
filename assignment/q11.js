const mysql = require('mysql');
const { log } = require('node:console');

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "db"
})

db.connect ((err)=>{
    if(err){
        throw err
    }
    console.log("Connected to the databse......");
})

function insertData(name,age,courses,email){
    const sql ="insert into students (name,age,courses,email) values(?,?,?,?) ";
    db.query(sql,[name,age,courses,email],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Data Inserted ",result.insertId);
        }
    })
}
// insertData("Sahil",22,"html","sahil@gmail");
// insertData("Roman",30,"css","otc@gmail");
// insertData("Biran",35,"bst","gtr@gmail");
// insertData("Dom",40,"ui","dodge@gmail");


function deleteData(id){
    const sql ="delete from students where id = ?";
    db.query(sql,[id],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Data Deleted ",result);
        }
    })
}
// deleteData(5);


function showData(){
    const sql ="select * from students";
    db.query(sql,(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Data Showed ",result);
        }
    })
}
//showData();

function updateData(id,name) {
    const sql ="update students set name=? where id =?";
    db.query(sql,[name,id],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Data Updated ",result);
        }
    })
}
// updateData(6,"letty");

function searchData(id){
    const sql ="select * from students where id=?";
    db.query(sql,[id],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Data Showed ",result);
        }
    })
}
// searchData(7);