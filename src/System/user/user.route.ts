import { Router } from "express";
import { createAUser, getAllUser } from "./user.controller";

const UserRoute = Router()
UserRoute
    .get('/', getAllUser)
    .post('/',createAUser)

export default UserRoute