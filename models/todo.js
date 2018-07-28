let orm = require('../config/orm');


let todo = {
    selectAll: (cb) => {
        orm.All((res) => {
            cb(res);
        })
    },
    insertItem: (task,cb) => {
        orm.Insert(task,(res) => {
            cb(res);
        })
    },
    complete: (status,id,cb) => {
        orm.Update(status,id,(res) => {
            cb(res);
        })
    },
    delete: (cb) => {
        orm.Delete((res) => {
            cb(res);
        })
    }
}

module.exports = todo;