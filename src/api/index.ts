import axios from "axios"

const getUsers = async (url: string) => {
    return axios.get(url).then(response => response.data);
}

export default {
    getUsers
}