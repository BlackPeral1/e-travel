import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
    BASE_URL = "http://192.168.1.3:3001/"

    // User Sign In
    login(data) {
        console.log(data)
        return axios.post(
            "http://localhost:3001/api/auth/login", data).then(response => {
            if (response.data.data.access_token) {
                AsyncStorage.setItem('user', JSON.stringify(response.data.data));
            }
            return response.data;
        });
    }

    // User Sign Up
    register(user) {
        return axios.post(
            "http://localhost:3001/api/auth/register", user
        );
    }

    // User Sign Out
    logout() {
        localStorage.removeItem("user");
    }

    // Current User
    getCurrentUser() {
        return AsyncStorage.getItem('user');
    }


//     const [isLoading, setIsLoading] = useState(false);
//     const [userToken, setUserToken] = useState(null);
//
//     const login = () => {
//
//         setIsLoading(true);
//         axios.post("http://localhost:3001/api/auth/login")
//         setUserToken(''ioiojkad);
//         AsysncStorage.setItem('userToken', userToken);
//         setIsLoading(false);
//     }
//
//      const Logout = () => {
//
//         setIsLoading(true);
//         setUserToken(null);
//         AsysncStorage.removeItem('userToken', userToken);
//         setIsLoading(false);
//     }
//
//     const isLoggedIn = () => {
//
//         try{
//             setIsLoading(true);
//             let userToken =  await AsyncStorage.getItem('userToken');
//             setUserToken(userToken);
//             setIsLoading(false);
//
//         }catch (e) {
//                 console.log(`isLogged in error ${e}`)
//         }
//     }
//     useEffect(() => {
//         isLoggedIn();
// }, [])
//
// }

}

export default new AuthService();