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
    id: {
        type: String,
        required: false
    }
});

export const UserModel = mongoose.model('User', userSchema);