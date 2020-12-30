import axios from "axios";

const baseUrl = "http://localhost:5000/api/"



export default {

    customer(url = baseUrl + 'api/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.put(url, newRecord),
            update: (id, updateRecord) => axios.post(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}

