import axios from "axios";

const axiosPublic = axios.create({
    baseUrl: 'http://localhost:3000'

})
const usePublicAxios = () => {
    return axiosPublic;
};

export default usePublicAxios;