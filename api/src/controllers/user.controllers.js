import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";

export const registerUser = asyncHandler(async (req,res) => {
    // console.log(req.body)
    try {
    const {
        name,
        religion,
        income,
        gender,
        caste,
        maritalStatus,
        age,
        houseOwned,
        phoneNumber,
        aadharNumber,
        region,
        education

    } = req.body

    const exisitingUser = await User.findOne(
        {
            name,
            religion,
            income,
            gender,
            caste,
            maritalStatus,
            age,
            houseOwned,
            phoneNumber,
            aadharNumber,
            region,
            education
        }
    )
    // console.log(exisitingUser);
    if(exisitingUser) {
        throw new ApiError(404,"user already exists")
    }
    const hashedCard = await bcrypt.hash(aadharNumber,13)
    
    const newUser = await User.create(
        {
            name,
            religion,
            income,
            gender,
            caste,
            maritalStatus,
            age,
            houseOwned,
            phoneNumber,
            aadharNumber : hashedCard,
            region,
            education
        }
    )

    return res
    .status(200)
    .json(new ApiResponse(200,newUser,"User Registered Sucessfully"))
}
     catch (error) {
        throw new ApiError(404,"Registration Failed",error.message)
    }
})
