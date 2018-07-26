let orm = require('../config/orm');


let todo = {
    selectAll: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        })
    },
    insertItem: (task,cb) => {
        orm.insertOne(task,(res) => {
            cb(res);
        })
    },
    complete: (val,id,cb) => {
        orm.updateOne('complete',val,id,(res) => {
            cb(res);
        })
    },
    edit: (val,id,cb) => {
        orm.updateOne('list_Item',val,id,(res) => {
            cb(res);
        })
    }

}

module.exports = todo;