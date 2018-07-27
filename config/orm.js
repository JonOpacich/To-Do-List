let connection = require('../config/connection');

//object relational mapper in vanilla js
let orm = {
    selectAll: () => {
        connection.query('SELECT * FROM list;', (err, result) => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log(result);
            cb(result);
        })
    },
    insertOne: (task) => {
        let queryString = 'INSERT INTO list (list_item, complete) VALUES (?,0);';
        connection.query(queryString, [task], (err, result) => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            return result;
        })
    },
    updateOne: (col,val,id) => {
        let queryString = 'UPDATE list SET ?? = ? WHERE id=?;' ;
        connection.query(queryString, [col,val,id], (err, result) => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log(result);
            cb(result);
        })
    }
}

module.exports = orm;