import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: { type: String, requiered: true },
        email: { type: String, requiered: true },
        password: { type: String, requiered: true },
        is_author: { type: Boolean, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
) 

const User = mongoose.model( 'users', schema)

export default User