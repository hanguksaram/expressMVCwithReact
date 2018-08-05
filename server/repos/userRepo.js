import { User } from '../models/user'


export default class UserRepo {

    createUser(userDto){
        
        const user = new User(userDto)
        return user.save()
        
    }
    findUser(userDto) {
        
        return User.findOne({'email': userDto.email})
    }

}