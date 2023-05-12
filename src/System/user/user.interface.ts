import { Model } from "mongoose";

export interface IUser {
    name: {
        firstName: string;
        lastName: string
    };
    age: number;
    email?: string;
    role: "Admin" | "Subscribe";
    contactNo: number,
    gender: "male" | "female";
    address: string;
}

export interface IUserFullName {
    getFullName(): string
}
export type IUserModel =  Model<IUser,{},IUserFullName>