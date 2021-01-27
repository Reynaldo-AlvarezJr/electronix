import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin:true
    },
    {
        name:'Buba Fett',
        email:'Buba@example.com',
        password: bcrypt.hashSync('123456', 10),
       
    },
    {
        name:'Anakin Skywalker',
        email:'Anakin_Skywalker@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
]

export default users