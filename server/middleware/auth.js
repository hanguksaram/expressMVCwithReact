import { User } from '../models/user'

const auth = (req, res, next) => {
    
    console.log(req.cookies.xAuth)
    const token = req.cookies.auth

    User.findByToken(token)
        .then((user) => {
            if (!user)
                return res.sendStatus(401)
            req.token = token
            req.user = user
            next()
        })
        .catch((e) => res.sendStatus(401))

}
export { auth }