import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

//Auth user @ACCESS: PUBLIC
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // Find user by email and password
    const user = await User.findOne({ email })

    if (user && await (user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})
export { authUser }