import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schemaEvent = new Schema({
    courseName: {
        type: String,
        require: true
    },
    category:  String,
    price: {
        type: Number,
        require: true
    },
    language: String,
    teachers: [{firstName: String, lastName: String, experience: Number}],
    createdByCourse: {
        type: Schema.Types.ObjectId,
        ref: "UserModel"
    }
})

const CourseMongo = mongoose.model("Course",schemaEvent);

export default CourseMongo;