import axios from "axios";

class UserService {
    // BASE_URL = "http://192.168.1.3:3001/"

    // Get All Users
    getAllUsers(config) {
        return axios.get(
             "http://192.168.1.3:3001/",config
        );
    }
}

export default new UserService();