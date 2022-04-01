const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get('/api/v1/users', async (req,res) => {
    let all = await new UserController().getAll();
    return res.render('all',{all});
});
router.get('/api/v1/user_id', async (req,res) => {
    const user_id = req.query.id

    let user = await new UserController().getUser(user_id);
    console.log(user)
    res.render('user',{user})
});

//Create a todo.
router.post('/api/v1/users', async (req,res) => {
    let user = {
        username: req.body.params[0].userName,
        email: req.body.params[0].userEmail,
        password: req.body.params[0].userPass
    }
    await  new UserController().createUser(user)
    res.sendStatus(201);

});

//Update a user.
router.put('/api/v1/users/user_id', async (req,res) => {
    let user = {
        userId: req.body.params[0].userId,
        username: req.body.params[0].userName,
        email: req.body.params[0].userEmail,
        password: req.body.params[0].userPass
    }
    await  new UserController().updateUser(user)
    res.sendStatus(201);
});

//Delete user.
router.delete('/api/v1/users', async (req,res) => {
});

router.delete('/api/v1/users/user_id', async (req,res) => {
    try {
        const user_id = req.body.id
        await  new UserController().deleteUser(user_id)
    
        res.status(200).send({ message: 'Usuario exluido com sucess!', user_id });
        
    } catch (error) {
        res.status(500).send({ message: 'Erro interno', error });
    }

});

module.exports = router;