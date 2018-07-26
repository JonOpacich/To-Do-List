let mysql = require('mysql');

let connection = function(){

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'todo_db'
  });
   
  connection.connect(err => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });
}

module.exports = connection;