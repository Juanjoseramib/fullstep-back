import mongoose from "mongoose";

let schema = new mongoose.Schema(
    {
        author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true },
        name: { type: String, required: true },
        url: { type: String, required: true },
        description: { type: String },
        comments: { type: String },
        reviews: { type: Number }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Video = mongoose.model( 'videos', schema)

export default Video
