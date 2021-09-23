import axios from "axios";

const instance = axios.create({
    baseURL : global.settings.MEDIA_API_BASE_URL
});

export default instance;
