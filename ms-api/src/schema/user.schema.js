import mongoose from 'mongoose';

//oauth user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    googleId: {
        type: String,
        required: false
    },
    token: {
        type: String,
        required: true
    }
});

export const UserModel = mongoose.model('User', userSchema);