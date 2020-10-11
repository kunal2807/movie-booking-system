import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'cheeksquad@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'John@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Admin User',
        email: 'nintendo69@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    }
]
export default users