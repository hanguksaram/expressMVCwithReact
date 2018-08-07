import UserRepo from '../repos/userRepo'
import { usersRoute } from '../routes/routes'
import { auth } from '../middleware/auth'
import user_reducer from '../../client/src/reducers/user_reducer';


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
        app.get(usersRoute.logout, auth, this.logout.bind(this))
        app.get(usersRoute.isAuth, auth, this.isAuthorised.bind(this))
        app.get('/api/users/:id',this.getUser.bind(this))
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
    isAuthorised(req, res) {
        res.json({
            isAuth: true,
            id: req.user._id,
            email:req.user.email,
    })
    }
    login(req, res) {

        const userDto = req.body
        this._userRepo.findUser(userDto)
            .then((user) => {
                if (!user)
                    return res.status(404)
                user.comparePasswords(userDto.password)
                    .then(() => {
                        return user.generateToken()
                            .then((user) => {
                                res.cookie('auth', user.token, 
                                {expires: new Date(Date.now + 1200000)})
                                    .json({
                                        isAuth: true,
                                        id: user._id,
                                        email: user.email
                                    })
                            })

                    }).catch((e) => res.status(400).send(e))
            })
    }

    logout (req, res) {
        

        req.user.deleteToken()
            .then((user) => {
                
                res.clearCookie('auth').sendStatus(200)
            }, (e) => {res.sendStatus(400)})
    }
    getUser(req, res){
        this._userRepo.findUserById(req.params.id)
            .then((user) => {
                if (!user) 
                    return res.sendStatus(404)
                res.json({
                    id: user._id,
                    name: user.email
                })
            }, (e) => res.status(500).send(e))
    }
    getAllUsers(req, res){

        this._userRepo.getAllUsers()
            .then((users) => {
                res.json(users)
            }, (e) => {res.status(400).send(e)})
    }
    deleteUser(){}
    updateUser(){}



}