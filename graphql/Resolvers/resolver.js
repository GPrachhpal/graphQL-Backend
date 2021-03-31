import CourseMongo from '../../models/event.js';
import UserModel from '../../models/user.js';

const resolvers = {
    getCourse : ({ id }) => {
        return CourseMongo.find({_id: id})
            .then( Course => {
                return Course[0]
            })
    },
    createCourse : ({ input }) => {
        const event = new CourseMongo({
            "courseName": input.courseName,
            "category": input.category,
            "price": input.price,
            "language": input.language,
            "teachers": input.teachers
        })
        return event
                .save()
                .then( res => {
                    console.log(res)
                    return { ...res._doc}
                })
                .catch( err=> {
                    console.log(err)
                    throw err
                })
    },
    createUser : ({user}) => {
        console.log("args :-", user.email)
        const userinfo = new UserModel({
            "email": user.email,
            "password": user.password,
        })
        console.log("userinfo :-",userinfo)
        return userinfo 
            .save()
            .then( res => {
                console.log("user res",res)
                return { ...res._doc}
            })
            .catch( err => {
                console.log(err)
                throw err
            })
    }
}

export default resolvers;