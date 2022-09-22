import * as express from 'express';
import mongoose, { ConnectOptions } from "mongoose";
import router from "./routes/router.js";

const PORT = 5000;
const DB_URL = "mongodb+srv://SwiftXLight:user1@cluster0.ccifhb8.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use("", router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
    } catch(e) {
        console.log(e);
    }
}

startApp();