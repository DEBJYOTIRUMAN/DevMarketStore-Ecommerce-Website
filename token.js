import { getToken } from "./getToken";

const token = getToken();

const refreshToken = async () => {
    if (!token || !token.refresh_token) {
        return;
    }

    try {
        const response = await fetch("https://devmarket-nknv.onrender.com/api/refresh", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh_token: token.refresh_token }),
        });

        if (response.ok) {
            const newToken = await response.json();
            localStorage.setItem("token", JSON.stringify(newToken));
        } else {
            console.error("Failed to refresh token:", response.status);
        }
    } catch (error) {
        console.error("Error refreshing token:", error);
    }
};

const startTokenRefreshInterval = () => {
    refreshToken();

    setInterval(() => {
        refreshToken();
    }, 300000);
};

startTokenRefreshInterval();
