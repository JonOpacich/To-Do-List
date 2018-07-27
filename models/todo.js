let orm = require('../config/orm');


let todo = {
    selectAll: () => {
        orm.selectAll((res) => {
            cb(res);
        })
    },
    insertItem: (task) => {
        orm.insertOne(task,(res) => {
            return res;
        })
    },
    complete: (val,id) => {
        orm.updateOne('complete',val,id,(res) => {
            cb(res);
        })
    },
    edit: (val,id) => {
        orm.updateOne('list_Item',val,id,(res) => {
            cb(res);
        })
    }

}

module.exports = todo;