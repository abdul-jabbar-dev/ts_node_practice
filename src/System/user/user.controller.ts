import { Request, Response } from "express";
import { createAUserFromDB, getAllUserFromDB } from "./user.services";
import { IUser } from "./user.interface";

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const user = await getAllUserFromDB()
        res.send(user)
    } catch (error) {

    }
}
export const createAUser = async (req: Request, res: Response) => {
    try {
        const userInfo:IUser = req.body 
        const user = await createAUserFromDB(userInfo)

        res.send(user)
    } catch (error) {

    }
}