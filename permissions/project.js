const {ROLE} = require("../data");

//who has access to view project or projects // 
function canViewProject(user,project) {
    //true if admin or base user
    return (
        user.role === ROLE.ADMIN ||
        project.userId === user.id
    )
}

//if admin view every projects else own projects
function scopedProjects(user,project){
    if(user.role === ROLE.ADMIN) return project;

    return project.filter(project => project.userId == user.id);
}

//can delete only his own project
function canDeleteProject(user,project) {

    return project.userId === user.id;
}


module.exports = {
  canViewProject,
  scopedProjects,
  canDeleteProject
}