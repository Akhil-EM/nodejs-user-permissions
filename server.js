const express = require("express");
const app = express();
const {users,ROLE} = require("./data")
const projectRouter = require("./routers/projectRouter");

//the basic auth
const {authUser,authRole} = require("./basicAuth");

app.use(express.json());
app.use(setUser);//if a userid is found in request set according user in request
app.use('/projects',projectRouter);

app.get("/",function(req,res){
    res.send("homepage"); 
});

app.get('/dashboard',authUser,function(req,res) { 
   res.send("Dashboard page");
});

//auth for login and check for role
app.get("/admin",authUser,authRole(ROLE.ADMIN),function(req,res){
    res.send("Admin dashboard");
})

//if a userid is found in request set according user in request
function setUser(req,res,next){
   const userId = req.body.userId;
   if(userId){
       req.user = users.find(user => userId == user.id);
   }
   
    next();
}


app.listen(3000);