import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { loginValidation } from './validations.js';
import handleValidationsErrors from './utils/handleValidationsErrors.js';
import * as UserController from './controllers/UserController.js'


mongoose.connect('mongodb+srv://instaclon:Z3U56dRaLyr9eGVl@cluster0.rir1jrf.mongodb.net/blog?retryWrites=true&w=majority')
.then( () => {console.log("DB connected")})
.catch( (err) => {console.log("DB errror", err)})

const app = express();

app.get('/', (req,res) => {
  res.send("fuck oo it")
})

app.use(express.json())
app.use(cors());

//  REQUESTS
app.post('/login',loginValidation, handleValidationsErrors, UserController.login)
app.get('/posts', UserController.getAll)
app.delete('/posts/:id', UserController.remove)



app.listen(4444, (err)=> {
  if(err){
    return console.log(err)
  }
  console.log("server OK")
})