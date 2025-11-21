const app = require("./app");
const prisma = require("./config/database");

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await prisma.$connect();
        console.log("Database Connected");

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost${PORT}`)
        })
    } catch (err) {
        console.log("Server start error:", err);
        process.exit(1);
    }
}

startServer();