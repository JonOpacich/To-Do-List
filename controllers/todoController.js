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
    todo.insertItem(req.body.list_item
    ,(result)=>{
        res.json({id:result.id})
    })
})
// router.put('/api/todo/:id',(req,res)=>{
        // let id = req.params.id;
//     todo.selectAll(data=>{
//         let hbsobject = {
//             //
//         }
//         res.render('index',hbsobject);
//     })
// })


module.exports = router;
