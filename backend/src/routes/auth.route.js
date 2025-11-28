import express from "express";
import { signup,login,logout,updateProfile} from "../controllers/auth.controllers.js";
import { protectRoute  } from "../middlewear/auth.middlewear.js";
import { arcjetProtection } from "../middlewear/arcjet.middlewear.js";
const router =express.Router();

router.use(arcjetProtection);

router.post("/signup",signup);
    
router.post("/login",login)   

router.post("/logout",logout)

router.post("/logout", logout);

router.put("/update-profile",protectRoute, updateProfile);

router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user));



export default router;