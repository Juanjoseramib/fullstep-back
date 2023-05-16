import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        user_id: { type: mongoose.Types.ObjectId, ref: 'users', requiered: true },
        name: { type: String, require: true },
        last_name: { type: String },
        colaborators: { type: String, require: true },
        active: { type: Boolean, require: true }
    },{
        timestamps: true,
        versionKey: false
    }
)

const Author = mongoose.model('authors', schema)

export default Author