import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js';

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
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

const getUserProfile = asyncHandler(async (req, res) => {

    // Find user by email and password
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})
// NEW USER POST api/users
const registerUser = asyncHandler(async (req, res) => {
    const { email, password, name } = req.body

    // Find user by email and password
    const userExists = await User.findOne({ email })

    if (userExists) {
        //if user already exists sned 400 for bad request
        res.status(400)
        throw Error('User already exixsts!')
    }
    const user = await User.create({
        name,
        email,
        password,
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})
// Update User profile PUT api/user/profile. Private
const updateUserProfile = asyncHandler(async (req, res) => {

    // Find user by email and password
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || username
        user.email = req.body.email || email
        if (req.body.password) { user.password = req.body.password }
        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

export { authUser, getUserProfile, registerUser }