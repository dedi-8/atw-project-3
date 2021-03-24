const express = require('express')
const router =  express.Router()

let users = [
    {id: 1, nama: 'putra', email: 'putra@gmail.com'},
    {id: 2, nama: 'hengki', email: 'hengki@gmail.com'}
]

router.get('/users', function(req, res){
    res.json(users)
});
router.post('/users', function(req, res){
    console.log(req.body)
    res.send(req.body)
});

router.put('/users/:id', function (req, res) {
    const id = req.params.id
    users.filter(user => {
        if(user.id == id){
            user.id = id
            user.nama = req.body.nama
            user.email = req.body.email

            return user
        }
    })
    res.json(users)
  })

router.delete('/users/:userId', function(req, res){
    let id = req.params.userId
    users = users.filter(user => user.id != id)
    res.send(users)
})

module.exports = router