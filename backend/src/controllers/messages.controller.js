import userModel from "../model/user.model.js";


export async function getUsersForSideBar(req,resp) {
    try {
        const loggedInUserId = req.user._id;

        const filtereUsers = await userModel.find({_id : { $ne : loggedInUserId}}).select("-clerkId");

        resp.status(200).json({
            success : true,
            filtereUsers,
        })
    } catch (error) {
        resp.status(500).json({
            success : false,
            message : `error in /api/messages/users API :- ${error} `,
        })
    }
}