import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    img: {
        type: String,

    },
    userId: {
        type: String,
        require: true,
        unique: true,
        min: 1,
        max: 20,
    }, 
    slug: {
        type: String,
        require: true,
        unique: true,
    },
},
{ timestamps: true }
);

export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema)