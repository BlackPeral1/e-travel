import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
    BASE_URL = "http://192.168.8.160:3001/api/auth"

    // User SignIn
    login(data) {
        return axios.post(
            this.BASE_URL + "/login", data).then(response => {
            if (response.data.data.access_token) {
                AsyncStorage.setItem('user_id', response.data.data.user._id);
                AsyncStorage.setItem('user_name', response.data.data.user.name);
                AsyncStorage.setItem('user_email', response.data.data.user.email);
                AsyncStorage.setItem('user_token', response.data.data.access_token);
            }
            return response;
        });
    }

    // User SignUp
    register(user) {
        return axios.post(
            this.BASE_URL + "/register", user
        );
    }

    // User SignOut
    userLogout() {
        AsyncStorage.setItem('user_id', "logout");
        AsyncStorage.setItem('user_name', "logout");
        AsyncStorage.setItem('user_email', "logout");
        AsyncStorage.setItem('user_token', "logout");
    }

    // Current User Id
    getCurrentUserId() {
        return AsyncStorage.getItem('user_id');
    }

    // Current User Full Name
    getCurrentUserName() {
        return AsyncStorage.getItem('user_name');
    }

    // Current User Email
    getCurrentUserEmail() {
        return AsyncStorage.getItem('user_email');
    }

    // Current User Token
    getCurrentUserToken() {
        return AsyncStorage.getItem('user_token');
    }
}

export default new AuthService();
