//find if logged in or not 
function authUser(req,res,next){
    if(req.user == null){
        res.status(403);
        return res.send("You need to signIn ")
    }

    next();
}

//check for the role
function authRole(role) {
    return (req,res,next) =>{
        if(req.user.role !== role){
            res.status(401);
            res.send("Not allowed");
        }

        next();
    }
}

module.exports ={
    authUser,
    authRole
}