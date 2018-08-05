import UserRepo from '../repos/userRepo'
import { usersRoute } from '../routes/routes'



export default class UserController {

    constructor(){
        
        this._userRepo = new UserRepo()
    }
    //ROUTES//
    registerRoutes(app){
        app.post(usersRoute.login, this.login.bind(this))
        app.get(usersRoute.getUsers, this.getAllUsers.bind(this))
        app.post(usersRoute.postUser, this.createUser.bind(this))
        app.delete(usersRoute.deleteUser, this.deleteUser.bind(this))
        app.put(usersRoute.updateUser, this.updateUser.bind(this))
    }


    //HANDLERS
    createUser(req, res){
        
        const userDto = req.body
        console.log(userDto)
        this._userRepo.createUser(userDto)
            .then((user) => {
                res.json(
                    {
                        success: true,
                        user
                    })
            }, (e) => res.send(e))
    }

    login(req, res){
        
        const userDto = req.body
        this._userRepo.findUser(userDto)
            .then((user) => {
                if (!user) 
                    return res.status(404)
                user.comparePasswords(userDto.password)
                    .then(() => {
                        res.json(user)    
                    }).catch((e) => res.status(400).send(e))
            })
    }
    getUser(){}
    getAllUsers(){}
    deleteUser(){}
    updateUser(){}



}