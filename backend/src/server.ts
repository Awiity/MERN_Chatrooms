import app from "./app";
import env from "./util/validateEnv";
import mongoose from 'mongoose';

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Mongoose connected");
        app.listen(port, () => {
            console.log("server running on port: " + port);
        });
    })
    .catch(console.error);
// mongodb://<db_username>:<db_password>@<hostname>/?ssl=true&replicaSet=atlas-navamd-shard-0&authSource=admin&retryWrites=true&w=majority&appName=mern-learning