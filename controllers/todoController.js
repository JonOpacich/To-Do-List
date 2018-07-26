let todo = require('../models/todo');
let express = require('express');

let router = express.Router();

router.get('/',(req,res)=>{
    todo.selectAll(data=>{
        let hbsobject = {
            items:data
        }
        res.render('index',hbsobject);
    })
})

router.post('/api/todo',(req,res)=>{
    todo.insertItem([
        'list_item','complete'
    ], [
        req.body.list_Item,req.body.complete
    ],(result)=>{
        res.json({id:result.insertId}) //where is insertID coming from? Joe uses in his cat example for his post method
    })
})
// router.put('/',(req,res)=>{
//     todo.selectAll(data=>{
//         let hbsobject = {
//             //
//         }
//         res.render('index',hbsobject);
//     })
// })


module.exports = router;
