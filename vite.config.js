import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                home: resolve(__dirname, "home.html"),
                about: resolve(__dirname, "about.html"),
                antivirus: resolve(__dirname, "antivirus.html"),
                applemobiles: resolve(__dirname, "applemobiles.html"),
                beauty: resolve(__dirname, "beauty.html"),
                budgetlaptop: resolve(__dirname, "budgetlaptop.html"),
                cart: resolve(__dirname, "cart.html"),
                components: resolve(__dirname, "components.html"),
                contact: resolve(__dirname, "contact.html"),
                desktops: resolve(__dirname, "desktops.html"),
                electronics: resolve(__dirname, "electronics.html"),
                games: resolve(__dirname, "games.html"),
                gaminglaptop: resolve(__dirname, "gaminglaptop.html"),
                haircare: resolve(__dirname, "haircare.html"),
                headphones: resolve(__dirname, "headphones.html"),
                laptops: resolve(__dirname, "laptops.html"),
                makeup: resolve(__dirname, "makeup.html"),
                mimobiles: resolve(__dirname, "mimobiles.html"),
                mobiles: resolve(__dirname, "mobiles.html"),
                monitors: resolve(__dirname, "monitors.html"),
                oneplusmobiles: resolve(__dirname, "oneplusmobiles.html"),
                oppomobiles: resolve(__dirname, "oppomobiles.html"),
                orders: resolve(__dirname, "orders.html"),
                premiumapps: resolve(__dirname, "premiumapps.html"),
                products: resolve(__dirname, "products.html"),
                professionalslaptop: resolve(__dirname, "professionalslaptop.html"),
                samsungmobiles: resolve(__dirname, "samsungmobiles.html"),
                skincare: resolve(__dirname, "skincare.html"),
                softwares: resolve(__dirname, "softwares.html"),
                studentlaptop: resolve(__dirname, "studentlaptop.html"),
                tablets: resolve(__dirname, "tablets.html"),
                vivomobiles: resolve(__dirname, "vivomobiles.html"),
            },
        },
    },
});
