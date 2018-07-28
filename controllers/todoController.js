let express = require('express');

let router = express.Router();

let todo = require('../models/todo.js');

router.get('/', (req, res) => {
    todo.selectAll(data => {
        let hbsobject = {
            items: data
        }
        res.render('index', hbsobject);
    })
})

router.post('/api/todo', (req, res) => {
    let newToDo = req.body.list_item;
    if (newToDo == "") {
        return res.status(400).end();
    }
    todo.insertItem(req.body.list_item,
        (result) => {
            res.json({ id: result.id })
        })
})

router.put('/api/todo/:id', (req, res) => {
    todo.complete(req.body.complete, req.params.id,
        (result) => {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        })
})

router.delete('/api/todo', (req, res) => {
    todo.delete((result) => {
        res.status(200).end();
    })
})




module.exports = router;
