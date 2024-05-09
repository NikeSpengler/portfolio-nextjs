// import { connect } from "mongoose"
// import { Project } from "./models"
// import { connectToDb } from "./coonectToDb"

// const projects = [
//     {id:1, title: 'React App', body: '.....'},
//     {id:2, title: 'React App', body: '.....'},
//     {id:3, title: 'React App', body: '.....'},
//     {id:4, title: 'React App', body: '.....'},
// ]

// export const getProjects = async () => {
//     try {
//         connectToDb();
//         const projects = await Project.find();
//         return projects;

//     } catch(err){
//         console.log(err);
//         throw new Error("Failed to fetch posts")
//     }
// };

// export const getProject = async (slug) => {
//     try {
//         connectToDb();
//         const project = await Project.find({ slug });
//         return project;

//     } catch(err){
//         console.log(err);
//         throw new Error("Failed to fetch post")
//     }
// };