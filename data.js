const ROLE ={
    ADMIN:"admin",
    BASIC:"basic"
}

module.exports ={
    ROLE:ROLE,
    users:[
       {id:1,name:"akhil",role:ROLE.ADMIN},
       {id:2,name:"amal",role:ROLE.BASIC},
       {id:3,name:"ajil",role:ROLE.BASIC},
    ],
    projects:[
        {id:1,name:"akhil's project",userId:1},
        {id:2,name:"amal's project",userId:2},
        {id:3,name:"ajil's project",userId:3},
    ]
}