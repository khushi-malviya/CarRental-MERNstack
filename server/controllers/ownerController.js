import { response } from "express";
import imagekit from "../configs/imageKit.js";
import User from "../models/User.js";
import fs from "fs"
import Car from "../models/Car.js";
//API to Change Role of User
export const changeRoleToOwner = async (req,res) =>{
    try{
        const {_id} =req.user;
        await User.findByIdAndUpdate(_id,{role:"owner"})
        res.json({success: true, message:"Now you can list cars"})
    } catch (error){
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

// API to list car

export const addCar = async (req,res)=>{
    try{
        const {_id}= req.user;
        let car= JSON.parse(req.body.carData);
        const imageFile = req.file;

        //Upload Image to ImageKit
        const fileBuffer = fs.readFileSync(imageFile.path)
        await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:'/cars'
        })

        // Optimization through imagekit URL transformation
        var optimizedimageURL = imagekit.url({
            path : response.filePath,
            urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/endpoint/",
            transformation : [
                 {width: '1280'},//Width resizing
                 {quality : 'auto'}, //AUto compression
                 { format : 'webp'}//Convert to modern format
            ]
        });
        const image=optimizedimageURL;
        await Car.create({...car, owner:_id,image})
        res.json({success:true, message:"Car Added"})
    } catch (error){
        console.log(error.message);
        res.json({success:false, message:error.message})
    }
}
