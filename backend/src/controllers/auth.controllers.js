import { generateToken } from "../lib/utils";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const signup = async (req,res)=> {
    const {fullName,email,password}=req.body


    try {
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        if(password.length<6){
            return res.status(400).json({message:"Password must be at least 6 characters"});
        }

        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message:"Invalid email format"});
        }

    const user =await User.findOne({email}) 
    if (user)  return res.status(400).json({message:"Email already exits"})

const salt =await bcrypt.genSalt(10)
const hashesdPassword = await bycrpt.hash(password,salt)

const newUser =new User({
    fullName,
    email,
    password:hashesdPassword,
})

if (newUser){
  generateToken(newUser._id, res)
  await newUser.save()

  res.status(201).json({
    _id:newUser._id,
    fullName:newUser.fullName,
    email:newUser.email,
    profilePic:newUser.profilePic,

  })
}else {
    res.status(400).json({messagge:"Invalid User Data"})
}



    } catch (error) {
        console.log("Error in signup controller:",error)
        res.status(500).json({message:"Internal server error"})
    }
    
};