import {createServer} from "./server";
import repository from "./db/repository";

const server = createServer();

const port = process.env.PORT || 3000;

server.listen(port, async () => {
    try {
        await repository.sequelizeClient.sync({force:true});
        console.log("Database successfully migrated");
    } catch (err) {
        console.error("Failed to connect to the database")
        console.error(err);
    }
    console.log(`API is running on ${port}`);
});