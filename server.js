import express from 'express'
import schema from "./graphql/schema/schema.js";
import resolvers from "./graphql/Resolvers/resolver.js";
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';

const app = express();

const root = resolvers;

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
    })
)

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.qbyad.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then( res => {
        console.log(res)
        app.listen('5000', ()=>{
            console.log("Listening on port 5000...")
        })
    })
    .catch( err => {console.log("err :-",err)})
