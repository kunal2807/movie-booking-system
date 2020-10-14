import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.TWT_SECRET, {
        expiresIn: '31d'
    })
}
export default generateToken;