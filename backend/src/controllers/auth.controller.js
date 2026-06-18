
export async function checkAuth(req,resp,next) {
    if(!req.user){
        return resp.status(401).json({ success: false, message: "unauthorized user" });
    }
    
    resp.status(200).json(req.user);
}