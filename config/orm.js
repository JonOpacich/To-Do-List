let connection = require('../config/connection');

//object relational mapper in vanilla js
let orm = {
    All: (cb) => {
        connection.query('SELECT * FROM list;', (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    Insert: (task, cb) => {
        let queryString = 'INSERT INTO list (list_item, complete) VALUES (?,0);';
        connection.query(queryString, [task], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    Update: (status, id, cb) => {
        let queryString = 'UPDATE list SET complete = ? WHERE id=?;';
        connection.query(queryString, [status, id], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    Delete: (cb) => {
        let queryString = 'DELETE FROM list WHERE complete=1';
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;