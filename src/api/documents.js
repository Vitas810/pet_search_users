import axios from "axios"

const getDocuments = url => {
    return axios.get(url).then(response => response.data)
}

export default {
    getDocuments
}