import User from "../models/User.js";
import jwt from "jsonwebtoken";


export const protect = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.json({
            success:false,
            message:"Not Authorized"
        })
    }

    try {

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        req.user = await User.findById(decoded.id).select("-password");


        if(!req.user){
            return res.json({
                success:false,
                message:"User not found"
            })
        }


        next();


    } catch(error){

        console.log(error.message);

        return res.json({
            success:false,
            message:"Not Authorized"
        })
    }
}