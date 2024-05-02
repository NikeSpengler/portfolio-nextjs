export const GET = async(req, res) => {
    try {

        connectToDb()

        const projects = await Project.find()
        return NodeNextResponse.json(projects)

    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch projects!");
    }
}