import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const User = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "CourseMongo"
    }
})

const UserModel = mongoose.model("UserModel", User);

export default UserModel;