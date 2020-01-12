import axios from "axios";

//allcenters
export async function getAllproject() {
    try {
        const projects = await axios.get("http://localhost:8090/projects");

        return projects.data.info;

    } catch (error) {
        return error.message;
    }
}

//single project
export async function getSingleProjectA(id) {
    try {
        const token = await JSON.parse(localStorage.getItem("token"));
        const project = await axios.get(`http://localhost:8090/project/${id}`);
        console.log(project)
        return project.data.info;
        // console.log(project.data)
    } catch (error) {
        return error;
    }
}

//single user
export async function getUserData(id) {
    try {
        const token = await JSON.parse(localStorage.getItem("token"));
        const info = await axios.get(`user/${id}`, {
            headers: {
                Authorization: token
            }
        });
        console.log("data" + info.data);
        return info.data;
    } catch (error) {
        return error.message;
        // console.log('ee' + error.message)
    }
}

export async function userProfile(id) {
    try {
        const profile = await axios.get(`/api/v1/user/${id}`);
     
        return profile.data.info
    } catch (error) {
        return error.message
    }
}
//get single user
export async function getSingleUser(id) {
    try {
        const info = await axios.get(`/user/transact/${id}`)
        return info.data
    } catch (error) {
        return error.message
    }
}