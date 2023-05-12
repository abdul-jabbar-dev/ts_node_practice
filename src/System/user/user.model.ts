import mongoose, { Schema, mongo } from "mongoose";
import { IUser, IUserFullName, IUserModel } from "./user.interface";

const userSchima = new Schema<IUser, IUserModel, IUserFullName>({

    name: { firstName: String, lastName: String },
    age: { type: Number },
    contactNo: { type: Number },
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: "male"
    },
    address: { type: String },
    email: String,
    role: {
        type: String,
        enum: ['Admin', 'Subscribe'],
        default: "Subscribe"
    }
}, { timestamps: true })


userSchima.method('getFullName', function getFullName() {
    return this.name.firstName + " " + this.name.lastName
})


const USER = mongoose.model("user", userSchima)
export default USER