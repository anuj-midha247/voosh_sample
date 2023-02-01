import User from "../models/User"
import bcrypt from "bcryptjs";
export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    }
    catch (err) {
        return console.log(err);
    }
    if (!users) {
        return res.status(500).json({ message: "Unexpected Error Occured" });
    }
    return res.status(200).json({ users }); 
}

export const signup = async(req,res,next)=> {
    const { name, phone, password } = req.body;
    if (!name && name.trim() === "" && !phone && phone.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    let user;
    try {
        user = new User({ name, phone, password:hashedPassword });
        user = await user.save();
    } catch (error) {
        return console.log(error);;
    }
    if (!user) {
        return res.status(500).json({ message: "Uexpected Error Occured" });
    }
    return res.status(201).json({ user });
}