import axios from "axios";
export const userLogin = async (email, password) => {
    const url = "https://api.escuelajs.co/api/v1/auth/login";

    try {
        const {data} = await axios.post(url, {
            email: email,
            password: password
        }) 
        return data;
    } catch(err) {
        return err;
    }
}