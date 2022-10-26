const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123456",
    database: "my_database"
});

client.connect();
if(client){
    console.log("Database Connected!!");
}else{
    console.log("Database Not Connect!!.");
}

module.exports = client;