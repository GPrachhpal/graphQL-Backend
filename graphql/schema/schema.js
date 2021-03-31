import {buildSchema} from 'graphql';

const schema = buildSchema(`

    type Course {
        _id: ID
        courseName: String!
        category: String
        price: String!
        language: String
        Stack: Stack
        teachers: [TeachingAssists]!
    }

    type TeachingAssists {
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    input CourseInput {
        courseName: String!
        category: String
        price: Int!
        language: String
        Stack: Stack
        teachers: [TeachingAssistsInput]!
    }

    input TeachingAssistsInput{
        firstName: String
        lastName: String
        experience: Int 
    }

    type User {
        _id: ID!
        email: String!
        password: String
    }

    input UserInput{
        email: String!
        password: String!
    }

    type RootQuery {
        getCourse(id: ID): Course
        getUser(id: ID): User
    }

    type RootMutation {
        createCourse(input: CourseInput): Course
        createUser(user: UserInput): User
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`)

export default schema;