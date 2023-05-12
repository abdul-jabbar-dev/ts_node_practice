import express, { Application } from 'express'
import cors from 'cors'
import UserRoute from './System/user/user.route'

const app: Application = express()


app.use(cors())
app.use(express.json())
app.use('/user', UserRoute)


app.get('/', (req, res) => {
    res.send("home")
})

export default app