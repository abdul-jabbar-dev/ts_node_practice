
import { IUser } from "./user.interface"
import USER from "./user.model"

export const getAllUserFromDB = async () => {
    const user = await USER.find({})
    return user
}
export const createAUserFromDB = async (userInfo: IUser) => {
    const user = await new USER(userInfo)
    console.log(user.getFullName())
    user.save()
    return user
}