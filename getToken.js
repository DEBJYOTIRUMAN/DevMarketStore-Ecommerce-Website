export const getToken = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
        return {};
    }
    return token;
};